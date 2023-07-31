import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../redux/actions/projectActions';

class CreatePiece extends Component {
    state = {
        id: '',
        title: '',
        content: '',

    }
    handleSubmit = (e)  => {
        e.preventDefault();
        this.props.createProject(this.state)
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
                    ID
                    <input id='id' onChange={this.handleChange}/>
                </div>
                <div>
                    title
                    <input id='title' onChange={this.handleChange}/>
                </div>
                <div>
                    description
                    <input id='content' onChange={this.handleChange}/>
                </div>
                <button> create project </button>
            </form>
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreatePiece);
