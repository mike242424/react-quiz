export default function Progress({
  index,
  numQuestions,
  points,
  totalPointsPossible,
  answer,
}) {
  // console.log(totalPointsPossible);
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {totalPointsPossible} Points
      </p>
    </header>
  );
}
