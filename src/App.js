import { useEffect, useState } from 'react';
import './App.css';
import json from './mock_stores.json';
import Table from './components/Table';

function App() {
  const [num, setNum] = useState(0);
  const [market, setIsMarket] = useState(json);
  const [jan, setJan] = useState();
  const [feb, setFeb] = useState();
  const [mar, setMar] = useState();
  const [apr, setApr] = useState();
  const [may, setMay] = useState();
  const [jun, setJun] = useState();
  const [jul, setJul] = useState();
  const [aug, setAug] = useState();
  const [sep, setSep] = useState();
  const [oct, setOct] = useState();
  const [nov, setNov] = useState();
  const [dec, setDec] = useState();

  const sumResult = market.map((item) => item?.months?.reduce((a, b) => a + b.value, 0));
  const totalsOfTotals = sumResult.reduce((a, b) => a + b);

  const janTotal = () => {
    setJan(
      market
        .map((item) => item.months.filter((el) => el.name === 'JAN'))
        .map((elem) => elem.map((element) => element.value))
        .flat()
        .reduce((a, b) => a + b),
    );
  };
  const febTotal = () => {
    setFeb(
      market
        .map((item) => item.months.filter((el) => el.name === 'FEB'))
        .map((elem) => elem.map((element) => element.value))
        .flat()
        .reduce((a, b) => a + b),
    );
  };
  const marTotal = () => {
    setMar(
      market
        .map((item) => item.months.filter((el) => el.name === 'MAR'))
        .map((elem) => elem.map((element) => element.value))
        .flat()
        .reduce((a, b) => a + b),
    );
  };
  const aprTotal = () => {
    setApr(
      market
        .map((item) => item.months.filter((el) => el.name === 'APR'))
        .map((elem) => elem.map((element) => element.value))
        .flat()
        .reduce((a, b) => a + b),
    );
  };
  const mayTotal = () => {
    setMay(
      market
        .map((item) => item.months.filter((el) => el.name === 'MAY'))
        .map((elem) => elem.map((element) => element.value))
        .flat()
        .reduce((a, b) => a + b),
    );
  };
  const junTotal = () => {
    setJun(
      market
        .map((item) => item.months.filter((el) => el.name === 'JUN'))
        .map((elem) => elem.map((element) => element.value))
        .flat()
        .reduce((a, b) => a + b),
    );
  };
  const julTotal = () => {
    setJul(
      market
        .map((item) => item.months.filter((el) => el.name === 'JUL'))
        .map((elem) => elem.map((element) => element.value))
        .flat()
        .reduce((a, b) => a + b),
    );
  };
  const augTotal = () => {
    setAug(
      market
        .map((item) => item.months.filter((el) => el.name === 'AUG'))
        .map((elem) => elem.map((element) => element.value))
        .flat()
        .reduce((a, b) => a + b),
    );
  };
  const sepTotal = () => {
    setSep(
      market
        .map((item) => item.months.filter((el) => el.name === 'SEP'))
        .map((elem) => elem.map((element) => element.value))
        .flat()
        .reduce((a, b) => a + b),
    );
  };
  const octTotal = () => {
    setOct(
      market
        .map((item) => item.months.filter((el) => el.name === 'OCT'))
        .map((elem) => elem.map((element) => element.value))
        .flat()
        .reduce((a, b) => a + b),
    );
  };
  const novTotal = () => {
    setNov(
      market
        .map((item) => item.months.filter((el) => el.name === 'NOV'))
        .map((elem) => elem.map((element) => element.value))
        .flat()
        .reduce((a, b) => a + b),
    );
  };
  const decTotal = () => {
    setDec(
      market
        .map((item) => item.months.filter((el) => el.name === 'DEC'))
        .map((elem) => elem.map((element) => element.value))
        .flat()
        .reduce((a, b) => a + b),
    );
  };

  useEffect(() => {
    janTotal();
    febTotal();
    marTotal();
    aprTotal();
    mayTotal();
    junTotal();
    julTotal();
    augTotal();
    sepTotal();
    octTotal();
    novTotal();
    decTotal();
  }, [market]);

  return (
    <div className="App">
      {/* <table>
        <thead>
          {json[0].months.map((item, i) => (
            <tr>
              <th>{item.name}</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {/* {json.map((item, i) => (
            <input type="text" value={} />
          ))} 
          {json[num].months.map((item) => (
            <input type="text" value={item.value} />
          ))}
        </tbody>
      </table> */}
      <div className="flex">
        <div>
          <div className="months">
            <div></div>
            {json[num].months.map((item) => (
              <div>{item.name}</div>
            ))}
          </div>
          {market?.map((item, i) => (
            <Table setIsMarket={setIsMarket} {...item} key={i} market={market} />
          ))}
        </div>
        <div className="total">
          <div className="total-item"></div>
          {sumResult.map((item, i) => (
            <div className="total-item" key={i}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="monthsTotal">
        <div>totals</div>
        {/* {market[0].months.map((item) => ( */}
        <div>{jan}</div>
        <div>{feb}</div>
        <div>{mar}</div>
        <div>{apr}</div>
        <div>{may}</div>
        <div>{jun}</div>
        <div>{jul}</div>
        <div>{aug}</div>
        <div>{sep}</div>
        <div>{oct}</div>
        <div>{nov}</div>
        <div>{dec}</div>
        {/* ))} */}
        <div>{totalsOfTotals}</div>
      </div>
    </div>
  );
}

export default App;
