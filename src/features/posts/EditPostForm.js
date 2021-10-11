import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postEdited, selectPostById } from './postsSlice'
import { useHistory } from 'react-router-dom'

export const EditPostForm = ({ match }) => {
  const { id } = match.params
  const history = useHistory()
  const { title: oldTitle, content: oldContent } = useSelector((state) =>
    selectPostById(state, id)
  )

  const [title, setTitle] = useState(oldTitle)
  const [content, setContent] = useState(oldContent)

  const dispatch = useDispatch()

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postEdited({
          //   id: nanoid(),
          id,
          title,
          content,
        })
      )
      history.push('/')
    }
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />{' '}
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  )
}
