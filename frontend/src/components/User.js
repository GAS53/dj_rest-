import React from "react";


function UserItem(user) {
    return (

        <tr>
            <td>
                {user.user.username}
            </td>
            <td>
                {user.user.first_name}
            </td>
            <td>
                {user.user.last_name}
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
