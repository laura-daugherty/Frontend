import axios from 'axios';
import axiosWithAuth from '../utilities/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (credentials) => (dispatch) => {
  dispatch({
    type: LOGIN_START
  })
  axios.post(/*URL*/, credentials)
    .then(response => {
      console.log('login success: ', response)
      dispatch({
        type: LOGIN_SUCCESS,
        payload: /* response.data.id  set to equal to user ID*/
      })
      localStorage.setItem('token', /*response.data.payload  */)
    })
    .catch(error => {
      console.log('login error: ', error);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: 'error logging in'
      })
    })
}

export const LOGOUT = 'LOGOUT';

export const logout = () => {
  return ({
    type: LOGOUT
  })
}

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = (credentials) => (dispatch) => {
  dispatch({
    type: REGISTER_START
  })
  axiosWithAuth().post('http://localhost:5000/api/friends', credentials)
    .then(response => {
      console.log('registering success: ', response)
      dispatch({
        type: REGISTER_SUCCESS,
      })
      localStorage.setItem('token', response.data.payload)
    })
    .catch(error => {
      console.log('registering error: ', error);
      dispatch({
        type: REGISTER_FAILURE,
        payload: 'error registering user'
      })
    })
}

export const FETCH_ITEMS_START = 'FETCH_ITEMS_START';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const fetchItems = () => (dispatch) => {
  dispatch({
    type: FETCH_ITEMS_START
  })
  axiosWithAuth().get(/*URL*/)
     //is there anyway to get only the items associated with the particular username?
    .then(response => {
      console.log('fetching data success: ', response);
      dispatch({
        type: FETCH_ITEMS_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log('fetching data error: ', error);
      dispatch({
        type: FETCH_ITEMS_FAILURE,
        payload: 'error fetching items'
      })
    })
}

export const ADD_ITEM_START = 'ADD_ITEM_START';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const addItem = (item) => (dispatch) => {
  dispatch({
    type: ADD_ITEM_START
  })
  axiosWithAuth().post(/* URL */, item)
  .then(response => {
    console.log('adding item success: ', response);
    dispatch({
      type: ADD_ITEM_SUCCESS,
      payload: response.data
    })
  })
  .catch(error => {
    console.log('adding item error: ', error);
    dispatch({
      type: ADD_ITEM_FAILURE,
      payload: 'error adding item'
    })
  })
}

export const UPDATE_ITEM_START = 'UPDATE_ITEM_START';
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';
export const UPDATE_ITEM_FAILURE = 'UPDATE_ITEM_FAILURE';

export const udpateItem = (item) => (dispatch) => {
  dispatch({
    type: UPDATE_ITEM_START
  })
  axiosWithAuth().put(/*URL*/, item)
    .then(response => {
      console.log('update item success: ', response);
      dispatch({
        type: UPDATE_ITEM_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log('update item error: ', error);
      dispatch({
        type: UPDATE_ITEM_FAILURE,
        payload: 'error updating item'
      })
    })
 
}

export const DELETE_ITEM_START = 'DELETE_ITEM_START';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';

export const deleteItem = (item) => (dispatch) => {
  dispatch({
    type: DELETE_ITEM_START
  })
  axiosWithAuth().delete(/*URL*/)
    .then(response => {
      console.log('delete item success: ', response);
      dispatch({
        type: DELETE_ITEM_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log('delete item error: ', error);
      dispatch({
        type: DELETE_ITEM_FAILURE,
        payload: 'error deleting item'
      })
    })
}

//export const SORT_ITEM_START = 'DELETE_ITEM_START';
//export const SORT_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
//export const SORT_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';
//this action does not need to go through API calls so not sure if we need to have all 3 actions
export const SORT_ITEMS = 'SORT_ITEMS';


// 	stockAlert = 
// ITEM_STOCK_ALERT
// ITEM_STOCK_ALERT_SUCCESS
// ITEM_STOCK_ALERT_FAILURE
