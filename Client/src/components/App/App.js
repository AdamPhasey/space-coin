import "./App.css";
import Header from "../Header/index.js";
import Graph from "../Graph/index.js";
import Faq from "../Faqs/index.js";
import Invest from "../Invest/index.js";
import Contact from "../Contact";

import { useState, useEffect } from "react";

function App() {
  const [dummyData, setDummyData] = useState("");
  const [faqData, setFaqData] = useState("");
  //const [status, setStatus] = useState("");



  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/v1/faqData");
      const data = await response.json();
      setFaqData(data);
    }
    fetchData();
    console.log(faqData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {

    async function fetchData() {
      const response = await fetch("/v1/spaceCoinDummyData");
      const data = await response.json();
      setDummyData(data);
      
    }
    
    fetchData()
    const interval = setInterval(() => {
     console.log("Every 1")
    fetchData();
    console.log(dummyData);
    }, 30000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!dummyData || !faqData) {
    return (
      <div>
        <h1>Server Failure {console.log(dummyData)}</h1>
      </div>
    );
  }



  return (
    <div className="body">
      <header>
        <Header className="App-header"></Header>
      </header>

      <div className="flex-container1">
        <Graph info={dummyData} data={faqData}></Graph>
      </div>
      
      <div className="flex-container2">
                <Invest Contact={Contact} buttonText="Submit"></Invest>
                <Faq data={faqData}></Faq>
      </div>
    </div>
  );
}
export default App;
