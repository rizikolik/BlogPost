import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
  {
    id: "1",
    title: "First Post!",
    content: "Hello!",
    reactions: { thumbsUp: 0, hooray: 0 },
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "2",
    title: "Second Post",
    content: "More text",
    reactions: { thumbsUp: 0, hooray: 0 },
    date: sub(new Date(), { minutes: 5 }).toISOString()
  }
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId
          }
        };
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },

    postUpdated(state, action) {
      const { id, title, content } = action.payload;

      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    }
  }
});
export const { postAdded, postUpdated, reactionAdded } = postSlice.actions;

export default postSlice.reducer;
