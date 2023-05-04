import {useState} from 'react'
import css from './list.module.css'

export default function ListItem(props) {
    const{completed, content} = props
    const [isCompleted, setIsCompleted] = useState(completed)

    function onChange() {
        setIsCompleted(isCompleted => {
            return !isCompleted
        })
    }

    return (
        <li className = {css.listItem}>
            <input type="checkbox" checked={isCompleted} onChange={onChange}/>
                {isCompleted? (
            <del>{content}</del>
               ) : (
            <span>{content}</span>
              )}
        </li>
    )
}
