import React, { Component } from 'react';

class SignInPage extends Component {
    state = {
        email: '',
        password: ''
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
            <h1> Sign In here </h1>
            <div className="SignInContainer">
                <form className='SignInForm' onSubmit={this.handleSubmit}>
                    <div> 
                        email
                        <input type='email' id='email' onChange={this.handleChange}/>
                    </div>
                    <div> 
                        password
                        <input type='password' id='password' onChange={this.handleChange}/>
                    </div>
                    <button> submit </button>
                </form>
            </div>
        </div>
        )
    }
}

export default SignInPage;
