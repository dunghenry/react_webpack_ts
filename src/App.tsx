import React from 'react';
import './assets/styles/app.scss';
interface IProps {
    title: string;
    children?: React.ReactNode;
}
const App: React.FC<IProps> = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default App;
