import {
  CREATE_ITEM_INIT,
  CREATE_ITEM_FAIL,
  CREATE_ITEM_FAIL_CLEAR,
  CREATE_ITEM_SUCCESS
} from "../State/Action";

const defaultState = {
  movie: "",
  isLoading: false,
  error: null
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

    default:
      return prevState;
  }
}
