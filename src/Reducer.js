const initialState = {
  text: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATETEXT":
      return {
        text: action.data
      };
      default : 
      return state;
  }
}

export default reducer;
