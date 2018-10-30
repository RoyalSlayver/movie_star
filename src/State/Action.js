const OMDB_API_KEY = "79208e2b";

export const CREATE_ITEM_INIT = "CREATE_ITEM_INIT";
export function createItemInit() {
  return {
    type: CREATE_ITEM_INIT
  };
}

export const CREATE_ITEM_SUCCESS = "CREATE_ITEM_SUCCESS";
export function createItemSuccess(movie) {
  return {
    type: CREATE_ITEM_SUCCESS,
    payload: {
      movie
    }
  };
}

export const CREATE_ITEM_FAIL = "CREATE_ITEM_FAIL";
export function createItemFail(error) {
  return {
    type: CREATE_ITEM_FAIL,
    payload: {
      error
    }
  };
}

export const CREATE_ITEM_FAIL_CLEAR = "CREATE_ITEM_FAIL_CLEAR";
export function createItemFailClear(error) {
  return {
    type: CREATE_ITEM_FAIL_CLEAR
  };
}

export function findMovie(movie) {
  return function(dispatch) {
    dispatch(createItemInit());

    const url = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${
      movie.Item
    }`;

    fetch(url)
      .then(resp => resp.json(console.log(resp)))
      .then(data => {
        setTimeout(
          () =>
            dispatch(
              createItemSuccess({
                ...movie,
                name: data.Title,
                imageUrl: data.Poster,
                plot: data.Plot,
                type: data.Type
              })
            ),
          2000
        );
      })
      .catch(err => dispatch(createItemFail(err.message)));
  };
}

export const DATA_SAVE = "DATA_SAVE";
export function dataSave(data) {
  return {
    type: DATA_SAVE,
    payload: {
      data
    }
  };
}
