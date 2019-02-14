import React, { Component } from 'react';
import femAvatar from './femAvatar.png';
import maleAvatar from './maleAvatar.png';

class UserListItem extends Component {
    render () {
        let image;
        if (!this.props.thumbnail) {
            if (this.props.gender =="female") {
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

        return (
            <li style={{paddingBottom:15}}>
                {image}
                <div>
                    Name: <span>{this.props.firstName}</span><span> {this.props.lastName}</span>
                </div>
                <div>Location: {this.props.city}, {this.props.state}</div>
                <div>Email: {this.props.email}</div>
            </li>
        )
    }
}

export default UserListItem;