import React from "react";

class ToDoForm extends React.Component {
    constructor(props) {
        console.log(`create in ToDoForm`)
        super(props)
        this.state = {
            'project': project, 'text': text, 'created': created, 'updated': updated, 'user': user, 'is_activ': is_activ, 'users': []
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
        this.props.createToDo(this.state.project, this.state.text, this.state.created, this.state.updated, this.state.user, this.state.is_activ)
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


                <input type="text" name='Название проекта' placeholder="project" value={this.state.project} onChange={(eve) => this.handleChange(eve)} />
                <input type="text" name='Описание проекта' placeholder="text" value={this.state.text} onChange={(eve) => this.handleChange(eve)} />
                <input type="text" name='Дата создания' placeholder="created" value={this.state.created} onChange={(eve) => this.handleChange(eve)} />
                <input type="text" name='Дата обновления' placeholder="updated" value={this.state.updated} onChange={(eve) => this.handleChange(eve)} />
                <input type="text" name='Создатель проекта' placeholder="user" value={this.state.user} onChange={(eve) => this.handleChange(eve)} />
                <input type="text" name='Является ли проект активным' placeholder="is_activ" value={this.state.is_activ} onChange={(eve) => this.handleChange(eve)} />

                <input type="submit" value="Сохранить" />
            </form >
        )
    }
}

export default ToDoForm