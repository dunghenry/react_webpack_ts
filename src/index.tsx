import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/main.css';
import store from './store/store';
import { Provider } from 'react-redux';
const rootElement: HTMLElement = document.getElementById('root') as HTMLElement;
const root: ReactDOM.Root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App title={'React + Webpack'} />
        </Provider>
    </React.StrictMode>,
);
