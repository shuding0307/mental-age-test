import Image from 'next/image';
import mainImage from '/public/generation.png'

export default function StartPage({goNext} : {goNext : () => void}) {

  return (
    <div className='flex justify-center sm:w-full sm:h-screen'>
      <div id="container" className="flex flex-col items-center justify-between border-2 border-gray-300 rounded-xl py-8 bg-yellow-50 w-[500px] h-[494px] mt-20 sm:mt-36 sm:w-72 sm:h-3/5">
        <h3 className='text-lg'>재미로 하는</h3>
        <h1 className='text-xl'>정신연령 테스트</h1>
        <Image className="w-44 h-44 m-20 sm:m-10" src={mainImage} alt="정신연령테스트" priority/>
        <button className="border border-1 border-gray-500 hover:bg-gray-200 shadow rounded px-2 bg-white" onClick={goNext}>시작하기</button>
        </div>
      </div>
  );
}
