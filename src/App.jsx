import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AccomplishmentsRings from './Accom';
import { McZoom } from './Swag';

const accomplishments = [
  {year: 'ROY'},
  { year: 'AS'},
  { year: 'AS'},
  { year: 'AS MVP'},
  { year: 'AS'},
  {year: "ALL NBA 3rd"},
   { year: 'AS'},
   { year: 'CHAMP'},
   {year: 'AS'},

  
 ];
 const kyrie_after = [
  { year: 'AS'},
  { year: 'AS'},
  { year: 'AS'},
  { year: 'AS'},
  { year: 'AS'},
  { year: 'AS'}
 ]
const curry_before = [

]
const curry_after = [
{year: "Nothin"},
{ year: 'AS'},
{year: "ALL NBA 2nd"},

{ year: 'AS'},
{year: "ALL NBA 1st"},
{year: "MVP"},
{year: "CHAMP"},


{ year: 'AS'},
{year: "ALL NBA 1st"},
{year: "MVP"},

{ year: 'AS'},
{year: "ALL NBA 2nd"},
{year: "CHAMP"},

{ year: 'AS'},
{year: "ALL NBA 3rd"},
{year: "CHAMP"},

{ year: 'AS'},
{year: "ALL NBA 2nd"},

{ year: 'AS'},
{year: "ALL NBA 3rd"},

{ year: 'AS'},
{year: "ALL NBA 1st"},

{ year: 'AS'}



]


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div style ={{display:"flex"}} >
        <McZoom/>
      <AccomplishmentsRings accomplishments={accomplishments} />
      <AccomplishmentsRings accomplishments={curry_after} />
      </div>
    </>
  )
}

export default App
