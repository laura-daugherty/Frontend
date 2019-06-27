import axios from 'axios';
import axiosWithAuth from '../utilities/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (credentials) => (dispatch) => {
  dispatch({
    type: LOGIN_START
  })
  return axios.post('https://alfonsog-kitchen.herokuapp.com/oauth/token', `grant_type=password&username=${credentials.username}&password=${credentials.password}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0'
    },
  })
    .then(response => {
      console.log('login success: ', response)
      dispatch({
        type: LOGIN_SUCCESS,
        payload: credentials.username
      })
      localStorage.setItem('token', response.data.access_token)
      localStorage.setItem('username', credentials.username)
    })
    .catch(error => {
      console.log('login error: ', error);
      dispatch({
        type: LOGIN_FAILURE,
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

export const register = (history, credentials) => (dispatch) => {
  dispatch({
    type: REGISTER_START
  })
  axios.post('https://alfonsog-kitchen.herokuapp.com/createnewuser', credentials)
    .then(response => {
      console.log('registering success: ', response)
      dispatch({
        type: REGISTER_SUCCESS,
      })
      return axios.post('https://alfonsog-kitchen.herokuapp.com/oauth/token', `grant_type=password&username=${credentials.username}&password=${credentials.password}`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0'
        },
      })
        .then(response => {
          console.log('login success: ', response)
          dispatch({
            type: LOGIN_SUCCESS,
            payload: credentials.username
          })
          localStorage.setItem('token', response.data.access_token)
          localStorage.setItem('username', credentials.username)
          history.push('/itemList')
        })
        .catch(error => {
          console.log('login error: ', error);
          dispatch({
            type: LOGIN_FAILURE,
            payload: 'error logging in'
          })
        })
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

export const fetchItems = (username) => (dispatch) => {
  dispatch({
    type: FETCH_ITEMS_START
  })
  axiosWithAuth().get(`https://alfonsog-kitchen.herokuapp.com/users/getuser/${username}`)
     //is there anyway to get only the items associated with the particular username?
    .then(response => {
      console.log('fetching data success: ', response);
      const userid = response.data.userid;
      localStorage.setItem('userid', userid)
      return axiosWithAuth().get(`https://alfonsog-kitchen.herokuapp.com/items/${userid}`)
        .then(response => {
          dispatch({
            type: FETCH_ITEMS_SUCCESS,
            payload: response.data
          })
        })
        .catch(error => {
          console.log('fetching data error inner: ', error);
          dispatch({
            type: FETCH_ITEMS_FAILURE,
            payload: 'error fetching items'
          })
        })
    })
    .catch(error => {
      console.log('fetching data error outer: ', error);
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
  });
  const userid = localStorage.getItem('userid');
  axiosWithAuth().post(`https://alfonsog-kitchen.herokuapp.com/items/${userid}/items`, item)
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
//CHANGED SPELLING OF UPDATE
export const updateItem = (item) => (dispatch) => {
  dispatch({
    type: UPDATE_ITEM_START
  });
  axiosWithAuth().put(`https://alfonsog-kitchen.herokuapp.com/items/${item.itemid}`, item)
    .then(response => {
      console.log('update item success: ', response);
      const userid = localStorage.getItem('userid')
      return axiosWithAuth().get(`https://alfonsog-kitchen.herokuapp.com/items/${userid}`)
        .then(response => {
          dispatch({
            type: UPDATE_ITEM_SUCCESS,
            payload: response.data
          })
        })
        .catch(error => {
          console.log('fetching after updating error: ', error);
          dispatch({
            type: UPDATE_ITEM_FAILURE,
            payload: 'error updating item'
          })
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

export const deleteItem = (itemid) => (dispatch) => {
  dispatch({
    type: DELETE_ITEM_START
  })
  axiosWithAuth().delete(`https://alfonsog-kitchen.herokuapp.com/items/${itemid}`)
    .then(response => {
      console.log('delete item success: ', response);
      const userid = localStorage.getItem('userid')
      return axiosWithAuth().get(`https://alfonsog-kitchen.herokuapp.com/items/${userid}`)
        .then(response => {
          dispatch({
            type: DELETE_ITEM_SUCCESS,
            payload: response.data
          })
        })
        .catch(error => {
          console.log('fetching after deleting error: ', error);
          dispatch({
            type: DELETE_ITEM_FAILURE,
            payload: 'error deleting item'
          })
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

export const SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM';

export const setActive = (item) => {
  return ({
    type: SET_ACTIVE_ITEM,
    payload: item
  })
}

export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';

export const setFilter = (category) => {
  return ({
    type: FILTER_BY_CATEGORY,
    payload: category
  })
}
