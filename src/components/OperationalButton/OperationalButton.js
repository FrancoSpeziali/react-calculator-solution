import React from 'react';
import styles from './OperationalButton.module.css';

export default function OperationalButton(props) {

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
