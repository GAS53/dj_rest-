import React from 'react';
import './App.css';
import axios from 'axios'
import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom'


import UserList from './components/User.js'
import ProjectList from './components/Project';
import TodoList from './components/Todo';
import MainPage from './components/Main_page';
import LoginForm from './components/Login';
import Cookies from 'universal-cookie';




class App extends React.Component {
  constructor() {
    super()
    this.state = {
      'users': [],
      'todo': [],
      'project': [],
      'token': '',

    }
  }

  get_token(username, password) {
    console.log('get_token')
    axios.post('http://127.0.0.1:8000/api/token/', { username: username, password: password })
      .then(response => {

        const token = response.data.token
        console.log(`token ${token}`)

        this.set_token(response.data['token'])

        this.setState({ 'token': token })
      }).catch(error => alert('неверный логин или пароль'))
  }

  set_token(token) {
    const cookies = new Cookies();
    cookies.set('token', token);
    this.setState({ 'token': token }, () => this.load_data())

  }

  load_data() {
    console.log('load data')
    const headers = this.get_headers()
    axios.get('http://127.0.0.1:8000/api/todo/', { headers })
      .then(response => this.setState({ 'todo': response.data })).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/api/project/', { headers })
      .then(response => this.setState({ 'project': response.data })).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/api/users/', { headers })
      .then(response => this.setState({ 'users': response.data })).catch(error => console.log(error))

  }

  get_token_from_storage() {
    console.log('get_token_from_storage')
    const cookies = new Cookies();
    const token = cookies.get('token')
    if (token) {
      this.setState({ 'token': token }, () => this.load_data())
    }
    console.log(`state - ${token}`)
  }

  logout() {
    console.log('logout')
    this.set_token('')
  }

  is_authenticated() {
    return this.state.token != ''
  }

  get_headers() {
    let headers = {
      'Content-Type': 'application/json'
    }
    if (this.is_authenticated()) {
      headers['Authorization'] = 'Token ' + this.state.token
    }
    return headers
  }


  componentDidMount() {
    console.log('componentDidMount')
    this.get_token_from_storage()

  }

  render() {

    console.log(`todo in render  ${this.state.todo}`)
    return (
      <div>
        <BrowserRouter>
          <nav>
            <ul>
              <li> <Link to='/projects'>Проекты</Link> </li>
              <li> <Link to='/todo'>ToDo</Link> </li>
              <li> <Link to='/users'>Пользователи</Link> </li>
              <li> {this.is_authenticated() ? <button onClick={() => this.logout()}>Выйти</button> :
                <Link to='/login'>Войти</Link>} </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/login' element={<LoginForm get_token={(username, password) => this.get_token(username, password)} />} />

            <Route path='/users' element={<UserList users={this.state.users} />} >
              <Route index element={<p>Выберите из списка</p>} />
              <Route path=':userId' element={<UserList users={this.state.users} />} />
            </Route>

            <Route path='/todo' element={<TodoList todo={this.state.todo} />} />

            <Route path='/projects' element={<ProjectList projects={this.state.projects} />} >
              <Route path=':projectId' element={<ProjectList projects={this.state.projects} />} />
            </Route> */

            <Route path="*" element={<main style={{ padding: "1rem" }}><p>Такой страници не существует</p></main>} />


            <Route path='/' element={<MainPage now_page_name />} />
          </Routes>
        </BrowserRouter>


      </div >
    )
  }
}




export default App;