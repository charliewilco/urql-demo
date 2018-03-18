import React, { Component } from 'react'
import { Row } from 'jsxstyle'
import ImageLoader from './ImageLoader'

const initialState = {
  title: 'Untitled',
  imageUrl: 'https://picsum.photos/500/500/?random',
  description: ''
}

export default class NewPost extends Component {
  state = initialState

  clearForm = () => this.setState(initialState)

  addPost = e => {
    e.preventDefault()
    this.props.onSubmit({ ...this.state })
    this.clearForm()
  }

  render() {
    const { title, imageUrl, description } = this.state

    return (
      <form onSubmit={this.addPost} className="Form">
        <div className="FormWrapper">
          <Row alignItems="center" marginBottom={8}>
            <ImageLoader source={imageUrl} style={{ marginRight: 8 }} />
            <input
              className="Title"
              value={title}
              onChange={({ target }) => this.setState({ title: target.value })}
            />
          </Row>
          <textarea
            className="Description"
            value={description}
            onChange={({ target }) => this.setState({ description: target.value })}
          />
        </div>
        <Row justifyContent="flex-end" padding={8} borderTop="1px solid #e9ebee">
          <button className="Button" onClick={this.addPost}>
            Submit
          </button>
        </Row>
      </form>
    )
  }
}
