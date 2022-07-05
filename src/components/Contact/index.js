import './index.css'



function Contact ({onSubmit, buttonText, status}) {

return (
<form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{buttonText}</button>
    </form>

    
)

}

export default Contact