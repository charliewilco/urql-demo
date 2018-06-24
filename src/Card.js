import React, { Fragment, Component } from 'react'
import { Block, Row, InlineBlock } from 'jsxstyle'
import ImageLoader from './ImageLoader'

export default class Card extends Component {
  state = {
    edit: false,
    title: this.props.title,
    description: this.props.description
  }

  updatePost = () => {
    const { id } = this.props
    const { title, description } = this.state
    this.props.updatePost({ id, title, description })
    this.setState({ edit: false })
  }

  render() {
    const { imageUrl, title, description, removePost } = this.props
    const { edit } = this.state

    return (
      <Block marginBottom={16} className="Card">
        <Row alignItems="center" marginBottom={8} padding={8}>
          <ImageLoader source={imageUrl} />
          <Block marginLeft={8} flex={1}>
            {
              edit ? (
                <Fragment>
                  <input
                    className="Title"
                    value={this.state.title}
                    onChange={({ target }) => this.setState({ title: target.value })}
                  />
                  <textarea
                    className="Description"
                    value={this.state.description}
                    onChange={({ target }) => this.setState({ description: target.value })}
                  />
                </Fragment>
              ) : (
              <Fragment>
                <InlineBlock component="dt">
                  <h3>{title}</h3>
                </InlineBlock>
                <Block component="dd">{description}</Block>
              </Fragment>
              )
            }
          </Block>
        </Row>
        <Row justifyContent="flex-end" padding={8} borderTop="1px solid #e9ebee">
          {edit ? (
            <Fragment>
              <button className="NotButton" onClick={() => this.setState({ edit: false })}>
                Cancel
              </button>
              <button className="Button" onClick={this.updatePost}>
                Save
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <button className="NotButton" onClick={removePost}>
                Delete
              </button>
              <button className="Button" onClick={() => this.setState({ edit: true })}>
                Edit
              </button>
            </Fragment>
          )}
        </Row>
      </Block>
    )
  }
}
