import React, { useEffect, useState } from "react";
import { Button, TreeSelect } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_DATA } from "./redux-saga/reducer";
import useRedux from "./hook/useRedux";

import "./App.css";

function App() {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  //This is custom hook
  const custom_hook = useRedux();

  //Not sure do I have to fetch the data when start rendering because the question require to use button fetch the data
  //   useEffect(() => {
  //       dispatch({type: FETCH_DATA})
  //       console.log(treeData)
  //   },[])

  //Handler TreeSelect onSelect and send alert
  const onChange = (newValue) => {
    setValue((prev) => newValue);
    alert(`You selected ID: ${newValue}`);
  };

  //Button 1 is through Saga to store data
  const handleBtn1Click = () => {
    dispatch({ type: FETCH_DATA });
  };

  //Button 2 is directly store data to Redux
  const handleBtn2Click = () => {
    custom_hook.fetchData();
  };

  return (
    <div className="app-container">
      <h1> This is Coding test</h1>

      {custom_hook.treeData.length !== 0 ? (
        <TreeSelect
          showSearch
          style={{ width: "100%" }}
          value={value}
          dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
          placeholder="Please select"
          allowClear
          fieldNames={{
            value: "categoryId",
            label: "name",
          }}
          onSelect={onChange}
          treeData={custom_hook.treeData}
        />
      ) : (
        <span>Click below to show Data</span>
      )}

      <Button onClick={handleBtn1Click}>Button 1 through saga to Redux</Button>
      <Button onClick={handleBtn2Click}>Button 2 directly to Redux</Button>
      <span>{custom_hook.message}</span>
    </div>
  );
}

export default App;
