import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';



// Keyframes for circling animation
const circleAnimation = keyframes`
  0% {
    transform: rotate(0deg) translateX(0px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(0px) rotate(-360deg);
  }
`;

// Keyframes for growing animation
const growAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(3.5);
  }
`;

// Styled component for the ring
const Ring = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  border: 10px solid ${props => props.color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  animation: ${circleAnimation} 10s linear infinite
`;

// Text on the ring
const RingText = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-70%);
  transform-origin: center bottom;
  z-index: 1;
  font-size: 12px;
  text-align: center;
  pointer-events: none; /* Prevent text from blocking mouse events on the ring */
`;

// Container for the rings
const RingContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Function to generate a random color
const getRandomColor = (field) => {
  const map = new Map([
    ["ROY", "purple"],
    ["AS MVP", "#000"],
    ["CHAMP", "red"],
    ["AS", "gold"],
    ["ALL NBA 3rd", "#CD7F32"],
    ["ALL NBA 2nd", "#C0C0C0"],
    ["ALL NBA 1st", "#FFD700"]
  ])
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(field)
  return map.get(field);
};

const AccomplishmentsRings = ({ accomplishments }) => {
  const radius = 150; // Radius of the circle pattern
  let size = 50
  return (
    <RingContainer>
      {accomplishments.map((item, index) => {
        size+=50
        const angle = (index / accomplishments.length) * 2 * Math.PI; // Angle for each ring
        const x = radius * Math.cos(angle); // X position based on angle
        const y = radius * Math.sin(angle); // Y position based on angle
        const textAngle = (index / accomplishments.length) * 360; // Angle for text rotation

        return (
          <Ring
            key={index}
            color={getRandomColor(item.year)}
            size={`${size}px`}
            style={{ transform: `translate(${x}px, ${y}px)`, display:'flex', textAlign:'center', justifyContent:'center', alignItems:'center' }}
          >
            <RingText>{item.year}</RingText>
          </Ring>
        );
      })}
    </RingContainer>
  );
};

export default AccomplishmentsRings;

// Example usage
// import AccomplishmentsRings from './AccomplishmentsRings';

// const accomplishments = [
//   { year: '2011 - NBA Rookie of the Year' },
//   { year: '2014 - NBA All-Star Game MVP' },
//   { year: '2016 - NBA Champion' },
//   { year: '2021 - 50–40–90 club' },
// ];

// <AccomplishmentsRings accomplishments={accomplishments} />
