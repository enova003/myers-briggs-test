import './App.css';
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

function App() {

  //--------------------------------------------------------------------
  //                      **Variable Section**
  //--------------------------------------------------------------------

  const [notClicked, setNotClicked] = useState(true);
  const [personalityResults, setPersonalityResults] = useState('');

  const [tempIntrovertExtrovert, settempIntrovertExtrovert] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); 
  const [introvert, setIntrovert]                           = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [extrovert, setExtrovert]                           = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const [tempSensingIntuition, settempSensingIntuition]     = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [sensing, setSensing]                               = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [inutition, setIntuition]                           = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const [tempThinkingFeeling, setTempThinkingFeeling]       = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); 
  const [thinking, setThinking]                             = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [feeling, setFeeling]                               = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const [tempJudgingPerceiving, settempJudgingPerceiving]   = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [judging, setJudging]                               = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [perceiving, setPerceiving]                         = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const [tempTurbulentAssertive, settempTurbulentAssertive] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turbulent, setTurbulent]                           = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [assertive, setAssertive]                           = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  //--------------------------------------------------------------------
  //                      **Function Section**
  //--------------------------------------------------------------------

  function seePersonality() {
    let personalityTraits = "";

    if(notClicked){
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

      if(sumIntrovert > sumExtrovert){
        personalityTraits += "I";
      } else if(sumExtrovert > sumIntrovert){
        personalityTraits += "E";
      }

      if(sumSensing > sumIntuition){
        personalityTraits += "S";
      } else if(sumIntuition > sumSensing){
        personalityTraits += "N";
      }

      if(sumThinking > sumFeeling){
        personalityTraits += "T";
      } else if(sumFeeling > sumThinking){
        personalityTraits += "F";
      }

      if(sumJudging > sumPerceiving){
        personalityTraits += "J";
      } else if(sumPerceiving > sumJudging){
        personalityTraits += "P";
      }

      personalityTraits += "-";

      if(sumTurbulent > sumAssertive){
        personalityTraits += "T";
      } else if(sumAssertive > sumTurbulent){
        personalityTraits += "A";
      }

      setPersonalityResults(personalityTraits);
    }

    setNotClicked(false);
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

  //--------------------------------------------------------------------
  //                 **Website UI Content Section**
  //--------------------------------------------------------------------

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
        <p>Complex ideas excite you more than simple and straightforward ones.</p>
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
        <p>You rarely doubt your abilities or knowledge, even when you make a mistake.</p>
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
        <p>You enjoy having your days are structued and following a schedule.</p>
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
        <p>You rarely worry about the impression you make on the people you meet.</p>
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
        <p>You enjoy debating ethical dilemmas.</p>
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
        <p>You actively seek out new knowledge areas to explore.</p>
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
        <p>You feel comfortable voicing your opinions, even if others might disagree or get upset.</p>
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
        <p>You would rather attend a lively event on a Friday night than stay at home.</p>  
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
        <p>You tend to see patterns and connections between seemingly unrelated things.</p> 
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
        <p>You sometimes hold grudges and have a difficult time forgiving people.</p> 
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

        <div className="slider">
        <p>You often come up with creative ways to problem solve or accomplish tasks.</p> 
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempSensingIntuition[5]}
            onChange={(event, value) => setSensingOrIntuition(5, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You don't often worry or stress out about the little things.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempTurbulentAssertive[4]}
            onChange={(event, value) => setAssertiveOrTurbulent(4, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You enjoy group hobbies or activities more than solitary ones.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempIntrovertExtrovert[5]}
            onChange={(event, value) => setIntrovertOrExtrovert(5, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You often become defensive or upset when receiving criticism or negative feedback.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempThinkingFeeling[5]}
            onChange={(event, value) => setThinkingOrFeeling(5, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You prefer art and theater over math and science.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempThinkingFeeling[6]}
            onChange={(event, value) => setThinkingOrFeeling(6, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You prefer to do your chores before allowing yourself to relax.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempJudgingPerceiving[4]}
            onChange={(event, value) => setJudgingOrPerceiving(4, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>In arguments, you make it a point to not purposefully say anything that will hurt the other person.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempThinkingFeeling[7]}
            onChange={(event, value) => setThinkingOrFeeling(7, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You enjoy introducing yourself to new people at social gatherings.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempIntrovertExtrovert[6]}
            onChange={(event, value) => setIntrovertOrExtrovert(6, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You are more likely to prioritize your own happiness over pleasing others.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempTurbulentAssertive[5]}
            onChange={(event, value) => setAssertiveOrTurbulent(5, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You don't usually procrastinate or postpone things.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempJudgingPerceiving[5]}
            onChange={(event, value) => setJudgingOrPerceiving(5, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You usually prefer to be around others rather than on your own.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempIntrovertExtrovert[7]}
            onChange={(event, value) => setIntrovertOrExtrovert(7, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>When recalling a memory, you often remember the overall theme or impression over the specific details and events.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempSensingIntuition[6]}
            onChange={(event, value) => setSensingOrIntuition(6, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You feel uneasy when plans change unexpectedly.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempJudgingPerceiving[6]}
            onChange={(event, value) => setJudgingOrPerceiving(6, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You rarely second-guess the past choices that you have made.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempTurbulentAssertive[6]}
            onChange={(event, value) => setAssertiveOrTurbulent(6, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You are very curious about what happens after death.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempSensingIntuition[7]}
            onChange={(event, value) => setSensingOrIntuition(7, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You prefer to save money over spending it on the things you want.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempJudgingPerceiving[7]}
            onChange={(event, value) => setJudgingOrPerceiving(7, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You are decisive and don't often need reassurance from others when making decisions.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempTurbulentAssertive[7]}
            onChange={(event, value) => setAssertiveOrTurbulent(7, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You are drawn to the underlying meaning of various pieces of creative expression.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempSensingIntuition[8]}
            onChange={(event, value) => setSensingOrIntuition(8, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You usually base your choices on emotional impressions rather than objective facts.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempThinkingFeeling[8]}
            onChange={(event, value) => setThinkingOrFeeling(8, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You like to have a to-do list for each day.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempJudgingPerceiving[8]}
            onChange={(event, value) => setJudgingOrPerceiving(8, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You rarely feel insecure.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempTurbulentAssertive[8]}
            onChange={(event, value) => setAssertiveOrTurbulent(8, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You don't ever get nervous or anxious to talk on the phone with strangers.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempIntrovertExtrovert[8]}
            onChange={(event, value) => setIntrovertOrExtrovert(8, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You enjoy exploring unfamiliar ideas and viewpoints.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempSensingIntuition[9]}
            onChange={(event, value) => setSensingOrIntuition(9, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You easily open up to new people.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempIntrovertExtrovert[9]}
            onChange={(event, value) => setIntrovertOrExtrovert(9, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>If your plans are interrupted, your top priority is to get back on track as soon as possible.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempJudgingPerceiving[9]}
            onChange={(event, value) => setJudgingOrPerceiving(9, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>Your past mistakes don't usually cause you distress.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempTurbulentAssertive[9]}
            onChange={(event, value) => setAssertiveOrTurbulent(9, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>After dreaming, you usually focus on the underlying meaning of your dream over what you visually saw.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempSensingIntuition[10]}
            onChange={(event, value) => setSensingOrIntuition(10, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>Your emotions tend to control you more than you control them.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempThinkingFeeling[9]}
            onChange={(event, value) => setThinkingOrFeeling(9, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>When making decisions, you focus more on how the affected people might feel than on what is most logical or efficient.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempThinkingFeeling[10]}
            onChange={(event, value) => setThinkingOrFeeling(10, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>Your personal work style is closer to organized and consistent efforts than spontaneous bursts of energy.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempJudgingPerceiving[10]}
            onChange={(event, value) => setJudgingOrPerceiving(10, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You are confident in yourself and don't worry about letting others down.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempTurbulentAssertive[10]}
            onChange={(event, value) => setAssertiveOrTurbulent(10, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You would hate a job that requires you to work alone most of the time.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempIntrovertExtrovert[10]}
            onChange={(event, value) => setIntrovertOrExtrovert(10, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You find it interesting to ponder philosophical questions.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempSensingIntuition[11]}
            onChange={(event, value) => setSensingOrIntuition(11, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You feel more drawn to busy, bustling atmospheres than to quiet, intimate places.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempIntrovertExtrovert[11]}
            onChange={(event, value) => setIntrovertOrExtrovert(11, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You rarely feel overwhelmed.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempTurbulentAssertive[11]}
            onChange={(event, value) => setAssertiveOrTurbulent(11, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You tend to complete things in order without skipping over any steps.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempJudgingPerceiving[11]}
            onChange={(event, value) => setJudgingOrPerceiving(11, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You prefer tasks that require you to come up with creative solutions rather than follow concrete steps.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempSensingIntuition[12]}
            onChange={(event, value) => setSensingOrIntuition(12, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You enjoy seeing people you work with out in public.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempIntrovertExtrovert[12]}
            onChange={(event, value) => setIntrovertOrExtrovert(12, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You find it easy to comfort someone who is crying.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempThinkingFeeling[11]}
            onChange={(event, value) => setThinkingOrFeeling(11, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You don't usually struggle with deadlines.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempJudgingPerceiving[12]}
            onChange={(event, value) => setJudgingOrPerceiving(12, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You tend to base your decisions on how they align with your personal values and beliefs.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempThinkingFeeling[12]}
            onChange={(event, value) => setThinkingOrFeeling(12, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You feel confident that things will work out for you.</p>
          <Slider 
            sx={{ width: 550 }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            marks
            value={tempTurbulentAssertive[12]}
            onChange={(event, value) => setAssertiveOrTurbulent(12, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div>
          <button className="submitButton" onClick={seePersonality}>See my results</button>
        </div>

        {!notClicked ? (
          <div>
            <p>
              You are <br /> {personalityResults}
            </p>
          </div>
        ) : null }

      </main>
    </div>
  );
}

export default App;
