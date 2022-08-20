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
    var { projectId } = useParams()
    console.log(`projectId is ${projectId}`)
    var res = projects.projects
    if (!isNaN(projectId)) {

        projectId = Number(projectId)
        console.log(`projectId definde ${projectId} it is ${typeof (projectId)}`)
        console.log(res)

        res = res.filter(item => item.id == projectId)
        console.log(res)
    } else {
        console.log('projectId UNdefined ')

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







