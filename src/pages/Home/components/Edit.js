import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add }) => {
  const [product, setProduct] = useState("");

  function productChange(e) {
    setProduct(e.target.value);
  }

  const [date, setDate] = useState("");

  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");

  function timeChange(e) {
    setTime(e.target.value);
  }

  function addItem() {
    add(function (preData) {
      return [
        {
          id: v4(),
          product,
          date,
          time,
        },
        ...preData,
      ];
    });
  }

  return (
    <div className="edit-wrapper">
      <h1>Products List</h1>
      <p>Product Name</p>
      <input type="text" value={product} onChange={productChange} />
      <p>Date</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>Time</p>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="add">
        Add New
      </button>
    </div>
  );
};

export default Edit;
