import React from 'react'
import "./App.css";
import ClockHeading from './components/ClockHeading';
import ClockSlogn from './components/ClockSlogn';
import CurrentTime from './components/CurrentTime';
export default function App() {
  return (
    <div>
      <ClockHeading/>
      <ClockSlogn/>
      <CurrentTime/>
    </div>
  )
}
