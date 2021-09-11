import { useState, useEffect } from "react";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

const Home = () => {
  // const[a, setA] = useState(100)

  // function plus()
  // {
  //     // setA(200)

  //     // 以下写法是拿到前一个值

  //     setA(function (prev){
  //     return prev + 200
  //     })
  // }
  //     return <div className="app">
  //     {a}
  //     <button onClick={plus}>Plus</button>
  //     <Edit />
  //     <List />
  //   </div>

  const [data, setData] = useState([]);

  useEffect(() => {
    window.alert("Successfully Added")
  }, [data])

  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
    </div>
  );
};

export default Home;
