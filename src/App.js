import './App.css';
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

function App() {
  const [clickOnce, setClickOnce] = useState(true);

  const [tempIntrovertExtrovert, settempIntrovertExtrovert] = useState([0, 0, 0, 0, 0]);
  const [introvert, setIntrovert] = useState([0, 0, 0, 0, 0]);
  const [extrovert, setExtrovert] = useState([0, 0, 0, 0, 0]);

  const [tempSensingIntuition, settempSensingIntuition] = useState([0, 0, 0, 0, 0]);
  const [sensing, setSensing]     = useState([0, 0, 0, 0, 0]);
  const [inutition, setIntuition] = useState([0, 0, 0, 0, 0]);

  const [tempThinkingFeeling, setTempThinkingFeeling] = useState([0, 0, 0, 0, 0]);
  const [thinking, setThinking] = useState([0, 0, 0, 0, 0]);
  const [feeling, setFeeling]   = useState([0, 0, 0, 0, 0]);

  const [tempJudgingPerceiving, settempJudgingPerceiving] = useState([0, 0, 0, 0]);
  const [judging, setJudging]       = useState([0, 0, 0, 0]);
  const [perceiving, setPerceiving] = useState([0, 0, 0, 0]);

  const [tempTurbulentAssertive, settempTurbulentAssertive] = useState([0, 0, 0, 0]);
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
    let newtempIntrovertExtrovert = [...tempIntrovertExtrovert];
    newtempIntrovertExtrovert[index] = value;
    settempIntrovertExtrovert(newtempIntrovertExtrovert);

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
    let newtempSensingIntuition = [...tempSensingIntuition];
    newtempSensingIntuition[index] = value;
    settempSensingIntuition(newtempSensingIntuition);

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
    let newtempThinkingFeeling = [...tempThinkingFeeling];
    newtempThinkingFeeling[index] = value;
    setTempThinkingFeeling(newtempThinkingFeeling);

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
    let newtempJudgingPerceiving = [...tempJudgingPerceiving];
    newtempJudgingPerceiving[index] = value;
    settempJudgingPerceiving(newtempJudgingPerceiving);

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
    let newtempTurbulentAssertive = [...tempTurbulentAssertive];
    newtempTurbulentAssertive[index] = value;
    settempTurbulentAssertive(newtempTurbulentAssertive);

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
          <p>___________________________________________________________________</p>
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
            value={tempIntrovertExtrovert[0]}
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
            value={tempSensingIntuition[0]}
            onChange={(event, value) => setSensingOrIntuition(0, value)}
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
            value={tempThinkingFeeling[0]}
            onChange={(event, value) => setThinkingOrFeeling(0, value)}
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
            value={tempJudgingPerceiving[0]}
            onChange={(event, value) => setJudgingOrPerceiving(0, value)}
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
            value={tempTurbulentAssertive[0]}
            onChange={(event, value) => setAssertiveOrTurbulent(0, value)}
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
            value={tempIntrovertExtrovert[1]}
            onChange={(event, value) => setIntrovertOrExtrovert(1, value)}
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
            value={tempJudgingPerceiving[1]}
            onChange={(event, value) => setJudgingOrPerceiving(1, value)}
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
            value={tempThinkingFeeling[1]}
            onChange={(event, value) => setThinkingOrFeeling(1, value)}
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
            value={tempJudgingPerceiving[2]}
            onChange={(event, value) => setJudgingOrPerceiving(2, value)}
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
            value={tempTurbulentAssertive[1]}
            onChange={(event, value) => setAssertiveOrTurbulent(1, value)}
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
            value={tempIntrovertExtrovert[2]}
            onChange={(event, value) => setIntrovertOrExtrovert(2, value)}
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
            value={tempSensingIntuition[1]}
            onChange={(event, value) => setSensingOrIntuition(1, value)}
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
            value={tempThinkingFeeling[2]}
            onChange={(event, value) => setThinkingOrFeeling(2, value)}
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
            value={tempJudgingPerceiving[3]}
            onChange={(event, value) => setJudgingOrPerceiving(3, value)}
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
            value={tempTurbulentAssertive[2]}
            onChange={(event, value) => setAssertiveOrTurbulent(2, value)}
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
            value={tempIntrovertExtrovert[3]}
            onChange={(event, value) => setIntrovertOrExtrovert(3, value)}
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
            value={tempSensingIntuition[2]}
            onChange={(event, value) => setSensingOrIntuition(2, value)}
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
            value={tempThinkingFeeling[3]}
            onChange={(event, value) => setThinkingOrFeeling(3, value)}
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
            value={tempSensingIntuition[3]}
            onChange={(event, value) => setSensingOrIntuition(3, value)}
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
            value={tempTurbulentAssertive[3]}
            onChange={(event, value) => setAssertiveOrTurbulent(3, value)}
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
            value={tempIntrovertExtrovert[4]}
            onChange={(event, value) => setIntrovertOrExtrovert(4, value)}
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
            value={tempSensingIntuition[4]}
            onChange={(event, value) => setSensingOrIntuition(4, value)}
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
            value={tempThinkingFeeling[4]}
            onChange={(event, value) => setThinkingOrFeeling(4, value)}
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
