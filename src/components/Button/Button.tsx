import { IButtonProps } from '../../models/models';

const Button: React.FC<IButtonProps> = ({
  handleButtonClick,
  buttonIsActive,
}) => {
  const initialClass =
    'flex items-center gap-1  cursor-pointer text-[18px] text-button-color';
  return (
    <button
      type='submit'
      onClick={handleButtonClick}
      className={
        buttonIsActive
          ? initialClass + ' bg-[#0079BF] text-white px-2 rounded-md'
          : initialClass
      }
    >
      <img src='Plus.svg' className={buttonIsActive ? 'hidden' : ''} />
      {buttonIsActive ? 'Submit' : 'Add card'}
    </button>
  );
};

export default Button;
