const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Math.random(), text: action.text }];
    default:
      return state;
  }
};

export default reducer;
