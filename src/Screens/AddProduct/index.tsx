import {
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import UserService from '../../Services/user';



const AddProduct = () => {
  const [name, setName] = useState('');
  const [qtd, setQtd] = useState<any | Number>(null);
  const [price, setPrice] = useState<any | Number>(null);
  const [redirectToProducts, setRedirectToProducts] = useState(false);

  const handleSubmit = async (evt: any) => {
    evt.preventDefault();
    
    try{
      await UserService.createProduct({name: name, qtd: qtd, price: price});
      setRedirectToProducts(true)
    } catch(error){
      console.log(error)
    }
  }

  if(redirectToProducts){
    return <Navigate to='/products'/>
  }

  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='border rounded p-5'>
        <FormControl>
          <h1 className='text-xl font-bold text-center'>Add Product</h1>
          <FormLabel htmlFor='name' className='mt-2'>Name</FormLabel>
          <Input id='name' type='text' placeholder="T-Shirt" value={name} onChange={e => setName(e.target.value)}/>
          <FormLabel htmlFor='qtd'>Quantity</FormLabel>
          <Input id='qtd' type='number' placeholder="12" value={qtd} onChange={e => setQtd(e.target.value)}></Input>
          <FormLabel htmlFor='price'>Price</FormLabel>
          <Input id='price' type='number' placeholder="$22.99" value={price} onChange={e => setPrice(e.target.value)}></Input>
          <Button colorScheme='messenger' variant='outline' className='w-full mt-5' type="submit">Add Product</Button>
          <Link to='/products'><Button colorScheme='red' variant='outline' className='w-full mt-5' >Cancel</Button></Link>
        </FormControl>
      </form>
    </div>
  );
}

export default AddProduct;