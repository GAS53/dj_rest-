import React from "react";

const TodoItem = ({ todo, del_func }) => {
    return (
        <tr>
            <td>
                {todo.project}
            </td>
            <td>
                {todo.text}
            </td>
            <td>
                {todo.created}
            </td>
            <td>
                {todo.updated}
            </td>
            <td>
                {todo.user}
            </td>
            <td>
                {(todo.is_activ) ? 'Активно' : 'Не активно'}
            </td>
            <td>
                <button onClic={() => del_func(todo.id)}>Удалить</button>
            </td>

        </tr>
    )
}


const TodoList = ({ todo, del_func }) => {
    return (
        <table>
            <th>
                Проект
            </th>
            <th>
                Описание
            </th>
            <th>
                Создан
            </th>
            <th>
                Обновлен
            </th>
            <th>
                Создатель
            </th>
            <th>
                Задание активно
            </th>
            <th>
                Удалить
            </th>
            {todo.map((todo) => <TodoItem todo={todo} del_func={del_func} />)}



        </table>
    )
}

export default TodoList
