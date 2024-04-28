import useStore from "../../store"
import dynamic from "next/dynamic";

const KakaoShareButton = dynamic(import("@/Components/KakaoShare"));


export default function ResultPage() {
  const userName = useStore((state) => state.userName);
  const resultAge = useStore((state) => state.resultAge);

  const shareDescription = '당신의 정신연령은 몇살일까요? 정신연령 테스트로 확인해보세요!';

    return (
      <div className='flex justify-center sm:w-full sm:h-screen'>
        <div id="container" className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-xl py-8 bg-yellow-50 w-[500px] h-[494px] mt-20 sm:mt-36 sm:w-72 sm:h-3/5">
          <p className="text-center text-3xl sm:text-lg rounded-lg bg-white p-3 mb-20">"{userName}"님의 정신연령은 <br/><span className="text-blue-600 text-5xl sm:text-3xl">{resultAge}살</span> 입니다.</p>
          <KakaoShareButton description={shareDescription} />
        </div>
        </div>

    )
  };