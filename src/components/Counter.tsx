import React, {useState} from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {

    const [count, setCount] = useState<number>(0)
    return (
        <div className={classes.h1}>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    );
};
