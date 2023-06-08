import React from 'react'
import { IButtonProps } from '../../models/models';

const Button: React.FC<IButtonProps> = ({
  handleButtonClick,
  buttonIsActive,
  isDisabled,
}) => {
  const buttonClass = `flex items-center gap-1 text-[18px] text-button-color ${buttonIsActive ? 'bg-[#0079BF] text-white px-2 rounded-md' : ''
    }${isDisabled ? '' : ' cursor-pointer'}`;

  return (
    <button
      disabled={isDisabled}
      type='submit'
      onClick={handleButtonClick}
      className={buttonClass}
    >
      <img src='Plus.svg' className={buttonIsActive ? 'hidden' : ''} />
      {buttonIsActive ? 'Submit' : 'Add card'}
    </button>
  );
};

export default Button;
