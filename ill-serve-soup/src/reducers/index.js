//   Register = 
// REGISTER_START
// REGISTER_SUCCESS
// REGISTER_FAILURE

// 	login = 
// LOGIN_START
// LOGIN_SUCCESS
// LOGIN_FAILURE

// 	fetchingItems = 
// FETCH_ITEMS_START
// FETCH_ITEMS_SUCCESS
// FETCH_ITEMS_FAILURE

// 	addItem = 
// ADD_ITEM
// ADD_ITEM_SUCCESS
// ADD_ITEM_FAILURE

// 	updateItem = 
// UPDATE_ITEM
// UPDATE_ITEM_SUCCESS
// UPDATE_ITEM_FAILURE

// 	deleteItem = 
// DELETE_ITEM
// DELETE_ITEM_SUCCESS
// DELETE_ITEM_FAILURE

// 	sortItem = 
// SORTING_ITEM
// SORTIING_ITEM_SUCCESS
// SORTING_ITEM_FAILURE

// 	stockAlert = 
// ITEM_STOCK_ALERT
// ITEM_STOCK_ALERT_SUCCESS
// ITEM_STOCK_ALERT_FAILURE

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions"

const initialState = {
  items: [],
  loggingIn: false,
  registering: false,
  error: null,
  fetchingItems: true,
  // alerting: false,
  token: localStorage.getItem("token")
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      console.log("STORE", state);
      console.log("action", action);
      return {
        ...state,
        loggingIn: true,
        error: false
      };
    // Our reducer needs some code!
    default:
      return state;
  }
};

export default reducer
