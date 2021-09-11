import Item from "./Item";

const List = ({ listData, deleteData }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { product, date, time, id } = item;
        return (
          <Item
            key={id}
            id={id}
            productData={product}
            dateData={date}
            timeData={time}
            deleteData={deleteData}
          />
        );
      })}
    </div>
  );
};

export default List;
