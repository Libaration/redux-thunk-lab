export const fetchCats = () => {
  return async (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });
    let response = await fetch(
      'https://learn-co-curriculum.github.io/cat-api/cats.json'
    );
    let responseJSON = await response.json();
    dispatch({
      type: 'ADD_CATS',
      cats: await responseJSON.images,
    });
  };
};
