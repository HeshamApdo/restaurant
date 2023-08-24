import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="bg-black w-screen h-screen">
      <div className='flex flex-col gap-10 lg:flex-row sm:gap-20 md:gap-10 justify-center items-center text-center'>
        <div className='w-[400px] p-2 h-[200px] md:w-[500px] sm:w-[400px] sm:h-[200px] md:h-[250px] lg:w-[700px] lg:h-[650px] xl:w-[800px] xl:h-[700px] flex justify-center items-center mt-[100px] sm:mt-[60px] xl:mt-0'>
          <img src='/homPage3.png' className='object-contain'/>
        </div>
        <div className='flex flex-col  gap-3 justify-center items-center text-center p-3'>
          <div>
            <h2 className='text-3xl md:text-5xl font-semibold text-yellow-100'>
              Welcome To <span className='text-4xl md:text-6xl font-bold text-yellow-400'>𝖡𝖮𝖱𝖠𝖦Ó</span>
            </h2>
          </div>
          <div>
            <p className='text-yellow-100 opacity-60 text-md md:text-xl p-1 w-[300px] md:w-[600px] lg:w-[500px]'>Rodolfo Guzmán toured restaurants across Europe and Chile, learning new techniques and experimenting with flavours, before settling in Santiago to found Boragó in 2006. Since then, the restaurant has become a haven for Guzmán’s learning and discovery of native Chilean produce.</p>
          </div>
          <Link href="/products/pizza" className='mt-5'>
            <div className='w-fit px-3 py-4 bg-yellow-200 rounded cursor-pointer hover:bg-yellow-400 font-bold transition-all duration-100'>
              <div className='flex flex-row gap-1'>
                  <h3>
                    Explore
                  </h3>
                  <img src='/explore.png' />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}



{/* <div className='mt-[100px] md:mt-auto'>
<img src='/homePage2.jpg' className='w-screen md:w-[1000px] md:h-screen rounded'/>
</div> */}