const Header = () => {
  return (
    <header className='flex justify-between w-full px-5 py-[8px] items-center bg-[#0067A3] shadow-md'>
      <h1 className=' text-lg text-white '>Awesome Kanban Board</h1>
      <div className='flex items-center'>
        <img src='/user-avatar.svg' alt='avatar' />
        <img src='/arrow-down.svg' alt='arrow' />
      </div>
    </header>
  );
};

export default Header;
