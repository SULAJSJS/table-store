import React, { useState } from 'react';

const Table = ({ months, store, market, setIsMarket }) => {
  const storeEl = store;
  const sum = () => {
    const initialValue = 0;
    return market.map((item) =>
      console.log(
        item.months.reduce(
          (accumulator, currentValue) => console.log('data', accumulator + currentValue),
          initialValue,
        ),
      ),
    );
  };
  //   const handleChange = (el, e) => {
  //     data.map((item) =>
  //       item.months.map((elem) => {
  //         return el.id === elem.id ? { ...elem, value: Number(e.target.value) } : elem;
  //       }),
  //     );
  //     sum();
  //   };

  const handleChange = (monthId, value) => {
    const store = market.find((el) => el.store.id === storeEl.id);

    const needMonth = store?.months?.filter((el) => {
      if (el.id === monthId) {
        el.value = Number(value);
      }
    });

    const newArray = market.filter((el) => el.store.id !== storeEl.id);

    setIsMarket(
      [...newArray, { ...store, ...needMonth }].sort(function (a, b) {
        if (a.store.id > b.store.id) {
          return 1;
        }
        if (a.store.id < b.store.id) {
          return -1;
        }
        // a должно быть равным b
        return 0;
      }),
    );
  };

  return (
    <div className="row">
      <div className="store">{storeEl.name}</div>
      <div className="values">
        {months.map((el, i) => (
          <input
            onChange={(e) => handleChange(el.id, e.target.value)}
            className="input"
            type="text"
            value={el.value}
          />
        ))}
      </div>
    </div>
  );
};

export default Table;
