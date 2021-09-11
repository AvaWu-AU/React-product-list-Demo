const Item = ({ id, productData, dateData, timeData, deleteData }) => {

  function deleteItem(){
    deleteData(function(prev){
    return prev.filter(item => item.id !== id)
    })

  }

  return (
    <div className="item">
      <div>
        <p>{productData}</p>
        <p>{`${dateData} ${timeData}`}</p>
      </div>
      <button onClick={deleteItem} className="remove">Delete</button>
    </div>
  );
};

export default Item;
