export const CREATE_ITEM = "CREATE_ITEM";
export default function createItem(item) {
  return {
    type: CREATE_ITEM,
    payload: {
      item
    }
  };
}
