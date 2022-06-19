import './index.css'
function Graph ({data}) {

    return (
        <div className='flex-container1'>

        <div className='Data-Box'>
          <h2 >Analytics</h2>
          <ol className='p1'>
             <li className='p1'>Month: {data[0].Month}.  
                 Value: {data[0].Value}</li>
             <li classsName='p1'>Month: {data[1].Month}.  
                 Value: {data[1].Value}</li>
          </ol>
         
          <p className='p1'>{data[0].Value}</p> 
        </div>

        <div className='FAQ-Box'>
            <h2>FAQs</h2>
            <p className='p1'>meow</p>
        </div> 

        </div>
    )
}

export default Graph;