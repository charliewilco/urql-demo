import React, { Component } from 'react'
import { Block, Row, InlineBlock } from 'jsxstyle'
import ImageLoader from './ImageLoader'

export default class Card extends Component {
  state = {
    edit: false
  }

  render() {
    const { imageUrl, title, description, removePost } = this.props

    return (
      <Block marginBottom={16} className="Card">
        <Row alignItems="center" marginBottom={8} padding={8}>
          <ImageLoader source={imageUrl} />
          <Block marginLeft={8}>
            <InlineBlock component="dt">
              <h3>{title}</h3>
            </InlineBlock>
            <Block component="dd">{description}</Block>
          </Block>
        </Row>
        <Row justifyContent="flex-end" padding={8} borderTop="1px solid #e9ebee">
          <button className="NotButton" onClick={removePost}>
            Delete
          </button>
          <button className="Button" onClick={() => console.log('Editting')}>
            Edit
          </button>
        </Row>
      </Block>
    )
  }
}
