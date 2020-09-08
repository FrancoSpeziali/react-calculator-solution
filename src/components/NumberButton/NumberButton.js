import React from 'react';
import styles from './NumberButton.module.css';

export default function NumberButton(props) {

    const handleClick = () => {
        props.onClick(props.calculatorKey);
    }

    return (
        <button onClick={handleClick}
                className={styles.button}>
            {props.calculatorKey}
        </button>
    );
}
