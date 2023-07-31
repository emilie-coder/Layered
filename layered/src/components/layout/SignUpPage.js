import React, { Component } from 'react';

class SignUpPage extends Component {
    state = {
        email: '',
        password: '',
        username: '',
        confirmPassword: ''
    }

    handleChange = (e)  => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e)  => {
        e.preventDefault();
        console.log(this.state)
    }

    render () {
        return (
        <div>
            <h1> Sign UP here </h1>
            <div className="SignInContainer">
                <form className='SignInForm' onSubmit={this.handleSubmit}>
                    <div> 
                        Username
                        <input type='username' id='username' onChange={this.handleChange}/>
                    </div>
                    <div> 
                        email
                        <input type='email' id='email' onChange={this.handleChange}/>
                    </div>
                    <div> 
                        password
                        <input type='password' id='password' onChange={this.handleChange}/>
                    </div>
                    <div> 
                        confirm password
                        <input type='confirmPassword' id='confirmPassword' onChange={this.handleChange}/>
                    </div>
                    <button> submit </button>
                </form>
            </div>
        </div>
        )
    }
}

export default SignUpPage;
