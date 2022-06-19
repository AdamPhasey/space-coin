import './index.css'
function Graph ({data}) {

    return (
        <div className='flex-container1'>

        <div>
          <p className='p1'>{data[0].Value}</p> 
        </div>

        <div>
            <h2 className='FAQ'>FAQs</h2>
        </div> 

        </div>
    )
}

export default Graph;