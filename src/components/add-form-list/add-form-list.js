import React, {useRef,useState} from 'react';
import css from './add-form-list.module.css'
import nextId from 'react-id-generator'

export default function AddListForm(props) {
    const {addCard} = props
    const titleInput = useRef()
    const itemsInput = useRef()
    const [isFormValid, setFormValid] = useState(true)

    function handleSubmit(e) {
        e.preventDefault()
        const isValidated = isFormValidated ()
            if(isValidated) {
                const items = itemsInput.current.value.split(',').map(item => {
                    return {
                        id: nextId(),
                        content: item.trim(),
                        completed: false,
                    }
                })
                setFormValid(true)
                addCard({
                    title: titleInput.current.value,
                    items,
                })
            } else {
                setFormValid(false)
            }


    }

    function isFormValidated() {
        return titleInput.current.value !=='' && itemsInput.current.value !==''
    }

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.label} htmlFor="cardTitle">Card title</label>
            <input ref={titleInput} type="text" id="cardTitle" placeholder="Enter the title"/>
            <label className={css.label} htmlFor="cards">Enter list items separated by comma</label>
            <textarea ref={itemsInput} id="cards"></textarea>
            <button className={css.button} type="submit">Add</button>
            {!isFormValid && <p className={css.error}>List must have a title and at least one item</p>}
        </form>
    )
}