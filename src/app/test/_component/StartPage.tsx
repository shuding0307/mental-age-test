
export default function StartPage({goNext} : {goNext : () => void}) {

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>정신연령 테스트</h1>
      <button onClick={goNext}>시작하기</button>
    </div>
  );
}
