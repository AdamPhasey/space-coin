

function Faq ({data}) {
    return (
        <div className='FAQ-Box'>
        <h2>FAQs</h2>
        <h3>{data[0].question}</h3>
        <p>{data[0].answer}</p>

    </div> 
    )
}

export default Faq;