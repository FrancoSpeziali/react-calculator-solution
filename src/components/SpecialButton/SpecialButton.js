import React from 'react';
import styles from './SpecialButton.module.css';

export default function SpecialButton(props) {
    return (
        <button onClick={props.handleClick} className={styles.button}>
            {props.calculatorKey}
        </button>
    );
}
