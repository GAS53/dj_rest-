import React from 'react';
import './App.css';
import axios from 'axios'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'


import UserList from './components/User.js'
import { ProjectList } from './components/Project';
import TodoList from './components/Todo';
import MainPage from './components/Main_page';




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': [],
      'todo': [],
      'project': [],

    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/users')
      .then(response => {
        const users = response.data
        // console.log(`users ${users}`)
        this.setState(
          {
            'users': users,
          }

        )
      }).catch(error => console.log(error))


    axios.get('http://127.0.0.1:8000/api/todo')
      .then(response => {
        const todo = response.data
        console.log(todo)
        this.setState(
          {
            'todo': todo,
          }

        )
      }).catch(error => console.log(error))


    axios.get('http://127.0.0.1:8000/api/project')
      .then(response => {
        const project = response.data

        this.setState(
          {
            'projects': project,
          }

        )
        console.log(this.state.projects)
      }).catch(error => console.log(error))

  }

  render() {
    // console.log(`todo in render  ${this.state.todo}`)
    return (
      <div>
        <BrowserRouter>
          <nav>
            <ul>
              <li> <Link to='/projects'>Проекты</Link> </li>
              <li> <Link to='/todo'>ToDo</Link> </li>
              <li> <Link to='/users'>Пользователи</Link> </li>
            </ul>
          </nav>
          <Routes>

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