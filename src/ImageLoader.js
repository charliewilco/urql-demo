import React, { Component } from 'react'
import { Block } from 'jsxstyle'

export default class ImageLoader extends Component {
  render() {
    const { source, style } = this.props;
    return (
      <Block maxWidth={128} {...style}>
        <img alt="Some Random Filler Content" src={source} />
      </Block>
    );
  }
}
