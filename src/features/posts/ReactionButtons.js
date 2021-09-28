import React from 'react'
import { reactionAdded } from './postsSlice'
import { useDispatch } from 'react-redux'

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
}

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch()
  return Object.entries(reactionEmoji).map(([emojiName, emojiSticker]) => {
    return (
      <button
        className="muted-button reaction-button"
        key={emojiSticker}
        onClick={() => {
          dispatch(reactionAdded({ postId: post.id, reaction: emojiName }))
        }}
      >
        {emojiSticker} {post.reactions[emojiName]}
      </button>
    )
  })
}

export default ReactionButtons
