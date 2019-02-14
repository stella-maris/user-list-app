import React, { Component } from 'react';
import UserListItem from './UserListItem';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      usersList: []
    };
    this.fetchUsers = this.fetchUsers.bind(this);
      this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers () {
    axios.get(`https://randomuser.me/api/?results=25`)
        .then((response) => {
          console.log(response.data.results);
          this.setState({usersList: response.data.results});
        })
        .catch((error) => {
          this.setState({
              usersList: []
          })
        })
  }
    handleClick(e){
        e.preventDefault();
        this.setState({
            usersList: this.state.usersList.filter(item => item !== e.target.value)
        });
        //console.log(this.state.usersList);
    }
  render() {
    const userList = this.state.usersList;
    return (
      <div className="App">

        <ul style={{listStyleType: "none", textAlign: "left"}}>
            {userList.map((user, index) =>
                <UserListItem key={user.nat + index}
                              firstName={user.name.first}
                              lastName={user.name.last}
                              thumbnail={user.picture.medium}
                              gender={user.gender}
                              city={user.location.city}
                              state={user.location.state}
                              email={user.email}
                              nat={user.nat}
                />
            )}
        </ul>
      </div>
    );
  }
}

export default App;
