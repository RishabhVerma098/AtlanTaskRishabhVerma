const changeGraph = (state = null, action) => {
  switch (action.type) {
    case "CHANGE_GRAPH":
      return { ...action.payload };
    default:
      return state;
  }
};

export default changeGraph;
