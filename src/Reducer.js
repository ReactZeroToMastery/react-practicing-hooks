const initialState = {
  text = ''
}

function reducer(state = initialState, action){
  switch(action.type){
    case 'UPDATETEXT' : return {
      text : action.text
    }
  }
}

export default reducer;