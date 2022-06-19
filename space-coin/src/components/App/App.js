import './App.css';
import Header from '../Header/index.js'
import Graph from '../Graph/index.js'
import Faq from '../Faqs/index.js'

import {useState, useEffect} from 'react'

function App() {

const [dummyData, setDummyData] = useState('')
const [faqData, setFaqData] = useState('')

useEffect(() => {
  async function fetchData () {
    const response = await fetch("/v1/faqData")
    const data = await response.json()
    setFaqData(data);
  } fetchData();
  console.log(faqData)
}, [])

useEffect(() => {  
    async function fetchData () {
    const response = await fetch("/v1/spaceCoinDummyData")
    const data = await response.json()
    setDummyData(data);
    } fetchData()
    console.log(dummyData)
  }, []);
      

  if(!dummyData){
return <div><h1>Server Failure {console.log(dummyData)}</h1></div>
}


  return (



 <div className='body'>
    <header>
       <Header className="App-header">
      </Header>
    </header>,

      <div className='flex-container1'>
      <Graph info={dummyData} data={faqData}></Graph>
      <Faq data={faqData}></Faq>
      </div>

 </div>    

 
  );
}
export default App;
