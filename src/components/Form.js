import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid'

import { addArticle } from '../actions'

function mapDispatchToProps (dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  }
}

class ConnectedForm extends Component {
  constructor () {
    super()

    this.state = {
      title: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    const { id, value } = event.target

    this.setState({ [id]: value })
  }

  handleSubmit (event) {
    event.preventDefault()

    const { title } = this.state
    const id = uuidv1()

    this.props.addArticle({ title, id })
    this.setState({ title: '' })
  }

  render () {
    const { title } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            className='form-control'
            id='title'
            onChange={this.handleChange}
            type='text'
            value={title}
          />
        </div>
        <button type='submit' className='btn btn-success btn-lg'>
          SAVE
        </button>
      </form>
    )
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm)

export default Form
