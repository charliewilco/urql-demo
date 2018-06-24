import React, { Component } from 'react'
import { Row, Block } from 'jsxstyle'
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
            <Block flex={3}>
              <label htmlFor='prime-title' className='InputWrapper'>
                <span className='Label'>Title</span>

            <input
              name='prime-title'
              className="Title"
              value={title}
              onChange={({ target }) => this.setState({ title: target.value })}
            />
</label>
          </Block>
          </Row>
          <label htmlFor='prime-description' className='InputWrapper'>
          <span className='Label'>Description</span>
          <textarea
            className="Description"
            name='prime-description'
            value={description}
            onChange={({ target }) => this.setState({ description: target.value })}
          />
        </label>
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
