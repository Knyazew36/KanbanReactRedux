import { useState } from 'react';
import Button from '../Button/Button';
import useCategory from '../../hooks/useCategory';
import { useDispatch } from 'react-redux';
import { readyTask } from '../../store/slice/tasksSlice';

const Ready = () => {
  const [buttonIsActive, setButtonActive] = useState(false);
  const data = useCategory('backlog');
  const readyData = useCategory('ready');
  const dispatch = useDispatch();

  return (
    <div className='rounded-[10px] bg-[#EBECF0] h-auto p-3 flex justify-between flex-col gap-4 relative'>
      <div>
        <h2 className='text-[18px]'>Ready </h2>
        <ul className='flex flex-col gap-4'>
          {readyData &&
            readyData.map((e) => (
              <li
                className='cursor-pointer text-[18px] bg-white p-2 rounded-md '
                key={e.id}
                onClick={() => handleTaskClick(e.id)}
              >
                {e.title}
              </li>
            ))}
        </ul>
      </div>
      {buttonIsActive && (
        <div className='bg-white shadow-md rounded-md h-[100px] p-2 overflow-y-scroll absolute bottom-10 left-[50%] w-[90%] translate-x-[-50%] z-10 bg-slate-400'>
          <ul>
            {data &&
              data?.map((e) => (
                <li
                  className='cursor-pointer'
                  key={e.id}
                  onClick={() => handleTaskClick(e.id)}
                >
                  {e.title}
                </li>
              ))}
          </ul>
        </div>
      )}

      <Button
        handleButtonClick={handleButtonClick}
        buttonIsActive={buttonIsActive}
      />
    </div>
  );
};

export default Ready;
