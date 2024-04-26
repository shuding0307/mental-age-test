
import useStore from "../store";

export default function InputInfoPage({goNext} : {goNext : () => void}) {
  const userName = useStore((state) => state.userName);
  const setUserName = useStore((state) => state.setUserName);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>정신연령 테스트</h1>
        <form className="flex flex-col">
          
          <label className="font-normal truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent "
                htmlFor="name">이름</label>
          <input className="bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                type="text" 
                id="name"
                placeholder="이름을 작성해주세요.">
          </input>
          
          <label className="font-normal truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent " 
                htmlFor="age">나이</label>
          <input className="bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                type="number" 
                id="age"
                placeholder="현재 나이를 알려주세요.">
          </input>
          
        </form>

        <button onClick={goNext}>시작하기</button>
    </div>
  )
};
  