"use client";

import React, {useState, useEffect, useMemo} from 'react';

const Page = () => {
    const [count, setCount] = useState(0);
        let test= useMemo(()=>{
            return count %2;
        },[count])

    useEffect(() => {
        console.log(test)
    }, [test]);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
            <h1>Client Page with Counter</h1>
            <p style={{ fontSize: '24px', margin: '20px 0' }}>
                Current Count: {count}
            </p>
            <div> % {test}</div>
            <button
                onClick={handleIncrement}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer'
                }}
            >
                Increment
            </button>
        </div>
    );
};

export default Page;
