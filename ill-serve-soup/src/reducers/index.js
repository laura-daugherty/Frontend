import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  FETCH_ITEMS_START,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  ADD_ITEM_START, 
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  UPDATE_ITEM_START,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAILURE,
  DELETE_ITEM_START,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
  SORT_ITEMS,
} from "../actions"

const initialState = {
  items: [],
  activeItem: null,
  loggingIn: false,
  isLoggedIn: false,
  registering: false,
  error: null,
  fetchingItems: false,
  deletingItem: false,
  addingItem: false,
  updatingItem: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: true,
        username: action.payload
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      }
    case LOGOUT: 
      return {
        userId: null,  
        username: '',
        items: [],
        loggingIn: false,
        isLoggedIn: false,
        registering: false,
        error: null,
        fetchingItems: false,
        deletingItem: false,
        addingItem: false,
        updatingItem: false,
      }
    case REGISTER_START:
      return {
        ...state,
        registering: true,
        error: null,
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
        isLoggedIn: true,
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        registering: false,
        error: action.payload
      }
    case FETCH_ITEMS_START:
      return {
        ...state,
        fetchingItems: true,
        error: null,
      }
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        fetchingItems: false,
        items: action.payload
      }
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        fetchingItems: false,
        error: action.payload
      }
    case ADD_ITEM_START:
      return {
        ...state,
        addingItem: true,
        error: null
      } 
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        addingItem: false,
        items: action.payload
        //action.payload.filter(item => item.username === state.username)[0].items
      }
    case ADD_ITEM_FAILURE:
      return {
        ...state,
        addingItem: false,
        error: action.payload
      }
    case UPDATE_ITEM_START:
      return {
        ...state,
        updatingItem: true,
        error: null
      }
    case UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        updatingItem: false,
        items: action.payload
      }
    case UPDATE_ITEM_FAILURE:
      return {
        ...state,
        updatingItem: false,
        error: action.payload
      }
    case DELETE_ITEM_START:
      return {
        ...state,
        deletingItem: true,
        error: null
      }
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        deletingItem: false,
        items: action.payload
      }
    case DELETE_ITEM_FAILURE:
      return {
        ...state,
        deletingItem: false,
        error: action.payload
      }
    default:
      return state;
  }
};

export default reducer
