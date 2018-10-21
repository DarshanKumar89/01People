// This will can combine one or more Reducer functions and export it through Redux's combineReducer helper.
import { combineReducers } from "redux";

import post from "./post";
// import secondCounter from './exampleReducer';

export default combineReducers({ post });

// Example for combining multiple reducers:
// export default combineReducers({ count, secondCounter });
