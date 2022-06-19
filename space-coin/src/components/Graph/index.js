import './index.css'


function Graph ({info}) {

    return (
        <div className='flex-container1'>

        <div className='Data-Box'>
          <h2 >Analytics</h2>
          <ol className='p1'>
             <li className='p1'>Month: {info[0].Month} <br/>
                 Value: {info[0].Value}</li>
            <br/>
             <li classsName='p1'>Month: {info[1].Month} <br/>
                 Value: {info[1].Value}</li>
          </ol>
         
        </div>

        </div>
    )
}

export default Graph;