import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
]

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    },
    postEdited(state, action) {
      const { id, title, content } = action.payload
      const exisitingPost = state.find((post) => post.id === id)
      if (exisitingPost) {
        exisitingPost.title = title
        exisitingPost.content = content
      }
    },
  },
})

export const { postAdded, postEdited } = postsSlice.actions

export default postsSlice.reducer
