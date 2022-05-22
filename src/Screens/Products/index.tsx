import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <div className='border p-8 flex flex-col gap-5 w-96'>
        <h1 className='font-bold text-xl text-center'>Products Section</h1>
        <Link to='/addproduct'><Button colorScheme='twitter' variant='outline' className='w-full'>Add A Product</Button></Link>
        <Link to='/allproducts'><Button colorScheme='twitter' variant='outline' className='w-full'>See All Products</Button></Link>
        <Link to='/home'><Button colorScheme='twitter' variant='outline' className="w-full">Back To Home</Button></Link>
      </div>
    </div>
  );
}

export default Products