export default function Option({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => {
        return (
          <button
            onClick={() => dispatch({ type: 'newAnswer', payload: index })}
            key={option}
            className={`btn btn-option ${index === answer ? 'answer' : ''} ${
              hasAnswered
                ? index === question.correctOption
                  ? 'correct'
                  : 'wrong'
                : ''
            }`}
            disabled={hasAnswered}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
