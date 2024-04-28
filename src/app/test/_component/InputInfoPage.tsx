
import useStore from "../../store";

export default function InputInfoPage({goNext} : {goNext : () => void}) {
  const setUserName = useStore((state) => state.setUserName);
  const setUserAge = useStore((state) => state.setUserAge);
  const setResultAge = useStore((state) => state.setResultAge);

  return (
    <div className="flex flex-col items-center mt-20">
      <div id="container" className="flex flex-col items-center justify-between border-2 border-gray-300 rounded-xl py-8 w-7/12 bg-yellow-50 min-w-96 h-[494px]">
      <h2 className='text-xl'>정신연령 테스트</h2>
        <form className="flex flex-col gap-3">
          <input className="bg-white-50 text-blue-gray-700 border focus:border-1 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 "
                type="text" 
                id="name"
                placeholder="이름"
                onChange={(e) => setUserName(e.target.value)}>
          </input>
          <input className="bg-white-50 text-blue-gray-700 border focus:border-1 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 "
                type="number" 
                id="age"
                placeholder="나이"
                onChange={(e) => {
                  const age = parseFloat(e.target.value);
                  setUserAge(age);
                  setResultAge(age);
                }}>
          </input>
          
        </form>

        <button onClick={goNext}>시작하기</button>
      </div>
    </div>
  )
};
  