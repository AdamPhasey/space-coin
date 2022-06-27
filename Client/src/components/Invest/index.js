import './index.css';


function Invest ({Contact, buttonText, onSubmit}) {

return (
    <div className='invest-div'>
    <h1 className='invest'>HOW TO INVEST</h1>
    <p>Step 1: Sign Up</p>
    <div>
    <Contact onSubmit={onSubmit} buttonText={buttonText} />

    </div>
      </div>

)
}

export default Invest;