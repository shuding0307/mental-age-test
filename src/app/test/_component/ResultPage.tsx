import useStore from "../store"

export default function ResultPage() {
  const resultAge = useStore((state) => state.resultAge);

    return (
      <div>
        {resultAge}
      </div>

    )
  };