import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import RouteApp from './route/Routes';

function App() {
  return (
    <div className='wrapper h-screen flex flex-col justify-between bg-[#0079BF]'>
      <Header />
      <RouteApp />
      <Footer />
    </div>
  );
}

export default App;
