"use client";

import useFunnel from "../hooks/useFunnel";
import InputInfoPage from "./_component/InputInfoPage";
import TestPage from "./_component/TestPage";
import ResultPage from "./_component/ResultPage";
import StartPage from "./_component/StartPage";
import GoResultPage from "./_component/ResultPage";

const pages : string[] = [
  "시작하기",
  "정보입력",
  "테스트",
  "결과",
];

export default function QuestionPage() {
  const [Funnel, Step, setStep] = useFunnel(pages[0]);

  return (
    <Funnel>
      <Step name="시작하기">
        <StartPage goNext={() => setStep("정보입력")}/>
      </Step>
      <Step name="정보입력">
        <InputInfoPage goNext={() => setStep("테스트")} />
      </Step>
      <Step name="테스트">
        <TestPage goResult={() => setStep("결과")} />
      </Step>
      <Step name="결과">
        <ResultPage />
      </Step>
    </Funnel>
  );
};