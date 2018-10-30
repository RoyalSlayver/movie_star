import {
  CREATE_ITEM_INIT,
  CREATE_ITEM_FAIL,
  CREATE_ITEM_FAIL_CLEAR,
  CREATE_ITEM_SUCCESS,
  DATA_SAVE
} from "../State/Action";

const defaultState = {
  movie: "",
  isLoading: false,
  error: null,
  data: []
};

export default function item(prevState = defaultState, action) {
  switch (action.type) {
    case CREATE_ITEM_INIT:
      return { ...prevState, isLoading: true };
    case CREATE_ITEM_SUCCESS:
      return { ...prevState, movie: action.payload.movie };
    case CREATE_ITEM_FAIL:
      return { ...prevState, isLoading: false, error: action.payload.error };
    case CREATE_ITEM_FAIL_CLEAR:
      return { ...prevState, error: null };
    case DATA_SAVE:
      return { ...prevState, data: [...prevState.data, action.payload.data] };

    default:
      return prevState;
  }
}
