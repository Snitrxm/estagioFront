import { useState } from 'react'
import UserService from '../../Services/user'
import { Navigate } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import './index.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleSubmit = async (evt: any) => {
    evt.preventDefault();

    try{
      await UserService.login({email: email, password: password});
      setRedirectToHome(true);
    } catch(error){
      console.log(error);
    }
  }

  if(redirectToHome){
    return <Navigate to='/home'/>
  }

  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <div className='flex flex-col justify-center items-center w-4/5 xl:w-80'>
        <form onSubmit={handleSubmit}>
          <FormControl className=' w-4/5 md:w-80 border p-5 rounded-xl'>
            <FormLabel htmlFor='email' className='mt-2'>Email address</FormLabel>
            <Input id='email' type='email' value={email} onChange={e => setEmail(e.target.value)} />
            <FormLabel htmlFor='password' className='mt-2'>Password</FormLabel>
            <Input id='password' type='text' value={password} onChange={e => setPassword(e.target.value)} ></Input>
            <FormHelperText>We'll never share your passowrd.</FormHelperText>
            <div className='flex justify-between mt-7'>
              <Button colorScheme='teal' variant='outline' type='submit'>
                Login
              </Button>
              <a href="/">
                <Button colorScheme='red' variant='outline'>
                  Cancel
                </Button>
              </a>
            </div>
          </FormControl>
        </form>
      </div>
    </div>
  );
}

export default Login;