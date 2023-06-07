import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const onClickMenuHandler = () => {
        setIsActive(prev => !prev);
    };
    return (_jsxs("header", { className: 'flex justify-between w-full px-5 py-[8px] items-center bg-[#0067A3] shadow-md relative', children: [_jsx("h1", { className: ' text-lg text-white ', children: "Awesome Kanban Board" }), _jsxs("div", { className: "relative", children: [_jsxs("div", { className: 'flex items-center cursor-pointer', onClick: onClickMenuHandler, children: [_jsx("img", { src: '/user-avatar.svg', alt: 'avatar' }), _jsx("img", { src: '/arrow-down.svg', alt: 'arrow' })] }), isActive && _jsxs("div", { className: "px-2 rounded-md py-3 bg-white  absolute top-11 z-30 -left-16 w-[134px]  flex flex-col gap-1 shadow-md ", children: [_jsx("p", { className: "cursor-pointer hover:underline ", children: "Profile" }), _jsx("p", { className: "cursor-pointer hover:underline ", children: "Log Out" })] })] })] }));
};
export default Header;
