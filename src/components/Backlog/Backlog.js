import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from '../Button/Button';
import useCategory from '../../hooks/useCategory';
import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../../store/slice/tasksSlice';
import { Link } from 'react-router-dom';
const Backlog = () => {
    const [buttonIsActive, setButtonActive] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const data = useCategory('backlog');
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const handleButtonClick = () => {
        if (inputValue) {
            dispatch(createTask(inputValue));
            setInputValue('');
        }
        setButtonActive(!buttonIsActive);
    };
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [buttonIsActive]);
    return (_jsxs("div", { className: 'rounded-[10px] justify-between bg-[#EBECF0] h-auto p-3 flex flex-col gap-4', children: [_jsxs("div", { className: 'flex flex-col gap-2', children: [_jsx("h2", { className: 'text-[18px] font-bold', children: "Backlog" }), _jsx("ul", { className: 'flex flex-col gap-4', children: data &&
                            data.map((task) => (_jsx(Link, { to: `/task/${task.id}`, children: _jsx("li", { className: 'text-[18px] bg-white p-2 rounded-md', children: task.title }, task.id) }, task.id))) })] }), _jsxs("form", { className: 'flex flex-col gap-2', onSubmit: (e) => e.preventDefault(), children: [buttonIsActive && (_jsx("input", { ref: inputRef, type: 'text', value: inputValue, onChange: handleInputChange, className: 'rounded-[5px] h-9 relative px-4' })), _jsx(Button, { handleButtonClick: handleButtonClick, buttonIsActive: buttonIsActive })] })] }));
};
export default Backlog;
