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
   
    
      <div style ={{display:"flex", width: "100rem", height: "100rem"}} >
        <McZoom/>
      </div>
    </>
  )
}

export default App
