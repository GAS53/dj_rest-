import React from "react";

class LoginForm extends React.Component {
    constructor() {
        super()
        this.state = {
            login: '',
            password: '',
            token: '',
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        console.log('dfssdfgdgdf')
        console.log(this.state.login + ' ' + this.state.password)
        event.preventDefault()

    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit}>
                <input type='text' name='login' placeholder="login" value={this.state.login} onChange={(event) => this.handleChange(event)} />
                <input type='text' name='password' placeholder="password" value={this.state.password} onChange={(event) => this.handleChange(event)} />
                <br></br>
                <input type="submit" value="отправить" />



            </form>
        )
    }

}

export default LoginForm