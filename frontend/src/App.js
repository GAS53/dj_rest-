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
      'access_token': '',
      'refresh_token': '',

    }
  }

  get_token(username, password) {
    console.log('get_token')
    axios.post('http://127.0.0.1:8000/api/token/', { username: username, password: password })
      .then(response => {

        const access_token = response.data['access']
        const refresh_token = response.data['refresh']
        console.log(`tokenzzzz ${access_token}`)

        this.set_token(access_token, refresh_token)

        this.setState({ 'access_token': access_token })
        this.setState({ 'refresh_token': refresh_token })
      }).catch(error => alert('неверный логин или пароль'))
  }

  set_token(access_token = '', refresh_token = '') {

    const cookies = new Cookies();
    cookies.set('access_token', access_token);
    cookies.set('refresh_token', refresh_token);

    console.log(`set token ${refresh_token}`)
    this.setState({ refresh_token, access_token }, () => this.load_data())

  }

  get_is_access(check = true) {
    // let headers = {
    //   'Content-Type': 'application/json'
    // }
    let headers = { "alg": "HS256", "typ": "JWT" }
    if (this.is_authenticated()) {
      if (check) {
        headers['Authorization'] = `Bearer ${this.state.access_token}`
      } else {
        headers['Authorization'] = `Bearer ${this.state.refresh_token}`
      }
    }

    return headers
  }



  load_data() {
    console.log(`load data token -  ${this.state.access_token}`)
    const headers = this.get_is_access(true)
    console.log(headers)
    axios.get('http://127.0.0.1:8000/api/todo/', { headers }, { withCredentials: true })
      .then(response => this.setState({ 'todo': response.data })).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/api/project/', { headers }, { withCredentials: true })
      .then(response => this.setState({ 'project': response.data })).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/api/users/', { headers }, { withCredentials: true })
      .then(response => this.setState({ 'users': response.data })).catch(error => console.log(error))

  }

  get_token_from_storage() {
    console.log('get_token_from_storage')
    const cookies = new Cookies();
    const access_token = cookies.get('access_token')
    const refresh_token = cookies.get('refresh_token')
    if (access_token) {
      this.setState({ access_token, refresh_token }, () => this.load_data())
    }
    console.log(`state - ${this.state.access_token}`)
  }

  logout() {
    console.log('logout')
    this.set_token()
  }

  is_authenticated() {
    return this.state.access_token != ''
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


            <Route path='/' element={<MainPage />} />
          </Routes>
        </BrowserRouter>


      </div >
    )
  }
}





export default App;