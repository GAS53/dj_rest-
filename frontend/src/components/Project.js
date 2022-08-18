import React from "react";
import { useParams, Link } from 'react-router-dom'

function ProjectRow(local) {
    // console.log(`local ${local.external.id}`)
    let str_id = `/projects/${local.external.id}`
    return (
        <tr>
            <td>
                <Link to={str_id}>{local.external.name}</Link>
            </td>
            <td>
                {local.external.link}
            </td>
            <td>
                {local.external.users}
            </td>


        </tr>
    )
}


export function ProjectList(projects) {
    var { userId } = useParams()
    console.log(`userId is ${userId}`)
    if (!isNaN(userId)) {
        userId = userId.replace(':', '')
        console.log(`userId definde ${userId}`)
        var res = projects.projects.filter((t) => { projects.projects.id = userId })
    } else {
        console.log('userId UNdefined ')
        var res = projects.projects
    }
    console.log(`res ${res}`)
    return (
        <table>
            <th>
                Название проекта
            </th>
            <th>
                Ссылка
            </th>
            <th>
                Пользователь
            </th>
            {res.map((t) => <ProjectRow external={t} />)}
        </table>
    )

}







