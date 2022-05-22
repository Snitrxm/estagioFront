import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Home = () => {
  const user: any = JSON.parse(localStorage.getItem('user') || "");

  const handleLogOut = () => {
    localStorage.removeItem('user');
    window.location.reload();
  }


  return (
    <main className="h-screen w-full flex justify-center items-center ">
      <div className="border rounded p-5 w-96 h-auto">
        <div>
        <h1 className="text-xl text-center">Hello, <span className="font-bold">{user.user.name}</span><br/> what you want see today?</h1>
        </div>
        <div className='flex flex-col gap-4 mt-10'>
          <Link to='/products'><Button colorScheme='twitter' variant='outline' className='w-full'>Products</Button></Link>
          <Link to='/logout'><Button colorScheme='red' variant='outline' className='w-full' onClick={handleLogOut}>LogOut</Button></Link>
        </div>
      </div>
    </main>
  );
}

export default Home;