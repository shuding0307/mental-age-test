import useStore from "../../store";

export default function InputInfoPage({goNext} : {goNext : () => void}) {
  const setUserName = useStore((state) => state.setUserName);
  const setResultAge = useStore((state) => state.setResultAge);

  return (
    <div className='flex justify-center sm:w-full sm:h-screen'>
      <div id="container" className="flex flex-col items-center justify-between border-2 border-gray-300 rounded-xl py-8 w-[500px] bg-yellow-50 h-[494px] mt-20 sm:mt-36 sm:w-72 sm:h-3/5">
      <h2 className='text-xl'>정신연령 테스트</h2>
        <form className="flex flex-col items-center gap-3">
          <input className="bg-white text-blue-gray-700 border focus:border-1 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 sm:w-1/2"
                type="text" 
                id="name"
                placeholder="이름"
                onChange={(e) => setUserName(e.target.value)}>
          </input>
          <input className="bg-white text-blue-gray-700 border focus:border-1 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 sm:w-1/2"
                type="number" 
                id="age"
                placeholder="나이"
                onChange={(e) => {
                  const age = parseFloat(e.target.value);
                  setResultAge(age);
                }}>
          </input>
          
        </form>

        <button onClick={goNext}>시작하기</button>
      </div>
    </div>
  )
};
  