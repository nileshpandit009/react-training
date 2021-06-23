const dispatchWrapper = (dispatch, type, payload) => {
  dispatch({ type, payload });
};
export default dispatchWrapper;
