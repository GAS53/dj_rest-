import React from "react";

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.pr = props.get_token
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        console.log('handleSubmit')
        console.log(this.state.username + ' ' + this.state.password)
        this.props.get_token(this.state.username, this.state.password)
        event.preventDefault()

    }

    render() {
        console.log('render in Login')
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input type='text' name='username' placeholder="username" value={this.state.username} onChange={(event) => this.handleChange(event)} />
                <input type='text' name='password' placeholder="password" value={this.state.password} onChange={(event) => this.handleChange(event)} />
                <br></br>
                <input type="submit" value="отправить" />



            </form>
        )
    }

}

export default LoginForm