import { IButtonProps } from '../../models/models';

const Button: React.FC<IButtonProps> = ({
  handleButtonClick,
  buttonIsActive,
}) => {
  return (
    <button
      type='submit'
      onClick={handleButtonClick}
      className='flex items-center gap-1  cursor-pointer text-[18px] text-button-color'
    >
      <img src='Plus.svg'></img>
      {buttonIsActive ? 'Submit' : 'Add card'}
    </button>
  );
};

export default Button;
