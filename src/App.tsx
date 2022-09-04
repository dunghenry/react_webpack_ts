import React from 'react';
import './assets/styles/app.scss';
import img from './assets/images/img.jpg';
interface IProps {
    title: string;
    children?: React.ReactNode;
}
const App: React.FC<IProps> = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
            <img src={img} />
        </div>
    );
};

export default App;
