import axios from 'axios'
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

export const listDisplays = (keyword = '') => async (dispatch) => {
  try {
      dispatch({ type: DISPLAY_LIST_REQUEST })

      const { data } = await axios.get(`/api/displays${keyword}`)

      dispatch({
          type: DISPLAY_LIST_SUCCESS,
          payload: data
      })

  } catch (error) {
      dispatch({
          type: DISPLAY_LIST_FAIL,
          payload: error.response && error.response.data.detail
              ? error.response.data.detail
              : error.message,
      })
  }
}