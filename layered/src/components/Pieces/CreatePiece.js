import React, { Component } from 'react';


class CreatePiece extends Component {
    state = {
        title: '',
        description: '',
        dateCreated: '',
        author: '',
        template: '',
    }
    handleSubmit = (e)  => {
        e.preventDefault();
        console.log(this.state)
    }

    handleChange = (e)  => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    render () {
        return (
        <div>
            <h1> Create a piece</h1>
            <form className='SignInForm' onSubmit={this.handleSubmit}>
                <div>
                    title
                    <input id='title' onChange={this.handleChange}/>
                </div>
                <div>
                    description
                    <input id='description' onChange={this.handleChange}/>
                </div>
                <button> create project </button>
            </form>
        </div>
        )
    }
}

export default CreatePiece;
