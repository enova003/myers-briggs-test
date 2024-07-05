import './App.css';
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

function App() {
  const [clickOnce, setClickOnce] = useState(true);
  const [sliderChange, setSliderChange] = useState([0, 0]);

  const [introvert, setIntrovert] = useState([0, 0]);
  const [extrovert, setExtrovert] = useState([0, 0]);
  const [sensing, setSensing] = useState(0);
  const [inutition, setIntuition] = useState(0);
  const [thinking, setThinking] = useState(0);
  const [feeling, setFeeling] = useState(0);
  const [judging, setJudging] = useState(0);
  const [perceiving, setPerceiving] = useState(0);
  const [turbulent, setTurbulent] = useState(0);
  const [assertive, setAssertive] = useState(0);

  function seePersonality() {
    const sumIntrovert = -(introvert.reduce((acc, curr) => acc + curr, 0));
    const sumExtrovert = extrovert.reduce((acc, curr) => acc + curr, 0);

    setClickOnce(false);

    if(clickOnce){
      alert("introvert " + sumIntrovert);
      alert("extrovert " + sumExtrovert);
    }
  };

  const setIntrovertorExtrovert = (index, value) => {
    let newSliderChange = [...sliderChange];
    newSliderChange[index] = value;
    setSliderChange(newSliderChange);

    if (value > 0) {
      let newExtrovertArr = [...extrovert]
      newExtrovertArr[index] = value;
      setExtrovert(newExtrovertArr);
    } else if (value < 0) {
      let newIntrovertArr = [...introvert]
      newIntrovertArr[index] = value;
      setIntrovert(newIntrovertArr);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Myers Briggs Personality Test
        </p>
      </header>
      <main>
        <div className='openingParagraph'>
          <p>
            Welcome to the free Myers Briggs Personality Test <br /><br /> Discover your personality across these five categories:
            <br /> Introvert vs. Extrovert &#x2219; Sensing vs. Intuition &#x2219; Thinking vs. Feeling &#x2219; Judging vs. Perceiving &#x2219; Turbulent vs. Assertive
            <br /><br /> In this assessment, you will answer a series of questions:  
            <br />
            <br /> <li>Slide the bar right if you agree</li>
            <li>Slide the bar to the left if you disagree</li>
            <li>Keep the bar centered if you prefer to remain neutral</li>
            <br /> Scroll down to get started!<br />
          </p>
          <p>________________________________________________________________________</p>
        </div>

        <p>I regularly make new friends</p>
        <div className="slider">
          <Slider 
            sx={{ width: 400 }}
            min={-100}
            max={100}
            defaultValue={0}
            step={10}
            color="secondary"
            value={sliderChange[0]}
            onChange={(event, value) => setIntrovertorExtrovert(0, value)}
          />
        </div>

        <p>I often say what I am thinking</p>
        <div className="slider">
          <Slider 
            sx={{ width: 400 }}
            min={-100}
            max={100}
            defaultValue={0}
            step={10}
            color="secondary"
            value={sliderChange[1]}
            onChange={(event, value) => setIntrovertorExtrovert(1, value)}
          />
        </div>

        <div>
          <button className="submitButton" onClick={seePersonality}>See my results</button>
        </div>

      </main>
    </div>
  );
}

export default App;
