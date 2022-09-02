import React from "react";


function UserItem(user) {
    console.log(user.user)
    return (

        <tr>
            <td>
                {user.user.username}
            </td>
            <td>
                {user.user.firstName}
            </td>
            <td>
                {user.user.lastName}
            </td>
            <td>
                {user.user.email}
            </td>
            {user.user.isSuperuser ? <td><p>Да</p> </td> : <td><p>Нет</p></td>}

            {user.user.isStaff ? <td><p>Да</p> </td> : <td><p>Нет</p></td>}

        </tr>
    )
}

function UserList(users) {
    return (
        <table>
            <th>
                Ник
            </th>
            <th>
                Имя
            </th>
            <th>
                Фамилия
            </th>
            <th>
                email
            </th>

            <th>
                cуперпользователь
            </th>

            <th>
                персонал
            </th>
            {users.users.map((u) => <UserItem user={u} />)}
        </table>
    )
}
export default UserList
