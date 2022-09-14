import React from "react";

class ProjectForm extends React.Component {
    constructor(props) {

        super(props)
        console.log(props)
        this.state = {
            'name': '',
            'users': [],
            'link': '',
        }

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit(event) {
        console.log(`this.state.name ${this.state.name} ${this.state.user}`)
        this.props.createProject(this.state.name, this.state.link, this.state.users)
        event.preventDefault()

    }

    handleChangeUsers(event) {
        console.log(`this.state.users befor handleUsersSelect ${this.state.users}`)
        if (!event.target.selectedOptions) {
            this.setState({
                'users': []
            })
            return;
        }

        let users = []

        for (let option of event.target.selectedOptions) {
            console.log(`option ${option.value}`)
            users.push(option.value)
            // users.push(this.props.users.filter((item.id) => `${item.firstName} ${item.lastName}` === option.value)))


        }

        this.setState({
            'users': users
        })
        console.log(`this.state.users after handleUsersSelect ${this.state.users}`)
    }




    render() {
        console.log(`users in render ${this.props.users}`)
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input type="text" name='name' placeholder="name" value={this.state.name} onChange={(event) => this.handleChange(event)} />
                <input type="text" name='link' placeholder="link" value={this.state.link} onChange={(event) => this.handleChange(event)} />
                < br ></br >
                <select multiple onChange={(event) => this.handleChangeUsers(event)} >

                    {this.props.users.map((user) => <option value={user.id}>{user.firstName} {user.lastName}</option>)}

                </select>

                < br ></br >
                <input type="submit" value="Сохранить" />
            </form >
        )
    }
}

export default ProjectForm