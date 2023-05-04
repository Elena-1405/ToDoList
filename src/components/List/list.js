import css from './list.module.css'
import ListItem from './list-item.js'

export default function List (props) {
    const {todos} = props

    return (
        <div className={css.cards}>
           {todos.map(todo => {
            return (
                <div className={css.card}>
                    <h3>{todo.title}</h3>
                    <ul>
                        {todo.items.map(item => {
                                return <ListItem completed={item.completed} content={item.content} />            
                                })}
                    </ul>
                </div>
            )
        })}
         </div>
    )
}