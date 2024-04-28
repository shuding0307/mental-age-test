import Image from 'next/image';
import mainImage from '/public/generation.png'

export default function StartPage({goNext} : {goNext : () => void}) {

  return (
    <div className="flex flex-col items-center mt-20">
      <div id="container" className="flex flex-col items-center justify-between border-2 border-gray-300 rounded-xl py-8 w-[500px] bg-yellow-50 min-w-96 h-[494px]">
        <h3 className='text-lg'>재미로 하는</h3>
        <h1 className='text-xl'>정신연령 테스트</h1>
        <Image className="w-44 h-44 m-20" src={mainImage} alt="정신연령테스트" priority/>
        <button className="border border-1 border-gray-500 hover:bg-gray-200 shadow rounded px-2 bg-white" onClick={goNext}>시작하기</button>
        </div>
    </div>
  );
}
