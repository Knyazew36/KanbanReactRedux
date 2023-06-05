import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../store/store';
import { Link } from 'react-router-dom';

const Task = () => {
  const { id } = useParams();
  const idAsNumber = +id!;

  const data = useSelector((state: RootState) => state.tasks);
  const index = data.findIndex((e) => e.id === idAsNumber);
  const item = data[index];

  return (
    <div className='bg-[#0079BF] min-h-[400px] py-[25px] px-[26px]'>
      <div className=' rounded-[5px] bg-white py-[25px] px-[30px] w-full h-full relative flex flex-col gap-4 '>
        <Link to={'/'} className='absolute right-[25px] top-[30px]'>
          <img src='/close.png' alt='close' />
        </Link>

        <p className='text-lg font-bold'>Title: {item.title}</p>
        <p className=''>
          Description:{' '}
          {item.description ? item.description : 'This task has no description'}
        </p>
      </div>
    </div>
  );
};

export default Task;
