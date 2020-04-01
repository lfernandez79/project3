import React, { Component } from 'react'
// import { register } from './UserFunctions'
import axios from "axios"

class SignupForm extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            errors: {}
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
        console.log(event.target.value);
    }
    handleSubmit(event) {
        event.preventDefault()
        // console.log(this.target.value);

        axios.post ("/api/signup",  {
            FirstName: this.state.first_name,
            LastName: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        })

            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log("successful signup")
                   window.location.replace("/LoginForm")
                } else {
                    console.log("username already taken")
                }
            }).catch(error => {
                console.log("signup error: ")
                console.log(error)

            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                            <div className="form-group">
                                <label htmlFor="name">First name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="first_name"
                                    placeholder="Enter your first name"
                                    value={this.state.first_name}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Last name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="last_name"
                                    placeholder="Enter your lastname name"
                                    value={this.state.last_name}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-lg btn-primary btn-block"
                                onClick={this.handleSubmit} >
                                Register!
              </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupForm