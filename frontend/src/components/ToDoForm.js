import React from "react";

class ToDoForm extends React.Component {
    constructor(props) {
        console.log(`create in ToDoForm`)
        super(props)
        this.state = {
            'project': '',
            'text': '',
            'created': '',
            'updated': '',
            'user': '',
            'is_activ': '',
        }

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit(event) {
        this.props.createToDo(this.state.project, this.state.text, this.state.created, this.state.updated, this.state.user, this.state.is_activ)
        event.preventDefault()

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


                <input type="text" name='project' placeholder="project" value={this.state.project} onChange={(event) => this.handleChange(event)} />
                <input type="text" name='text' placeholder="text" value={this.state.text} onChange={(event) => this.handleChange(event)} />
                <input type="text" name='created' placeholder="created" value={this.state.created} onChange={(event) => this.handleChange(event)} />
                <input type="text" name='updated' placeholder="updated" value={this.state.updated} onChange={(event) => this.handleChange(event)} />
                <input type="text" name='user' placeholder="user" value={this.state.user} onChange={(event) => this.handleChange(event)} />
                <input type="text" name='is_activ' placeholder="is_activ" value={this.state.is_activ} onChange={(event) => this.handleChange(event)} />



                <input type="submit" value="Сохранить" />
            </form >
        )
    }
}

export default ToDoForm