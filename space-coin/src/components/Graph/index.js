import "./index.css";
import {ResponsiveContainer,  Area, AreaChart, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';



function Graph({ info }) {
  


const result = info.map(item => ({ Month: item.Month, Value: item.Value }));
console.log(result)


  return (
    <div className="flex-container1">
      <div className="Data-Box">
        <h2>Analytics</h2>
        <div>
  <AreaChart width={1200} height={350} data={result}>

  <defs>
    <linearGradient id="color" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4}></stop>
      <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05}></stop>

    </linearGradient>
  </defs>
        <Area dataKey="Value" stroke="#2451B7" fill="url(#color)"></Area>

        <XAxis dataKey="Month" axisLine={true} tickLine={false} />

        <YAxis dataKey="Value" axisLine={true} tickLine={false} tickCount={8} tickFormatter={number => `£${number.toFixed(0)}m`}/>

        <Tooltip/>

        <CartesianGrid opacity={0.1} vertical={false}/>

        </AreaChart>

          </div>        

      </div>
    </div>
  );
}

export default Graph;

/*
<ul className="p1">
          {info.map((item, id) => (
            <li key={id}>
              Month: {info[id].Month} <br />
              Value: {info[id].Value}
              <br />
            </li>
          ))}
        </ul>

*/
/*
           <LineChart width={1200} height={450} data={result} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="Value" stroke="#000" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="Month" />
    <YAxis />
    <Tooltip />
  </LineChart>

/*<li className='p1'>Month: {info[0].Month} <br/>
                 Value: {info[0].Value}</li>
            <br/>
             <li className='p1'>Month: {info[1].Month} <br/>
                 Value: {info[1].Value}</li>
            <br />
            <li className='p1'>Month: {info[2].Month}
            <br/> Value: {info[2].Value}</li>*/
