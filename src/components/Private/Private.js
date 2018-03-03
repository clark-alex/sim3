import React, { Component } from 'react';
import axios from 'axios'
import ProfileDiplay from './ProfileDisplay'
import Header from '../Header'
import { Link } from 'react-router-dom'

class Private extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            id:0
        }

    }
    componentDidMount() {
        axios.get('/auth/me').then(res => {
            console.log('res.data', res.data)
            this.setState({ id: res.data.id, })
        })
    }

    addNewId() {
        axios.post('/api/create', {id:this.state.id} ).then(res=>console.log(res.data))
    }
    render() {
        console.log('statePrivate',this.state.id)
        return (
            <div>
                <Header />
                <div className='upperSection'>
                    <ProfileDiplay />
                    <Link to='/profile'><button onClick={()=>this.addNewId()}>Edit</button></Link>
                    <span className='titleText'>Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</span>
                    <div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Private;