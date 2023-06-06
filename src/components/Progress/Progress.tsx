import { useState } from 'react';
import Button from '../Button/Button';
import useCategory from '../../hooks/useCategory';
import { useDispatch } from 'react-redux';
import { updateTaskStatus } from '../../store/slice/tasksSlice';
import { Link } from 'react-router-dom';
import useNotCategory from '../../hooks/useNotCategory';

const Progress = () => {
  const [buttonIsActive, setButtonActive] = useState(false);
  const data = useNotCategory('progress') || [];
  const progressData = useCategory('progress') || [];
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    setButtonActive(true);
  };

  const handleTaskClick = (id: number) => {
    dispatch(updateTaskStatus({ id, status: 'progress' }));
    setButtonActive(false);
  };

  const isDisabled = data.length === 0;
  return (
    <div className='rounded-[10px] bg-[#EBECF0] h-auto p-3 flex justify-between flex-col gap-4 relative'>
      <div>
        <h2 className='text-[18px] font-bold'>Progress </h2>
        <ul className='flex flex-col gap-4'>
          {progressData &&
            progressData.map((e) => (
              <Link key={e.id} to={`/task/${e.id}`}>
                <li
                  className='cursor-pointer text-[18px] bg-white p-2 rounded-md '
                  onClick={() => handleTaskClick(e.id)}
                >
                  {e.title}
                </li>
              </Link>
            ))}
        </ul>
      </div>
      {buttonIsActive && (
        <div className='bg-white shadow-md rounded-md h-[100px] p-2 overflow-y-scroll absolute bottom-10 left-[50%] w-[90%] translate-x-[-50%] z-10 bg-slate-400'>
          <ul>
            {data &&
              data?.map((e) => (
                <li
                  key={e.id}
                  className='cursor-pointer'
                  onClick={() => handleTaskClick(e.id)}
                >
                  {e.title}
                </li>
              ))}
          </ul>
        </div>
      )}

      <Button
        isDisabled={isDisabled}
        handleButtonClick={handleButtonClick}
        buttonIsActive={buttonIsActive}
      />
    </div>
  );
};

export default Progress;
