import axios from "axios";

export const addProduct = (data) => (dispatch) => {
  dispatch({
    type: "LOADING",
    value: true,
  });
  return new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:8080/product`, data)
      .then((response) => {
        dispatch({
          type: "LOADING",
          value: false,
        });
        resolve(response);
      })
      .catch((error) => {
        dispatch({
          type: "LOADING",
          value: false,
        });
        reject(error);
      });
  });
};

export const getProducts = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:8080/products`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getProduct = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:8080/product/${id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getProductByUid = (uid) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:8080/products/uid/${uid}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const editProduct = (id, product) => (dispatch) => {
  dispatch({
    type: "LOADING",
    value: true,
  });
  return new Promise((resolve, reject) => {
    axios
      .patch(`http://localhost:8080/product/${id}`, product, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        dispatch({
          type: "LOADING",
          value: false,
        });
        resolve(response);
      })
      .catch((error) => {
        dispatch({
          type: "LOADING",
          value: false,
        });
        reject(error);
      });
  });
};

export const deleteProduct = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`http://localhost:8080/product/${id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
