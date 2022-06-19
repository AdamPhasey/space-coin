import './App.css';
import Header from '../Header/index.js'
import Graph from '../Graph/index.js'
import {useState, useEffect} from 'react'

function App() {

const [dummyData, setDummyData] = useState()

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
    <div className="App">

      <Header className="App-header">
      </Header>
      <Graph data={dummyData}></Graph>
    </div>
  );
}
export default App;
