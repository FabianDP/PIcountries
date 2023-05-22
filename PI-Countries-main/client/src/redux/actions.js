import {
  GET_ALLC,
  GET_DETC,
  GET_ACT,
  GET_NAME,
  ORDER_CARDS,
  POBLATION_CARD,
  FILTER_CONTINETES,FILTER_Activi
} from "./actions-type";
import axios from "axios";

export const getall = () => {
  const endpoint = "http://localhost:3001/countrie";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_ALLC,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getdet = (id) => {
  const endpoint = `http://localhost:3001/countrie/detail/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_DETC,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getAct = () => {
  const endpoint = "http://localhost:3001/activities";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_ACT,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export function getName(name) {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/countrie?name=${name}`
      );

      dispatch({ type: GET_NAME, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
}
export const orderCards = (order) => {
  return { type: ORDER_CARDS, payload: order };
};

export const poblationCards = (order) => {
  return { type: POBLATION_CARD, payload: order };
};

export const filterContinets = (order) => {
  return { type: FILTER_CONTINETES, payload: order };
};

export const filterActi = (payload) => {
  return { type: FILTER_Activi, payload };
};
