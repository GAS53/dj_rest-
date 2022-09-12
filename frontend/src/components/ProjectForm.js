import React from "react";

class ProjectForm extends React.Component {
    constructor(props) {
        console.log(`create in projectForm`)
        super(props)
        this.state = {
            'name': '',
            'users': 0,
            'link': '',
        }

    }

    handleCange(eve) {
        this.setState(
            {
                [eve.target.name]: eve.target.value
            }
        );
    }


    handleSubmit(eve) {

        console.log(this.state.name)
        console.log(this.state.users)
        this.props.createBook(this.state.name, this.state.link, this.state.users)
        eve.preventDefault()

    }

    handleUsersSelect(event) {
        if (!event.target.selectedOptions) {
            this.setState({
                'users': []
            })
            return;
        }

        let users = []

        for (let option of event.target.selectedOptions) {
            users.push(option.value)
        }

        this.setState({
            'users': users
        })
    }






    render() {
        return (
            <form onSubmit={(eve) => this.handleSubmit(eve)}>


                <input type="text" name='Название проекта' placeholder="name" value={this.state.name} onChange={(eve) => this.handleChange(eve)} />
                <input type="text" name='Ссылка на проект' placeholder="link" value={this.state.link} onChange={(eve) => this.handleChange(eve)} />
                <select multiple onChange={(event) => this.handleUsersSelect(event)} >

                    {this.props.users.map((user) => <option value={user.id}>{user.first_name} {user.last_name}</option>)}

                </select>

                < br ></br >
                <input type="submit" value="Сохранить" />
            </form >
        )
    }
}

export default ProjectForm