export default function FinishedScreen({
  points,
  totalPointsPossible,
  highscore,
  dispatch,
}) {
  const scorePercentage = (points / totalPointsPossible) * 100;

  let emoji;

  if (scorePercentage > 90 && scorePercentage <= 100) emoji = '🥇';
  if (scorePercentage > 80 && scorePercentage <= 90) emoji = '🥈';
  if (scorePercentage > 70 && scorePercentage <= 80) emoji = '🥉';
  if (scorePercentage > 60 && scorePercentage <= 70) emoji = '👍🏻';
  if (scorePercentage >= 0 && scorePercentage <= 60) emoji = '👎🏻';

  // console.log(emoji);
  // console.log(scorePercentage);

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {totalPointsPossible} (
        {Math.ceil(scorePercentage)}%) {'  '}
        <span>{emoji}</span>
      </p>
      <p className="highscore">Highscore: {highscore} Points</p>
      <button
        onClick={() => dispatch({ type: 'restart' })}
        className="btn btn-ui"
      >
        Restart Quiz
      </button>
    </>
  );
}
