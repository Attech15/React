import React, {useId} from 'react';
import './InputBox.css';


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId();

    return (
        <div className={`container ${className}`}>
            <div className="leftcont">
                <label htmlFor={amountInputId} >
                    {label}
                </label>
                <input
                 type="number" 
                 placeholder="Amount" 
                 id={amountInputId} 
                 disabled={amountDisable} 
                 value={amount} 
                 onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
            </div>
            <div className="rightcont">
                <p>Currency Type</p>
                <select 
                value={selectCurrency} 
                id="curr" 
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} 
                disabled={currencyDisable}>
                    {currencyOptions.map((currency) => ( //remember the key in loop to increase performance
                        <option 
                        key={currency} 
                        value={currency}>
                        {currency}
                        </option>
                    ))}
                    
                </select>
            </div>
        </div>
    );
}

export default InputBox;
