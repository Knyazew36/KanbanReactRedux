import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Button from '../Button/Button';
import useCategory from '../../hooks/useCategory';
import { useDispatch } from 'react-redux';
import { updateTaskStatus } from '../../store/slice/tasksSlice';
import { Link } from 'react-router-dom';
import useNotCategory from '../../hooks/useNotCategory';
const Progress = () => {
    const [buttonIsActive, setButtonActive] = useState(false);
    const data = useNotCategory('progress') || [];
    const progressData = useCategory('progress') || [];
    const dispatch = useDispatch();
    const handleButtonClick = () => {
        setButtonActive(true);
    };
    const handleTaskClick = (id) => {
        dispatch(updateTaskStatus({ id, status: 'progress' }));
        setButtonActive(false);
    };
    const isDisabled = data.length === 0;
    return (_jsxs("div", { className: 'rounded-[10px] bg-[#EBECF0] h-auto p-3 flex justify-between flex-col gap-4 relative', children: [_jsxs("div", { children: [_jsx("h2", { className: 'text-[18px] font-bold', children: "Progress " }), _jsx("ul", { className: 'flex flex-col gap-4', children: progressData &&
                            progressData.map((e) => (_jsx(Link, { to: `/task/${e.id}`, children: _jsx("li", { className: 'cursor-pointer text-[18px] bg-white p-2 rounded-md ', onClick: () => handleTaskClick(e.id), children: e.title }) }, e.id))) })] }), buttonIsActive && (_jsx("div", { className: 'bg-white shadow-md rounded-md h-[100px] p-2 overflow-y-scroll absolute bottom-10 left-[50%] w-[90%] translate-x-[-50%] z-10 bg-slate-400', children: _jsx("ul", { children: data &&
                        data?.map((e) => (_jsx("li", { className: 'cursor-pointer', onClick: () => handleTaskClick(e.id), children: e.title }, e.id))) }) })), _jsx(Button, { isDisabled: isDisabled, handleButtonClick: handleButtonClick, buttonIsActive: buttonIsActive })] }));
};
export default Progress;
