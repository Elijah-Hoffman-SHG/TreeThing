import React, { useRef } from "react";
import swag from './swag.png';
import AccomplishmentsRings from "./Accom";
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";
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
{year: 'Nothin'},
{ year: 'Nothin'},
{ year: 'Nothin'},
{ year: 'Nothin'},
{ year: 'Nothin'},
{year: 'Nothin'},
 { year: 'Nothin'},
 { year: 'Nothin'},
 {year: 'Nothin'},

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
const Controls = ({ zoomIn, zoomOut, resetTransform }) => (
  <>
    <button onClick={() => zoomIn()}>+</button>
    <button onClick={() => zoomOut()}>-</button>
    <button onClick={() => resetTransform()}>x</button>
  </>
);

export const McZoom = () => {
  const transformComponentRef = useRef()

  const zoomToImage = () => {
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement("imgExample");
    }
  };

  return (
    <TransformWrapper
      initialScale={5}
      ref={transformComponentRef}
      initialPositionX={200}
      initialPositionY={100}
    >
      {(utils) => (
        <React.Fragment>
          <Controls {...utils} />
          <TransformComponent>
          <AccomplishmentsRings accomplishments={accomplishments} id="imgExample"/>
          <AccomplishmentsRings accomplishments={curry_after} />
          </TransformComponent>
        </React.Fragment>
      )}
    </TransformWrapper>
  );
};