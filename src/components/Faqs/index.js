import "./index.css";
import "rc-collapse/assets/index.css";
import Collapse, { Panel } from "rc-collapse";


function Faq({ data }) {
  return (
    <div className="FAQ-Box">
      <h2>FAQs</h2>

      {data.map((item, id, id2) => (
        <div key={id}>
          <Collapse className="collapse-faq">
            <Panel header={data[id].question} headerClass="my-header-class">
              {data[id].answer}
            </Panel>
          </Collapse>
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
