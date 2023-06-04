import useCategory from '../../hooks/useCategory';

const Footer = () => {
  const data = useCategory('finished');
  return (
    <footer className='flex justify-between w-full px-5 py-[8px] items-center bg-[#0067A3] shadow-md'>
      <div className='flex gap-[36px]'>
        <p className='text-[18px] text-white'>Active tasks: </p>
        <p className='text-[18px] text-white'>Finished tasks: {data.length} </p>
      </div>
      <div>
        <p className='text-[18px] text-white'>Kanban board by </p>
      </div>
    </footer>
  );
};

export default Footer;
