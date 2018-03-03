import React, { Component } from 'react';
import ProfileDisplay from '../Private/ProfileDisplay';
import axios from 'axios';
import Header from '../Header'

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Name: 'name',
            Gender: '',
            HairColor: '',
            EyeColor: '',
            Hobby: '',
            BirthdayDay: 0,
            BirthdayMonth: 0,
            BirthdayYear: 0,
            id: 0,
        }

    }
    componentDidMount() {
        axios.get('/auth/me').then(res => {
            console.log('res.data', res.data)
            this.setState({ id: res.data.id, })
        })
    }
    handleChange(e) {
        this.setState({ Gender: e.target.value });
    }
    handleChangeHair(e) {
        this.setState({ HairColor: e.target.value });
    }
    handleChangeEye(e) {
        this.setState({ EyeColor: e.target.value });
    }
    handleChangeHobby(e) {
        this.setState({ Hobby: e.target.value });
    }
    handleChangeDay(e) {
        this.setState({ BirthdayDay: e.target.value });
    }
    handleChangeMonth(e) {
        this.setState({ BirthdayMonth: e.target.value });
    }
    handleChangeYear(e) {
        this.setState({ BirthdayYear: e.target.value });
    }
    handleChangeName(e) {
        this.setState({ Name: e.target.value });
    }
    saveFn() {
        axios.put('/api/edituser',
       { Name: this.state.name,
        Gender: this.state.Gender,
        HairColor: this.state.HairColor,
        EyeColor: this.state.EyeColor,
        Hobby: this.state.Hobby,
        BirthdayDay: this.state.BirthdayDay,
        BirthdayMonth: this.state.BirthdayMonth,
        BirthdayYear: this.state.BirthdayYear,
        id: this.state.id,}
    ).then((res) => {console.log(res.data)})
    }   



    render() {
        console.log(this.state)
        return (
            <div>
                <div >
                {/* 54C */}
                    <Header />
                    <ProfileDisplay />
                    Name
                <input onChange={(e) => this.handleChangeName(e)} />
                    <br />
                    Gender
                <select value={this.state.Gender} onChange={(e) => this.handleChange(e)}>
                        <option>--select--</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    HairColor
                <select value={this.state.HairColor} onChange={(e) => this.handleChangeHair(e)}>
                        <option>--select--</option>
                        <option>Brown</option>
                        <option>Black</option>
                        <option>Blonde</option>

                    </select>
                    EyeColor
                <select value={this.state.EyeColor} onChange={(e) => this.handleChangeEye(e)}>
                        <option>--select--</option>
                        <option >Brown</option>
                        <option >Blue </option>
                        <option >Green </option>
                    </select>
                    Hobby
                <select value={this.state.Hobby} onChange={(e) => this.handleChangeHobby(e)}>
                        <option>--select--</option>
                        <option >soccer</option>
                        <option >basketball </option>
                        <option >sleeping </option>
                    </select>
                    BirthdayDay
                <select value={this.state.BirthdayDay} onChange={(e) => this.handleChangeDay(e)}>
                        <option>--select--</option>
                        <option >1</option>
                        <option >2 </option>
                        <option >3 </option>
                        <option >4 </option>
                        <option >5 </option>
                        <option >6 </option>
                        <option >7 </option>
                        <option >8 </option>
                        <option >9 </option>
                        <option >10 </option>
                        <option >11 </option>
                        <option >12 </option>
                    </select>
                    BirthdayMonth
                <select value={this.state.BirthdayMonth} onChange={(e) => this.handleChangeMonth(e)}>
                        <option>--select--</option>
                        <option >1</option>
                        <option >2 </option>
                        <option >3 </option>
                        <option >4 </option>
                        <option >5 </option>
                        <option >6 </option>
                        <option >7 </option>
                        <option >8 </option>
                        <option >9 </option>
                        <option >10 </option>
                        <option >11 </option>
                        <option >12 </option>

                    </select>
                    BirthdayYear
                <select value={this.state.BirthdayYear} onChange={(e) => this.handleChangeYear(e)}>
                        <option>--select--</option>
                        <option >2000</option>
                        <option >2011 </option>
                        <option >2012 </option>
                        <option >1999 </option>
                        <option >1998 </option>
                        <option >1997 </option>
                        <option >1996 </option>
                    </select>
                    <br />
                    <button onClick={() => this.saveFn()}>Save</button>
                </div>
            </div>
        );
    }
}

export default Profile;