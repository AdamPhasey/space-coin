import './index.css';


function Invest ({Contact, buttonText}) {

return (
    <div className='invest-div'>
    <h1 className='invest'>HOW TO INVEST</h1>
    <p>Step 1: Sign Up</p>
    <div>
    <Contact buttonText={buttonText} />

    </div>
      </div>

)
}

export default Invest;