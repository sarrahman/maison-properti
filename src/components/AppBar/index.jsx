import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUser, logout } from "../../configs/redux/Functions/Auth";
import LoginAppBar from "./login";
import NotLoginAppBar from "./notLogin";

const AppBar = (props) => {
  const id = window.localStorage.getItem("uid");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (id) {
      props
        .getUser(id)
        .then((res) => {
          setUserData(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [id, props]);

  if (props.isLogin) {
    return (
      <LoginAppBar
        name={userData.username}
        photoUrl={userData.photoUrl}
        logout={() => {
          props
            .logout()
            .then(() => {
              window.location.href = "/";
            })
            .catch((err) => {
              console.log(err.response.data);
            });
        }}
      />
    );
  }
  return <NotLoginAppBar sign={props.sign || 'login'} />;
};

const reduxState = (state) => ({
  isLogin: state.isLogin,
});

const reduxDispatch = (dispatch) => ({
  getUser: (id) => dispatch(getUser(id)),
  logout: () => dispatch(logout()),
});

export default connect(reduxState, reduxDispatch)(AppBar);
