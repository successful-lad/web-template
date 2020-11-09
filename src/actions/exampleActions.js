import { EXAMPLE_ACTION } from './types';

// export default (payload) => ({
//   type: EXAMPLE_ACTION,
//   payload,
// });

 const loadingError = bool => ({
  type: "LOADING_ERROR",
  hasErrored: bool
});

 const loadingInProgress = bool => ({
  type: "LOADING_IN_PROGRESS",
  isLoading: bool
});

 const loadingSuccess = repos => ({
  type: "LOADING_SUCCESS",
  repos
});

 const clearRepos = () => ({
  type: "CLEAR_REPOS"
});

 const getRepos = (username = 'successful-lad') => {

  return dispatch => {
    dispatch(clearRepos());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));
        // console.log(response)
        return response;
      })
      .then(response => {
        console.log(response);
        response.json()
      })
      .then(repos => dispatch(loadingSuccess(repos)))
      .catch(() => dispatch(loadingError(true)));
  };
};

 export {
   clearRepos,
   getRepos
 }