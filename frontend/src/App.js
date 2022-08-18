import React from 'react';
import './App.css';
import axios from 'axios'
import { BrowserRouter, Route, Routes, useParams, Link } from 'react-router-dom'


import UserList from './components/User.js'
import { ProjectList, OneProject } from './components/Project';
import TodoList from './components/Todo';
import MainPage from './components/Main_page';


function GetUserId() {
  let Sdfg = useParams()
  console.log(`s ${Sdfg}`)
  Sdfg = parseInt(Sdfg)
  return Sdfg
}



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
        const users = response.data["results"]
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
        // console.log(todo)
        this.setState(
          {
            'todo': todo["results"],
          }

        )
      }).catch(error => console.log(error))


    axios.get('http://127.0.0.1:8000/api/project')
      .then(response => {
        const project = response.data

        this.setState(
          {
            'projects': project["results"],
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


            <Route>
              <Route path='/users' element={<UserList users={this.state.users} />} />
              {/* <Route path=':id' element={<User id={GetUserId()} />} /> */}
            </Route>

            <Route>
              <Route path='/todo' element={<TodoList todo={this.state.todo} />} />

            </Route>

            <Route>
              <Route path='/projects/userId' element={<ProjectList projects={this.state.projects} />} />
              <Route path='/projects' element={<ProjectList projects={this.state.projects} />} />

            </Route>

            {/* <Route>
              <Route path='projects' element={<Check_project projects={this.state.projects} />} />

             
            </Route> */}

            <Route path='/' element={<MainPage />} />
          </Routes>





        </BrowserRouter>

      </div >
    )
  }
}



export default App;