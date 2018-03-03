import React, { Component } from 'react';
import axios from 'axios';
import './ProfileDisplay.css';

class ProfileDisplay extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            username:'',
            pic:'',

        }

    }
    componentDidMount() {
        axios.get('/auth/me').then(res => {
            console.log('res.data', res.data)
            this.setState({username: res.data.user_name,
                            pic: res.data.img })
        })
    }

    render() {
        // console.log(user)
        return (
            <div className='displayBox'>
                <h1>Username: {this.state.username}</h1>
                <img className='avatar' src={this.state.pic} />
            </div>
        );
    }
}

export default ProfileDisplay;