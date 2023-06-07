import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import useCategory from '../../hooks/useCategory';
import useNotCategory from '../../hooks/useNotCategory';
const Footer = () => {
    const finishedTasks = useCategory('finished').length;
    const activeTasks = useNotCategory('finished').length;
    return (_jsxs("footer", { className: 'flex justify-between w-full px-5 py-[8px] items-center bg-[#0067A3] shadow-md', children: [_jsxs("div", { className: 'flex gap-[36px]', children: [_jsxs("p", { className: 'text-[18px] text-white', children: ["Active tasks: ", activeTasks, " "] }), _jsxs("p", { className: 'text-[18px] text-white', children: ["Finished tasks: ", finishedTasks, ' '] })] }), _jsx("div", { children: _jsx("p", { className: 'text-[18px] text-white', children: "Kanban board 2023" }) })] }));
};
export default Footer;
