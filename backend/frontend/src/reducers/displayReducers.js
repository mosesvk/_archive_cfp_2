import{
  DISPLAY_LIST_REQUEST,
  DISPLAY_LIST_SUCCESS,
  DISPLAY_LIST_FAIL,

  DISPLAY_DETAILS_REQUEST,
  DISPLAY_DETAILS_SUCCESS,
  DISPLAY_DETAILS_FAIL,

  DISPLAY_DELETE_REQUEST,
  DISPLAY_DELETE_SUCCESS,
  DISPLAY_DELETE_FAIL,

  DISPLAY_CREATE_REQUEST, 
  DISPLAY_CREATE_SUCCESS,
  DISPLAY_CREATE_FAIL,

  DISPLAY_UPDATE_REQUEST,
  DISPLAY_UPDATE_SUCCESS,
  DISPLAY_UPDATE_FAIL
} from '../constants/displayConstants'

export const displayListReducer = (state = { displays: [] }, action) => {
  switch (action.type) {
      case DISPLAY_LIST_REQUEST:
          return { loading: true, displays: [] }

      case DISPLAY_LIST_SUCCESS:
          return {
              loading: false,
              displays: action.payload.displays,
          }

      case DISPLAY_LIST_FAIL:
          return { loading: false, error: action.payload }

      default:
          return state
  }
}