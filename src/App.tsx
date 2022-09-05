import React from 'react';
import './assets/styles/app.scss';
import img from './assets/images/img.jpg';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { getTodos } from './store/slices/todoSlice';
import { getTodoById } from './store/actions/todoActions';
interface IProps {
    title: string;
    children?: React.ReactNode;
}
const App: React.FC<IProps> = ({ title }) => {
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        // dispatch(getTodos([{
        //     id: 1,
        //     text: "Ok",
        // }]));
        const id: any = 1;
        dispatch(getTodoById(id));
    }, []);
    return (
        <div>
            <h1>{title}</h1>
            <img src={img} />
        </div>
    );
};

export default App;
