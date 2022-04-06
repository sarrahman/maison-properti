import axios from "axios";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

axios.defaults.withCredentials = true;

export const RegisterWithEmail = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:8080/auth/register`, data)
      .then((response) => {
        dispatch({
          type: "LOGIN",
          value: true,
        });
        resolve(response);
      })
      .catch((error) => {
        dispatch({
          type: "LOGIN",
          value: false,
        });
        reject(error);
      });
  });
};

export const LoginWithEmail = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:8080/auth/login`, data)
      .then((response) => {
        dispatch({
          type: "LOGIN",
          value: true,
        });
        dispatch({
          type: "TOKEN",
          value: response.data.token,
        });
        window.localStorage.setItem("token", response.data.token);
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getUser = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:8080/auth/user/${id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const updateUser = (user, id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`http://localhost:8080/auth/user/${id}`, user)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const profile = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:8080/auth/profile`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data.message);
      });
  });
};

export const refreshToken = () => (dispatch) => {
  axios
    .get(`http://localhost:8080/token`)
    .then((response) => {
      window.localStorage.setItem("token", response.data.token);
      dispatch({
        type: "TOKEN",
        value: response.data.token,
      });
    })
    .catch((error) => {
      throw error.response.data.message;
    });
};

export const loginWithGoogle = () => (dispatch) => {
  const provider = new GoogleAuthProvider();
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        axios
          .post(`http://localhost:8080/auth/google/login`, {
            email: user.email,
            photoUrl: user.photoURL,
          })
          .then((response) => {
            dispatch({
              type: "LOGIN",
              value: true,
            });
            window.localStorage.setItem("token", response.data.token);
            window.localStorage.setItem("uid", response.data.uid);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        reject(errorMessage);
      });
  });
};

export const registerWithGoogle = () => (dispatch) => {
  const provider = new GoogleAuthProvider();
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        axios
          .post(`http://localhost:8080/auth/google/register`, {
            username: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
          .then((response) => {
            dispatch({
              type: "LOGIN",
              value: true,
            });
            window.localStorage.setItem("token", response.data.token);
            window.localStorage.setItem("uid", response.data.uid);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        reject(errorMessage);
      });
  });
};

export const logout = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`http://localhost:8080/logout`)
      .then((response) => {
        window.localStorage.removeItem("token");
        dispatch({
          type: "LOGIN",
          value: false,
        });
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
