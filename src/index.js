import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducers from "./store/reducer";
import App from "./App";

const store = createStore(rootReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

// const dispatch = useDispatch();
// const login = useSelector((state) => state.authReducer);
// dispatch(loginUser(email, password));
