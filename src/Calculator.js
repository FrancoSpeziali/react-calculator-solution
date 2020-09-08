import React, { useState } from 'react';
import cssStyles from './Calculator.module.css';
import Display from './components/Display/Display';
import SpecialButton from './components/SpecialButton/SpecialButton';
import OperationalButton from './components/OperationalButton/OperationalButton';
import NumberButton from './components/NumberButton/NumberButton';

export default function Calculator() {

    const [currentNumber, setCurrentNumber] = useState('0');
    const [lastNumber, setLastNumber] = useState(null);
    const [operation, setOperation] = useState(null);

    const allClear = () => setCurrentNumber('0');

    const handleOperationalInput = (operationAsString) => {
        if (operationAsString === '=' && lastNumber !== null) {
            // a short note on eval
            // eval is generally speaking quite bad, because it can potentially
            // mean harmful code is injected into your script
            // so really here I am cheating
            // (it is not good practise)
            const result = eval(`${lastNumber} ${operation} ${currentNumber}`);
            setCurrentNumber(result.toString());

            return;
        }

        setLastNumber(currentNumber);
        setCurrentNumber('');
        setOperation(operationAsString);
    }

    const handleNumberInput = (numberAsString) => {
        const number = Number(numberAsString);

        if(Number(currentNumber) === 0) {
            setCurrentNumber(number.toString());

            return;
        }

        setCurrentNumber(`${currentNumber}${number}`)
    }

    return (
        <div className={cssStyles.container}>
            <Display content={currentNumber} />
            <SpecialButton calculatorKey='AC' onClick={allClear} />
            <SpecialButton calculatorKey='+/-' />
            <SpecialButton calculatorKey='%' />
            <OperationalButton calculatorKey='/' onClick={handleOperationalInput} />
            <OperationalButton calculatorKey='*' onClick={handleOperationalInput} />
            <OperationalButton calculatorKey='-' onClick={handleOperationalInput} />
            <OperationalButton calculatorKey='+' onClick={handleOperationalInput} />
            <OperationalButton calculatorKey='=' onClick={handleOperationalInput} />
            <NumberButton calculatorKey='9' onClick={handleNumberInput} />
            <NumberButton calculatorKey='8' onClick={handleNumberInput} />
            <NumberButton calculatorKey='7' onClick={handleNumberInput} />
            <NumberButton calculatorKey='6' onClick={handleNumberInput} />
            <NumberButton calculatorKey='5' onClick={handleNumberInput} />
            <NumberButton calculatorKey='4' onClick={handleNumberInput} />
            <NumberButton calculatorKey='3' onClick={handleNumberInput} />
            <NumberButton calculatorKey='2' onClick={handleNumberInput} />
            <NumberButton calculatorKey='1' onClick={handleNumberInput} />
            <NumberButton calculatorKey='0' onClick={handleNumberInput} />
        </div>
    );
}
