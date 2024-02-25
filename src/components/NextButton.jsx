export default function NextButton({ dispatch, answer }) {
  if (answer !== null) return null;
  return (
    <button
      onClick={() => dispatch({ type: 'nextQuestion' })}
      className="btn btn-ui"
    >
      Next
    </button>
  );
}
