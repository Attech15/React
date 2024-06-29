import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState("usd");
  const [to,setTo] = useState("inr");
  const [convertedAmount,setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }
  return (
    <>
      <div className="background">
        <div className="containerBox">
          <div className="forms">
            <form onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}>
              <div className="top" >
                <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="mid" >
                <button type="button" onClick={swap}>Swap</button>
              </div>
              <div className="bottom" >
                <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
                />
              </div>
              <button type="submit" id='convert'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
