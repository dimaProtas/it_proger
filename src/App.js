import React from "react";
import Header from "./companents/Header/Header";
import Users from "./companents/Users/Users";
import AddUserForm from "./companents/Users/AddUserForm/AddUserForm.jsx"
import axios from "axios";

const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component {
  constructor(props) {
    super(props);

    axios.get(baseUrl).then((response) => {
      this.setState({users: response.data.data})
    })

    this.state = {
        users: [
            // {
            //     id: 1,
            //     firstname: 'John',
            //     lastname: 'Doe',
            //     bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam natus explicabo sequi fuga mollitia animi consectetur quae nobis, ea dolor aliquam deserunt excepturi dicta alias veniam? Ipsa dolorem amet quos!',
            //     age: 30,
            //     isHappy: true,
            // },
            // {
            //     id: 2,
            //     firstname: 'Jane',
            //     lastname: 'Doe',
            //     bio: 'This is my bio',
            //     age: 28,
            //     isHappy: false,
            // },
            // {
            //     id: 3,
            //     firstname: 'Jim',
            //     lastname: 'Chery',
            //     bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa quisquam voluptas autem architecto minus ut pariatur, assumenda libero in reiciendis iure distinctio repellat, obcaecati porro dolorum! Blanditiis, neque perspiciatis.',
            //     age: 26,
            //     isHappy: true,
            
            // }
        ]
    }

    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }
  render() {
    return (
      <div>
        <Header text='List users' />
        <main>
          <Users users={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser}  />
        </main>
        <aside>
          <AddUserForm addUser={this.addUser} />
        </aside>
      </div>
    );
  }

  addUser(user) {
    const id = this.state.users.length + 1;
    this.setState({users: [...this.state.users, {id, ...user}]})
    console.log(this.state.users);
    console.log(user);
  };

  deleteUser(id) {
    const users = this.state.users.filter(user => user.id!== id);
    this.setState({users: [...users]})
  }

  // мой метод тоже работает
  // editUser(user) {
  //   const allUsers = this.state.users;
  //   allUsers[user.id-1] = user;

  //   this.setState({users: [...allUsers]})
  // }

  // Мтод из урока
  editUser(user) {
    const allUsers = this.state.users;
    allUsers[user.id-1] = user;

    this.setState({users: []}, () => this.setState({users: [...allUsers]}));
  }

}



export default App;
