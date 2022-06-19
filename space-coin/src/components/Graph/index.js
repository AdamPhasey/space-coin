import './index.css';


function Graph ({info}) {

    return (
        <div className='flex-container1'>
        

        <div className='Data-Box'>
          <h2 >Analytics</h2>
          <ul className='p1'>
             {info.map((item, id) => ( <li key={id}>Month: {info[id].Month} <br/>
                                    Value: {info[id].Value}<br/></li>))}
          </ul>
         
        </div>

        </div>
    )
}

export default Graph;


/*<li className='p1'>Month: {info[0].Month} <br/>
                 Value: {info[0].Value}</li>
            <br/>
             <li className='p1'>Month: {info[1].Month} <br/>
                 Value: {info[1].Value}</li>
            <br />
            <li className='p1'>Month: {info[2].Month}
            <br/> Value: {info[2].Value}</li>*/