import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    SETUP_USER_ERROR,
    TOGGLE_SIDEBAR,
    LOGOUT_USER,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    HANDLE_CHANGE,
    CLEAR_VALUES,
    CHANGE_PAGE,
  } from './actions'
  
  import { initialState } from './appContext'
  
  const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
      return {
        ...state,
        showAlert: true,
        alertType: 'danger',
        alertText: 'Please provide all values!',
      }
    }
    if (action.type === CLEAR_ALERT) {
      return {
        ...state,
        showAlert: false,
        alertType: '',
        alertText: '',
      }
    }
  
    if (action.type === SETUP_USER_BEGIN) {
      return { ...state, isLoading: true }
    }
    if (action.type === SETUP_USER_SUCCESS) {
      return {
        ...state,
        isLoading: true,
        token: action.payload.token,
        user: action.payload.user,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
        showAlert: true,
        alertType: 'success',
        alertText: action.payload.alertText,
      }
    }
    if (action.type === SETUP_USER_ERROR) {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      }
    }
    if (action.type === TOGGLE_SIDEBAR) {
      return {
        ...state,
        showSidebar: !state.showSidebar,
      }
    }
    if (action.type === LOGOUT_USER) {
      return {
        ...initialState,
        user: null,
        token: null,
        jobLocation: '',
        userLocation: '',
      }
    }
    if (action.type === UPDATE_USER_BEGIN) {
      return { ...state, isLoading: true }
    }
    if (action.type === UPDATE_USER_SUCCESS) {
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
        showAlert: true,
        alertType: 'success',
        alertText: 'User Profile Updated!',
      }
    }
    if (action.type === UPDATE_USER_ERROR) {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      }
    }
    if (action.type === HANDLE_CHANGE) {
      return {
        ...state,
        page: 1,
        [action.payload.name]: action.payload.value,
      }
    }
    if (action.type === CLEAR_VALUES) {
      const initialState = {
        isEditing: false,
        editJobId: '',
        position: '',
        company: '',
        jobLocation: state.userLocation,
        jobType: 'full-time',
        status: 'pending',
      }
  
      return {
        ...state,
        ...initialState,
      }
    }
    
    if (action.type === CHANGE_PAGE) {
      return { ...state, page: action.payload.page }
    }
    throw new Error(`no such action : ${action.type}`)
  }
  
  export default reducer