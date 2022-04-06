const initialState = {
  isLogin: false,
  isLoading: false,
  token: "",
};

if (window.localStorage.getItem("token")) {
  initialState.isLogin = true;
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: action.value,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: action.value,
      };
    case "TOKEN":
      return {
        ...state,
        token: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
