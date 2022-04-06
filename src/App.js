import "./assets/css/App.css";
import Router from "./routes.js";
import { Provider } from "react-redux";
import store from "./configs/redux/store.js";
import moment from "moment";
import "./configs/firebase.js";
import axios from "axios";

axios.defaults.baseURL = process.env.BACKEND_URL;
axios.defaults.withCredentials = true;

moment.locale("id");

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}

export default App;
