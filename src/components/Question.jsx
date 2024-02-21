import Option from './Option';

export default function Question({ question }) {
  console.log(question);

  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        <Option question={question} />
      </div>
    </div>
  );
}
