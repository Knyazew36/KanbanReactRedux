import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { objectChange } from '../../store/slice/tasksSlice';
const Task = () => {
    const { id } = useParams();
    const idAsNumber = +id;
    const data = useSelector((state) => state.tasks);
    const index = data.findIndex((e) => e.id === idAsNumber);
    const item = data[index];
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(item.title);
    const [description, setDescription] = useState(item.description);
    const dispatch = useDispatch();
    const handleTitleClick = () => {
        setIsEditing(true);
    };
    const handleDescriptionClick = () => {
        setIsEditing(true);
    };
    const formSubmit = () => {
        dispatch(objectChange({ id: idAsNumber, title, description }));
        setIsEditing(prev => !prev);
    };
    return (_jsx("div", { className: 'bg-[#0079BF] min-h-[400px] py-[25px] px-[26px]', children: _jsxs("div", { className: '  rounded-[5px] bg-white py-[25px] px-[30px] w-full h-full relative flex flex-col gap-4 ', children: [_jsx(Link, { to: '/', className: 'absolute right-[25px] top-[30px]', children: _jsx("img", { src: '/close.png', alt: 'close' }) }), isEditing ? (_jsx(_Fragment, { children: _jsxs("form", { className: 'flex flex-col gap-4 pt-14', onSubmit: (e) => {
                            e.preventDefault();
                            formSubmit();
                        }, children: [_jsx("input", { type: 'text', className: 'text-lg font-bold border px-2\n                py-2 rounded-md', value: title, onChange: (e) => setTitle(e.target.value) }), _jsx("textarea", { className: 'text-lg border px-2 py-2 rounded-md', value: description, onChange: (e) => setDescription(e.target.value) }), _jsx("button", { className: 'border rounded-md bg-[#0067A3] text-white px-3\n              py-3 shadow-md hover:bg-blue-700 transition-all  ', type: 'submit', children: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F" })] }) })) : (_jsxs(_Fragment, { children: [_jsxs("p", { className: 'text-lg font-bold mt-14', onClick: handleTitleClick, children: ["Title: ", title] }), _jsxs("p", { onClick: handleDescriptionClick, children: ["Description:", ' ', description ? description : 'This task has no description'] })] }))] }) }));
};
export default Task;
