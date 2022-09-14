import React from "react";



const ProjectRow = ({ project, del_func }) => {
    console.log(`id ${project.id} func ${del_func}`)
    console.log(`project ${project.users}`)
    return (
        <tr>
            <td>{project.id}</td>
            <td>{project.link}</td>
            {/* <td>{project.name}</td> */}
            <td>

                {project.users}
            </td>
            <td>
                <button onClick={() => del_func(project.id)}>Удалить</button>
            </td>
        </tr>
    )
}


const ProjectList = ({ projects, del_func }) => {

    // var { projectId } = useParams()
    // console.log(`projectId is ${projectId} del_func ${del_func}`)
    // var res = projects.projects
    // if (!isNaN(projectId)) {

    //     projectId = Number(projectId)
    //     console.log(`projectId definde ${projectId} it is ${typeof (projectId)}`)
    //     console.log(res)

    //     res = res.filter(item => item.id === projectId)
    //     console.log(res)
    // } else {
    //     console.log('projectId UNdefined ')

    // }
    // console.log(`res ${res}`)
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
            <th>
                Удалить
            </th>
            {projects.map((project) => <ProjectRow project={project} del_func={del_func} />)}
        </table>
    )

}

export default ProjectList


