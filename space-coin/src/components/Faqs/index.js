import "./index.css";

function Faq({ data }) {
  return (
    <div className="FAQ-Box">
      <h2>FAQs</h2>

      {data.map((item, id, id2) => (
        <div key={id}>
          <h3 className="faq-question">{data[id].question}</h3>
          <p className="faq-answer">{data[id].answer}</p>
        </div>
      ))}
    </div>
  );
}

export default Faq;

/*
<h3 className='faq-question'>{data[0].question}</h3>
        <p className='faq-answer'>{data[0].answer}</p>
        <h3 className='faq-question'>{data[1].question}</h3>
        <p className='faq-answer'>{data[1].answer}</p>
        <h3 className='faq-question'>{data[1].question}</h3>
        <p className='faq-answer'>{data[1].answer}</p>
        */
