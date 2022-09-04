import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/main.css';
const rootElement: HTMLElement = document.getElementById('root') as HTMLElement;
const root: ReactDOM.Root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <App title={'React + Webpack'} />
    </React.StrictMode>,
);
