import React, { useState, useEffect } from "react";
import { questions } from "../data/data";
import useStore from "../store";

export default function TestPage({goResult}: {goResult : () => void}) {
  const [ question, setQuestion ] = useState<string>('');
  const [ index, setIndex ] = useState<number>(0);

  const endpoint = questions.length;

  const age = useStore((state) => state.age);
  const setAge = useStore((state) => state.setAge);
  const resultAge = useStore((state) => state.resultAge);
  const setResultAge = useStore((state) => state.setResultAge);

  useEffect(() => {
    setQuestion(questions[index].q);
  }, [index]);

  const handleNo = () : void => {
    setAge(questions[index].value.no);
  };

  const handleYes = () : void => {
    setAge(questions[index].value.yes);
  };

  const handleNextQ = () : void => {
    setIndex(index+1);
    setResultAge(resultAge + age);
    setAge(0);
  }

  const handleLastQ = () : void => {
    setResultAge(resultAge + age);
    ( resultAge < 13 ) && setResultAge(13);
    ( resultAge > 55 ) && setResultAge(53);
    goResult();
  }
  
    return (
      <div className="flex flex-col items-center mt-20">
        <h2>Mental Age Test</h2>
        {age} {resultAge}
          <div id="container" className="flex flex-col items-center justify-between border-2 border-gray-300 rounded-xl py-8 w-7/12 bg-yellow-50 min-w-96">

            <div id="progressBar" className="border rounded-md min-w-80 h-3 bg-gray-200">
              <div id="progressBar" className="bg-rose-300 rounded-md max-w-96 h-3" style={{width: ((100/endpoint)*(index+1)) + '%'}}/>
            </div>

            <div id="qBox" className="my-20 px-8 min-h-14">
              {question}
            </div>

            <div id="answer" className="mt-10 mb-10">
              <button className="my-4 mx-7 hover:bg-red-50 focus:bg-red-200 py-2 px-4 border border-gray-400 rounded shadow"
              onClick={handleNo}>아니다</button>
              <button className="my-4 mx-7 hover:bg-blue-50 focus:bg-blue-200 py-2 px-4 border border-gray-400 rounded shadow"
              onClick={handleYes}>그렇다</button>
            </div>
            <div id="nextBtn" className="mb-5">
            <button onClick={age !== 0 ? (index === endpoint-1 ? handleLastQ : handleNextQ) : () => {}}
                    className={age !== 0 ? "hover:bg-gray-200 shadow rounded px-2 bg-zinc-50" 
                                          : "text-red-600"}>
              {age !== 0 ? "다음으로" : "선택해주세요"}
              </button>
            </div>
          </div>
      </div>

    )
  };