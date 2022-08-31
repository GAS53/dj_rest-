import React from "react";

function TodoItem(todo) {
    return (
        <tr>
            <td>
                {todo.todo.project}
            </td>
            <td>
                {todo.todo.text}
            </td>
            <td>
                {todo.todo.created}
            </td>
            <td>
                {todo.todo.updated}
            </td>
            <td>
                {todo.todo.user}
            </td>
            <td>
                {(todo.todo.is_activ) ? 'Активно' : 'Не активно'}
            </td>

        </tr>
    )
}


function TodoList(todoin) {
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
            {todoin.todo.map((t) => <TodoItem todo={t} />)}



        </table>
    )
}

export default TodoList
