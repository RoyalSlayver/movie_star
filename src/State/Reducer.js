import { CREATE_ITEM } from "../State/Action";

const defaultState = {
  Item: ""
};

export default function item(prevState = defaultState, action) {
  switch (action.type) {
    case CREATE_ITEM:
      return { ...prevState, Item: action.payload.item };
    default:
      return prevState;
  }
}
