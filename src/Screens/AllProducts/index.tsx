import { Box, Input, useDisclosure } from '@chakra-ui/react'
import{ useEffect, useState } from 'react';
import UserService from '../../Services/user';
import NoImage from '../../images/not-found.png';
import { SearchIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom';


const AllProducts = () => {
  const [products, setProducts] = useState<any | null>([]);
  const { isOpen: isSellOpen, onOpen: onSellOpen, onClose: onSellClose } = useDisclosure()
  const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()
  const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure()
  const [sellNumber, setSellNumber ] = useState<any | Number>(0);
  const [productID, setProductID] = useState<any | Number>(0);
  const [productName, setProductName] = useState<any | String>('');
  const [productPrice, setProductPrice] = useState<any | Number>(0);
  const [productQtd, setProductQtd] = useState<any | Number>(0);

  useEffect(() => {
    const handleData = async () => {
      const products = await UserService.allProducts();
      setProducts(products.data);
    } 
    handleData();
  },[])

  const handleSell = async (evt: any, id:any) => {
    evt.preventDefault();
    try{
      await UserService.sellProduct(id, { qtd: sellNumber});
      window.location.reload();
    } catch(error){
      console.log(error)
    }
  }

  const handleEdit = async (evt: any, id:any) => {
    evt.preventDefault();
    try{
      await UserService.editProduct(id, { name: productName, price: productPrice, qtd: productQtd});
      window.location.reload();
    }catch(error){
      console.log(error)
    }
  }

  const handleSellOpen = (id: any) => {
    setProductID(id);
    onSellOpen();
  }

  const handleEditOpen = (name: String, price: Number, qtd: Number, id:Number) => {
    setProductName(name);
    setProductPrice(price);
    setProductQtd(qtd);
    setProductID(id);
    onEditOpen();
  }

  const handleDeleteOpen = (id: any) => {
    setProductID(id);
    onDeleteOpen();
  }

  const handleDelete = async (evt: any, id:any) => {
    evt.preventDefault();

    try{
      await UserService.deleteProduct(id);
      window.location.reload();
    } catch(error){
      console.log(error)
    }
  }
  
  return (
    <>
    <header className='flex justify-between items-center bg-blue-500 h-20'>
      <div className='m-20 flex items-center'>
        <Link to='/home'>
          <span className='text-white text-2xl mr-10'>
            <Icon as={AiOutlineHome}></Icon>
          </span>
        </Link>
        <h1 className='text-xl font-bold text-white'>All Products</h1>
      </div>
      <div className='m-20 hidden md:block'>
        <div className='relative border rounded p-1 flex items-center '>
          <input type="text" className='bg-transparent text-white text-lg focus:outline-none border-none placeholder:text-white px-2' placeholder='Search A Product By Name' />
          <div className='mr-1'>
            <button className='cursor-pointer'>
              <SearchIcon color="white"></SearchIcon>
            </button>
          </div>
        </div>
      </div>
    </header>
    <main className='flex gap-5 justify-center'>
      <div className='w-3/5 flex flex-col items-center border rounded p-5 gap-5 mt-10 lg:flex-row lg:w-2/5 lg:justify-center   '>
        {products.map((product: any) => (
            <Box key={product._id} bg='transparent' maxW='sm' p={4} color='black' borderWidth='1px' borderRadius='lg' overflow='hidden'>
              <div>
                <img src={NoImage} alt="" />
              </div>
              <div className='mt-3 flex flex-col gap-2'>
                <h1 className='text-2xl text-black'>{product.name}</h1>
                <h2 className='text-lg'>Price: ${product.price}</h2>
                <h2 className='text-lg'>Quantity: {product.qtd}</h2>
                <Button colorScheme='twitter' variant='outline' onClick={() => handleEditOpen(product.name, product.price, product.qtd, product._id)}>
                  Edit
                </Button>
                <Button colorScheme='red' variant='outline' onClick={() => handleSellOpen(product._id)}>
                  Sell
                </Button>
                <Button colorScheme='red' variant='outline' onClick={() => handleDeleteOpen(product._id)}>
                  Delete
                </Button>
              </div>
            </Box>
          ))}
          <Modal isOpen={isSellOpen} onClose={onSellClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>How Many You Will Sell?</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Input value={sellNumber} onChange={e => setSellNumber(e.target.value)} type="number"></Input>
                  </ModalBody>
                  <ModalFooter>
                      <form onSubmit={(event) => handleSell(event, productID)}>
                        <Button colorScheme='red' mr={3} onClick={onSellClose} variant='outline' type='submit'>
                          Sell
                        </Button>
                      </form>
                    <Button colorScheme='teal' mr={3} onClick={onSellClose} variant='outline'>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

             
              <Modal isOpen={isEditOpen} onClose={onEditClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>What do you want to Edit?</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <form action="" className='flex flex-col gap-2'>
                      <h1>Name</h1>
                      <Input value={productName} onChange={e => setProductName(e.target.value)} placeholder={productName}></Input>
                      <h1>Price</h1>
                      <Input value={productPrice} onChange={e => setProductPrice(e.target.value)} placeholder={productPrice}></Input>
                      <h1>Quatity</h1>
                      <Input value={productQtd} onChange={e => setProductQtd(e.target.value)} placeholder={productQtd}></Input>
                    </form>
                  </ModalBody>
                  <ModalFooter>
                      <form onSubmit={(event) => handleEdit(event, productID)}>
                        <Button colorScheme='red' mr={3} onClick={onEditClose} variant='outline' type='submit'>
                          Edit
                        </Button>
                      </form>
                    <Button colorScheme='teal' mr={3} onClick={onEditClose} variant='outline'>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

              <Modal isOpen={isDeleteOpen} onClose={onDeleteClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>What do you want to Edit?</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <h1>Are you sure to delete this product?</h1>
                  </ModalBody>
                  <ModalFooter>
                      <form onSubmit={(event) => handleDelete(event, productID)}>
                        <Button colorScheme='red' mr={3} onClick={onDeleteClose} variant='outline' type='submit'>
                          Yes
                        </Button>
                      </form>
                    <Button colorScheme='teal' mr={3} onClick={onDeleteClose} variant='outline'>
                      No
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
      </div>
      
    </main>
    </>
  );
}

export default AllProducts;