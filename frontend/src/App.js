import React, {useState} from "react";
import {TreeSelect} from "antd";

const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',

   title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: 'leaf3',
            children: [

            ]
          },
        ],
      },
    ],
  },
];

function App() {

  const [value, setValue] = useState();

  const onChange = (newValue) => {
    setValue(prev => newValue);
    console.log(value)
  };

  return (
    <React.Fragment>
      <h1> This is Coding test</h1>
        <TreeSelect
            showSearch
            style={{ width: '100%' }}
            value={value}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Please select"
            allowClear
            treeDefaultExpandAll
            onChange={onChange}
            treeData={treeData}
        />
    </React.Fragment>
  );
}

export default App;
