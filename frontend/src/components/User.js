import React from "react";


function UserItem(user) {
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
            {users.users.map((u) => <UserItem user={u} />)}
        </table>
    )
}
export default UserList
