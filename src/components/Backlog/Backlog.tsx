import Button from '../Button/Button';
import useCategory from '../../hooks/useCategory';
import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { createBacklogTask } from '../../store/slice/tasksSlice';

const Backlog = () => {
  const [buttonIsActive, setButtonActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const data = useCategory('backlog');
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    if (inputValue) {
      // dispatch(createBacklogTask(inputValue));
      setInputValue('');
    }
    setButtonActive(!buttonIsActive);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [buttonIsActive]);

  return (
    <div className='rounded-[10px] justify-between bg-[#EBECF0] h-auto p-3 flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-[18px] font-bold'>Backlog</h2>
        {/* <ul className='flex flex-col gap-4'>
          {data &&
            data.map((task) => (
              <li key={task.id} className='text-[18px] bg-white p-2 rounded-md'>
                {task.title}
              </li>
            ))}
        </ul> */}
      </div>
      <form
        className='flex flex-col gap-2'
        onSubmit={(e) => e.preventDefault()}
      >
        {buttonIsActive && (
          <input
            ref={inputRef}
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            className='rounded-[5px] h-9 relative px-4'
          />
        )}
        <Button
          handleButtonClick={handleButtonClick}
          buttonIsActive={buttonIsActive}
        />
      </form>
    </div>
  );
};

export default Backlog;
