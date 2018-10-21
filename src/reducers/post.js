// Reducers receive information from Actions in the form of "Type" and "Payload".
// And they perform a task or execute a fuction accordingly.

// For example, on receiving action type of "INCREMENT_NUM",
// the reducer function will increment the value stored in state, which is 0 initially.

// Read more on Reducers - https://redux.js.org/docs/basics/Reducers.html

import { GET_POST } from "../constants/ActionTypes";

export default function reducer(state = "", action) {
  switch (action.type) {
    case GET_POST:
      return (state = action.payload);
  }

  return state;
}
