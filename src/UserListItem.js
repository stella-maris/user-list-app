import React, { Component } from 'react';
import femAvatar from './femAvatar.png';
import maleAvatar from './maleAvatar.png';
import usa from './usa.png';

class UserListItem extends Component {
    constructor (props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        e.preventDefault();
        this.props.handleClick(e.target.value);
    }

    render () {
        let image;
        let flag;
        if (this.props.gender ==="female") {
            image = (
                <img src={femAvatar} alt="avatar" style={{width: 30}}/>
            )
        } else {
            image = (
                <img src={maleAvatar} alt="avatar" style={{width: 30}}/>
            )
        }
        if (this.props.nat === "US") {
            flag = (
                <img src={usa} style={{width: 25}} alt="flag"/>
            )
        }

        return (
            <li style={{paddingBottom:15}}>
                <img src={this.props.thumbnail} alt=""/>
                <div>
                    Name: <span>{this.props.firstName}</span><span> {this.props.lastName}</span>
                </div>
                <div>Gender: {image}</div>
                <div>Location: {this.props.city}, {this.props.state} {flag}</div>
                <div>Email: {this.props.email}</div>
                <button onClick={this.props.handleClick} value={this.props.id}>Remove</button>
            </li>
        )
    }
}

export default UserListItem;