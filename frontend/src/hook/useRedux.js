import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_DATA_FAILED, FETCH_DATA_SUCCESS } from "../redux-saga/reducer";

const useRedux = () => {
  const dispatch = useDispatch();
  const treeData = useSelector((state) => state.data);
  const message = useSelector((state) => state.message);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/functions/getSortedTree",
      );
      const responseData = await response.json();

      if (responseData.data) {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: responseData.data });
      } else {
        console.log("No data from database");
      }
    } catch (err) {
      dispatch({ type: FETCH_DATA_FAILED });
    }
  };

  return { fetchData, message, treeData };
};

export default useRedux;
