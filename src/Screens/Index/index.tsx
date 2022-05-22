import { Button } from '@chakra-ui/react'
import Logo from '../../images/logo-frexco-slogan.png'
import Img from '../../images/ilustracao-demo-2.png'

const Index = () => {
  return (
    <>
      <header className='flex justify-between items-center h-20 '>
        <div className='m-20'>
          <a href=""><img src={Logo} alt="" className='w-48' /></a>
        </div>
        <div className='m-20 flex gap-5'>
          <a href="/register"><Button variant="outline" colorScheme="twitter">Sign Up</Button></a>
          <a href="/login"><Button variant="outline" colorScheme="twitter">Sign In</Button></a>
        </div>
      </header>
      <main className='flex flex-col items-center mt-20'>
        <div>
          <h1 className='font-bold text-6xl'>Direto do campo para</h1>
          <p className='text-center mt-1 text-4xl'>Sua casa.</p>
        </div>
        <div>
          <h2 className='mt-10 text-xl'>Frutas, verduras e legumes direto do campo para você.</h2>
        </div>
        <div className='flex gap-16 mt-10'>
         <button className='bg-[#88BC23] text-white rounded-2xl p-3 text-xl transition-colors hover:bg-[#90cc18]'>Loja para o seu restaurante</button>
         <button className='bg-[#88BC23] text-white rounded-2xl p-3 text-xl transition-colors hover:bg-[#90cc18]'>Loja para o seu restaurante</button>
        </div>
        <div className='mt-20 flex flex-col items-center'>
          <div className='flex flex-col items-center'>
            <h1 className='text-5xl font-bold'>Como funciona?</h1>
            <h2 className='text-xl mt-2'>Tudo o que você precisa saber para fazer seu pedido com a gente.</h2>
          </div>
          <div className='flex gap-60 mt-16'>
            <div className='flex gap-10'>
              <div className='flex flex-col gap-20'>
                <h1 className='text-[#88BC23] text-8xl font-bold'>1</h1>
                <h1 className='text-[#88BC23] text-8xl font-bold'>2</h1>
                <h1 className='text-[#88BC23] text-8xl font-bold'>3</h1>
              </div>
              <div className='w-60 flex flex-col gap-24'>
                <div>
                  <h1 className='text-3xl font-bold'>Você acessa</h1>
                  <h2>Acesse nosso site ou aplicativo para fazer seu cadastro.</h2>
                </div>
                <div>
                  <h1 className='text-3xl font-bold'>Você escolhe</h1>
                  <h2>Escolha frutas, verduras e legumes e finalize sua compra.</h2>
                </div>
                <div>
                  <h1 className='text-3xl font-bold'>Nós entregamos</h1>
                  <h2>Receba os produtos na sua porta.</h2>
                </div>
              </div>
            </div>
            <div>
              <img src={Img} alt="" className='w-96' />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Index;