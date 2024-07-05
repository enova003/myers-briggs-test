import './App.css';
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

function App() {
  const [clickOnce, setClickOnce] = useState(true);
  const [sliderChange, setSliderChange] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const [introvert, setIntrovert] = useState([0, 0, 0, 0]);
  const [extrovert, setExtrovert] = useState([0, 0, 0, 0]);

  const [sensing, setSensing]     = useState([0, 0, 0, 0]);
  const [inutition, setIntuition] = useState([0, 0, 0, 0]);

  const [thinking, setThinking] = useState([0, 0, 0, 0]);
  const [feeling, setFeeling]   = useState([0, 0, 0, 0]);

  const [judging, setJudging]       = useState([0, 0, 0, 0]);
  const [perceiving, setPerceiving] = useState([0, 0, 0, 0]);

  const [turbulent, setTurbulent] = useState([0, 0, 0, 0]);
  const [assertive, setAssertive] = useState([0, 0, 0, 0]);

  function seePersonality() {
    const sumIntrovert = -(introvert.reduce((acc, curr) => acc + curr, 0));
    const sumExtrovert = extrovert.reduce((acc, curr) => acc + curr, 0);
    const sumSensing = -(sensing.reduce((acc, curr) => acc + curr, 0));
    const sumIntuition = inutition.reduce((acc, curr) => acc + curr, 0);
    const sumThinking = -(thinking.reduce((acc, curr) => acc + curr, 0));
    const sumFeeling = feeling.reduce((acc, curr) => acc + curr, 0);
    const sumJudging = judging.reduce((acc, curr) => acc + curr, 0);
    const sumPerceiving = -(perceiving.reduce((acc, curr) => acc + curr, 0));
    const sumTurbulent = -(turbulent.reduce((acc, curr) => acc + curr, 0));
    const sumAssertive = assertive.reduce((acc, curr) => acc + curr, 0);

    setClickOnce(false);

    if(clickOnce){
      alert("introvert " + sumIntrovert);
      alert("extrovert " + sumExtrovert);
    }
  };

  const setIntrovertOrExtrovert = (index, value) => {
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

  const setSensingOrIntuition = (index, value) => {
    let newSliderChange = [...sliderChange];
    newSliderChange[index] = value;
    setSliderChange(newSliderChange);

    if (value > 0) {
      let newInutitionArr = [...inutition];
      newInutitionArr[index] = value;
      setIntuition(newInutitionArr);
    } else if (value < 0) {
      let newSensingArr = [...sensing];
      newSensingArr[index] = value;
      setSensing(newSensingArr);
    }
  };

  const setThinkingOrFeeling = (index, value) => {
    let newSliderChange = [...sliderChange];
    newSliderChange[index] = value;
    setSliderChange(newSliderChange);

    if (value > 0) {
      let newFeelingArr = [...feeling];
      newFeelingArr[index] = value;
      setFeeling(newFeelingArr);
    } else if (value < 0) {
      let newThinkingnArr = [...thinking];
      newThinkingnArr[index] = value;
      setThinking(newThinkingnArr);
    }
  };

  const setJudgingOrPerceiving = (index, value) => {
    let newSliderChange = [...sliderChange];
    newSliderChange[index] = value;
    setSliderChange(newSliderChange);

    if (value > 0) {
      let newJudgingArr = [...judging];
      newJudgingArr[index] = value;
      setJudging(newJudgingArr);
    } else if (value < 0) {
      let newPerceivingArr = [...perceiving];
      newPerceivingArr[index] = value;
      setPerceiving(newPerceivingArr);
    }
  };

  const setAssertiveOrTurbulent = (index, value) => {
    let newSliderChange = [...sliderChange];
    newSliderChange[index] = value;
    setSliderChange(newSliderChange);

    if (value > 0) {
      let newAssertiveArr = [...assertive];
      newAssertiveArr[index] = value;
      setAssertive(newAssertiveArr);
    } else if (value < 0) {
      let newTurbulentArr = [...turbulent];
      newTurbulentArr[index] = value;
      setTurbulent(newTurbulentArr);
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
            Welcome to the free Myers Briggs Personality Test <br /><br /> Discover your personality across five categories:
            <br /> Introvert vs. Extrovert &#x2219; Sensing vs. Intuition &#x2219; Thinking vs. Feeling &#x2219; Judging vs. Perceiving &#x2219; Turbulent vs. Assertive
            <br /> 
            <br />
            Scroll down to get started!<br />
          </p>
          <p>________________________________________________________________________</p>
        </div>

        <div className="slider">
        <p>You regularly make new friends.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={sliderChange[0]}
            onChange={(event, value) => setIntrovertOrExtrovert(0, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>Complex and novel ideas excite you more than simple and straightforward ones.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={sliderChange[1]}
            onChange={(event, value) => setSensingOrIntuition(1, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You usually feel more persuaded by what resonates emotionally with you than by factual arguments.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={sliderChange[2]}
            onChange={(event, value) => setThinkingOrFeeling(2, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>Your living and working spaces are clean and organized.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={sliderChange[3]}
            onChange={(event, value) => setJudgingOrPerceiving(3, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You usually stay calm, even under a lot of pressure.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={sliderChange[4]}
            onChange={(event, value) => setAssertiveOrTurbulent(4, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You feel comfortable with the idea of networking or promoting yourself to strangers.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={sliderChange[5]}
            onChange={(event, value) => setIntrovertOrExtrovert(5, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You prioritize and plan tasks effectively, often completing them well before the deadline.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={sliderChange[6]}
            onChange={(event, value) => setJudgingOrPerceiving(6, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>People's stories and emotions speak louder to you than numbers or data.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={sliderChange[7]}
            onChange={(event, value) => setThinkingOrFeeling(7, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You like to use organizing tools like schedules and lists.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={sliderChange[8]}
            onChange={(event, value) => setJudgingOrPerceiving(8, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You rarely doubt your overall abilities or knowledge when you make a mistake.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={sliderChange[9]}
            onChange={(event, value) => setAssertiveOrTurbulent(9, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You feel comfortable just walking up to someone you find interesting and striking up a conversation.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={sliderChange[10]}
            onChange={(event, value) => setIntrovertOrExtrovert(10, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You enjoy discussing various interpretations of creative works.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={sliderChange[11]}
            onChange={(event, value) => setSensingOrIntuition(11, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You prioritize people's feelings over facts when determining a course of action.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={sliderChange[12]}
            onChange={(event, value) => setThinkingOrFeeling(12, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You enjoy when your days are structued with a schedule.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={sliderChange[13]}
            onChange={(event, value) => setJudgingOrPerceiving(13, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You rarely worry about whether you make a good impression on people you meet.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={sliderChange[14]}
            onChange={(event, value) => setAssertiveOrTurbulent(14, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You enjoy participating in team-based activities.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={sliderChange[15]}
            onChange={(event, value) => setIntrovertOrExtrovert(15, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You enjoy experimenting with new and untested approaches.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={sliderChange[16]}
            onChange={(event, value) => setSensingOrIntuition(16, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You prioritize being sensitive over being completely honest.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={sliderChange[17]}
            onChange={(event, value) => setThinkingOrFeeling(17, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You actively seek out new experiences and knowledge areas to explore.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={sliderChange[18]}
            onChange={(event, value) => setSensingOrIntuition(18, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You rarely worry about the small things in life.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={sliderChange[19]}
            onChange={(event, value) => setAssertiveOrTurbulent(19, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div>
          <button className="submitButton" onClick={seePersonality}>See my results</button>
        </div>

      </main>
    </div>
  );
}

export default App;
