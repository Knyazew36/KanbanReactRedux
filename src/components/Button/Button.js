import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Button = ({ handleButtonClick, buttonIsActive, isDisabled, }) => {
    const buttonClass = `flex items-center gap-1 text-[18px] text-button-color ${buttonIsActive ? 'bg-[#0079BF] text-white px-2 rounded-md' : ''}${isDisabled ? '' : ' cursor-pointer'}`;
    return (_jsxs("button", { disabled: isDisabled, type: 'submit', onClick: handleButtonClick, className: buttonClass, children: [_jsx("img", { src: 'Plus.svg', className: buttonIsActive ? 'hidden' : '' }), buttonIsActive ? 'Submit' : 'Add card'] }));
};
export default Button;
