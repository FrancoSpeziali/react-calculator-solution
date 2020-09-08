import React from 'react';
import styles from './Display.module.css';

export default function Display(props) {
    return <div className={styles.container}>{props.content}</div>;
}
