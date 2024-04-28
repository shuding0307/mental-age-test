import Link from "next/link";
import useStore from "../../store"

export default function ResultPage() {
  const userName = useStore((state) => state.userName);
  const resultAge = useStore((state) => state.resultAge);

    return (
      <div className="flex flex-col items-center mt-20">
        <div id="container" className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-xl py-8 w-7/12 bg-yellow-50 min-w-96 h-[494px]">
          <button className="hover:bg-gray-200 hover:text-rose-400 shadow rounded px-2 bg-white text-lg">결과보기</button>
        </div>
      </div>

    )
  };