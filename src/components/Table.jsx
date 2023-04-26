import React, { useRef, useState } from 'react';

const Table = ({ months, store, market, setIsMarket }) => {
  const inputRef = useRef();
  const storeEl = store;

  const handleChange = (monthId, value) => {
    const store = market.find((el) => el.store.id === storeEl.id);

    const needMonth = store?.months?.filter((el) => {
      if (el.id === monthId) {
        el.value = Number(value.substr(0, 7));
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
      <div className="store-wrap">
        <div className="store">{storeEl.name}</div>
      </div>
      <div className="values">
        {months.map((el, i) => (
          <input
            ref={inputRef}
            onChange={(e) => handleChange(el.id, e.target.value)}
            className="input"
            type="number"
            value={
              Number(el.value.toString().length) <= 7
                ? el.value
                : Number(el.value.toString().substr(0, 7))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Table;
