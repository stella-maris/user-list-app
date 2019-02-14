import React, { Component } from 'react';
import femAvatar from './femAvatar.png';
import maleAvatar from './maleAvatar.png';
import usa from './usa.png';

class UserListItem extends Component {
    handleClick(e){
        e.preventDefault();
        this.props.onClick(e.target.value);
        //console.log(this.state.usersList);
    }

    render () {
        let image;
        let flag;
        if (!this.props.thumbnail) {
            if (this.props.gender ==="female") {
                image = (
                    <img src={femAvatar} alt=""/>
                )
            } else {
                image = (
                    <img src={maleAvatar} alt=""/>
                )
            }
        } else {
            image = (
                <img src={this.props.thumbnail} alt=""/>
            )
        }
        if (this.props.nat === "US") {
            flag = (
                <img src={usa} style={{width: 25}} alt="flag"/>
            )
        }

        return (
            <li style={{paddingBottom:15}}>
                {image}
                <div>
                    Name: <span>{this.props.firstName}</span><span> {this.props.lastName}</span>
                </div>
                <div>Location: {this.props.city}, {this.props.state} {flag}</div>
                <div>Email: {this.props.email}</div>
                <button onClick={this.handleClick} value={this.key}>Remove</button>
            </li>
        )
    }
}

export default UserListItem;