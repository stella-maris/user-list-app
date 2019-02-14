import React, { Component } from 'react';

class UserListItem extends Component {
    render () {
        return (
            <li style={{paddingBottom:15}}>
                <img src={this.props.thumbnail} alt=""/>
                <div>
                    <span>{this.props.firstName}</span><span> {this.props.lastName}</span>
                </div>
                <div>{this.props.city}, {this.props.state}</div>
                <div>{this.props.email}</div>
            </li>
        )
    }
}

export default UserListItem;