"use client"
import React, { useState } from 'react';
import {customStore} from "./customStore";
import {Interval} from "./interval";



export default function App() {
    const [_, forceUpdate] = useState(0);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        customStore.setState(event.target.value+"")
    };

    const handleForceRender = () => {
        forceUpdate(c => c + 1);
    };

    const styles:any = {
        container: {
            backgroundColor: '#1a202c',
            color: 'white',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'sans-serif',
            textAlign: 'center',
            padding: '20px',
        },
        heading: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '8px',
            color: '#63b3ed',
        },
        paragraph: {
            color: '#a0aec0',
            marginBottom: '24px',
        },
        input: {
            backgroundColor: '#2d3748',
            color: 'white',
            border: '2px solid #4a5568',
            borderRadius: '8px',
            padding: '12px',
            fontSize: '16px',
            width: '300px',
            textAlign: 'center',
        },
        button: {
            backgroundColor: '#38a169',
            color: 'white',
            fontWeight: 'bold',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            marginTop: '20px',
        },
        displayArea: {
            marginTop: '24px',
            padding: '16px',
            backgroundColor: '#2d3748',
            borderRadius: '8px',
            minHeight: '50px',
            width: '300px',
        },
        displayAreaText: {
            color: '#a0aec0',
            fontStyle: 'italic',
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Демонстрация не-реактивного стора</h1>
            <p style={styles.paragraph}>
                Введите текст, и он сохранится в стор без рендера.
            </p>

            <input
                type="text"
                onChange={handleInputChange}
                style={styles.input}
                placeholder="Введите текст здесь..."
            />
            <Interval/>
        </div>
    );
}