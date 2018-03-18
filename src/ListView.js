import React from 'react'
import { Block } from 'jsxstyle'
import Card from './Card'
import ErrorMessage from './ErrorMessage'

export default ({ data, updatePost, deletePost }) => (
  <Block component="dl" overFlow="scroll">
    {data.length > 0 ? (
      data.map((d, i) => (
        <Card {...d} updatePost={updatePost} removePost={() => deletePost({ id: d.id })} key={d.id} />
      ))
    ) : (
      <ErrorMessage message="Data has no length" />
    )}
  </Block>
)
