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
  const [introvertPercentage, setIntrovertPercentage]       = useState(0);
  const [extrovertPercentage, setExtrovertPercentage]       = useState(0);

  const [tempSensingIntuition, settempSensingIntuition]     = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [sensing, setSensing]                               = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [inutition, setIntuition]                           = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [sensingPercentage, setSensingPercentage]           = useState(0);
  const [intuitionPercentage, setIntuitionPercentage]       = useState(0);

  const [tempThinkingFeeling, setTempThinkingFeeling]       = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); 
  const [thinking, setThinking]                             = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [feeling, setFeeling]                               = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [thinkingPercentage, setThinkingPercentage]         = useState(0);
  const [feelingPercentage, setFeelingPercentage]           = useState(0);

  const [tempJudgingPerceiving, settempJudgingPerceiving]   = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [judging, setJudging]                               = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [perceiving, setPerceiving]                         = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [judgingPercentage, setJudgingPercentage]           = useState(0);
  const [perceivingPercentage, setPerceivingPercentage]     = useState(0);

  const [tempTurbulentAssertive, settempTurbulentAssertive] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turbulent, setTurbulent]                           = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [assertive, setAssertive]                           = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turbulentPercentage, setTurbulentPercentage]       = useState(0);
  const [assertivePercentage, setAssertivePercentage]       = useState(0); 

  //--------------------------------------------------------------------
  //                      **Function Section**
  //--------------------------------------------------------------------

  const handleClick = () => {
    seePersonality();
    calculatePercentages();
  };

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

      if(sumTurbulent > sumAssertive){
        personalityTraits += "-T";
      } else if(sumAssertive > sumTurbulent){
        personalityTraits += "-A";
      }

      setPersonalityResults(personalityTraits);
    }

    setNotClicked(false);
  };

  const calculatePercentages = () => {
    let totalLength = tempIntrovertExtrovert.length; 
  
    let introvert_percent = Math.round((introvert.filter(value => value !== 0).length / totalLength) * 100);
    let extrovert_percent = Math.round((extrovert.filter(value => value !== 0).length / totalLength) * 100);
    let sensing_percent = Math.round((sensing.filter(value => value !== 0).length / totalLength) * 100);
    let intuition_percent = Math.round((inutition.filter(value => value !== 0).length / totalLength) * 100);
    let thinking_percent = Math.round((thinking.filter(value => value !== 0).length / totalLength) * 100);
    let feeling_percent = Math.round((feeling.filter(value => value !== 0).length / totalLength) * 100);
    let judging_percent = Math.round((judging.filter(value => value !== 0).length / totalLength) * 100);
    let perceiving_percent = Math.round((perceiving.filter(value => value !== 0).length / totalLength) * 100);
    let turbulent_percent = Math.round((turbulent.filter(value => value !== 0).length / totalLength) * 100);
    let assertive_percent = Math.round((assertive.filter(value => value !== 0).length / totalLength) * 100);

    setIntrovertPercentage(introvert_percent);
    setExtrovertPercentage(extrovert_percent);
    setSensingPercentage(sensing_percent);
    setIntuitionPercentage(intuition_percent);
    setThinkingPercentage(thinking_percent);
    setFeelingPercentage(feeling_percent);
    setJudgingPercentage(judging_percent);
    setPerceivingPercentage(perceiving_percent);
    setTurbulentPercentage(turbulent_percent);
    setAssertivePercentage(assertive_percent);
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
          Myers-Briggs Type Indicator Personality Test
        </p>
      </header>
      <main>
        <div className='openingParagraph'>
          <p>
            Welcome to the free Myers-Briggs Type Indicator (MBTI) Personality Test <br /><br /> Discover your personality across five categories:
            <br /> Introvert vs. Extrovert &#x2219; Sensing vs. Intuition &#x2219; Thinking vs. Feeling &#x2219; Judging vs. Perceiving &#x2219; Turbulent vs. Assertive
            <br /> 
            <br />
            Scroll down to get started!
          </p>
          <hr style={{ width: '50%', color: 'whitesmoke', marginTop: '50px' }} />
        </div>

        <div className="slider">
        <p>You regularly make new friends.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempThinkingFeeling[1]}
            onChange={(event, value) => setThinkingOrFeeling(1, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You don't enjoy juggling multiple tasks at once.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempJudgingPerceiving[2]}
            onChange={(event, value) => setJudgingOrPerceiving(2, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You never doubt your abilities or knowledge, even when you make a mistake.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempTurbulentAssertive[1]}
            onChange={(event, value) => setAssertiveOrTurbulent(1, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You are comfortable just walking up to someone you find interesting and striking up a conversation.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempIntrovertExtrovert[2]}
            onChange={(event, value) => setIntrovertOrExtrovert(2, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You enjoy trying to discover the hidden meanings behind creative works.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempThinkingFeeling[2]}
            onChange={(event, value) => setThinkingOrFeeling(2, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You like to have a to-do list for each day.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempJudgingPerceiving[3]}
            onChange={(event, value) => setJudgingOrPerceiving(3, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You don't worry about the impression you make on the people you meet.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempIntrovertExtrovert[3]}
            onChange={(event, value) => setIntrovertOrExtrovert(3, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You prefer creative, strategic, or educational hobbies over hands-on hobbies, such as camping, sports, or cooking.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempThinkingFeeling[3]}
            onChange={(event, value) => setThinkingOrFeeling(3, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You prefer to learn something new over spending time outdoors.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempSensingIntuition[3]}
            onChange={(event, value) => setSensingOrIntuition(3, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You are comfortable voicing your opinions, even if others might disagree or get upset.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempIntrovertExtrovert[4]}
            onChange={(event, value) => setIntrovertOrExtrovert(4, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You see patterns and connections between seemingly unrelated things.</p> 
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempSensingIntuition[4]}
            onChange={(event, value) => setSensingOrIntuition(4, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You prioritize emotional considerations in decisions, even if it means sacrificing some efficiency.</p> 
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempThinkingFeeling[4]}
            onChange={(event, value) => setThinkingOrFeeling(4, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You find yourself day-dreaming often.</p> 
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempSensingIntuition[5]}
            onChange={(event, value) => setSensingOrIntuition(5, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You don't worry or stress out about the little things.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempIntrovertExtrovert[5]}
            onChange={(event, value) => setIntrovertOrExtrovert(5, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You prefer to recieve feedback that acknowledges your efforts over constructive criticism that helps you improve objectively.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempThinkingFeeling[5]}
            onChange={(event, value) => setThinkingOrFeeling(5, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You don't enjoy working with numbers and data.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempJudgingPerceiving[4]}
            onChange={(event, value) => setJudgingOrPerceiving(4, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>In disagreements, you prioritize preserving the feelings of others over proving your point.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempThinkingFeeling[7]}
            onChange={(event, value) => setThinkingOrFeeling(7, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You often introduce yourself to new people at social gatherings.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempIntrovertExtrovert[6]}
            onChange={(event, value) => setIntrovertOrExtrovert(6, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You are more likely to prioritize your own wants over pleasing others.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempTurbulentAssertive[5]}
            onChange={(event, value) => setAssertiveOrTurbulent(5, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You enjoy arriving early to appointments, and you are never usually late for anything.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempJudgingPerceiving[5]}
            onChange={(event, value) => setJudgingOrPerceiving(5, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You rarely feel as though you need time alone.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempIntrovertExtrovert[7]}
            onChange={(event, value) => setIntrovertOrExtrovert(7, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>When recalling a memory, you tend to focus on the overall picture rather than the specific, small details.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempSensingIntuition[6]}
            onChange={(event, value) => setSensingOrIntuition(6, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You feel uneasy when plans change unexpectedly and you try to make a new plan as soon as possible.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempJudgingPerceiving[6]}
            onChange={(event, value) => setJudgingOrPerceiving(6, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You rarely think about your past mistakes.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempSensingIntuition[7]}
            onChange={(event, value) => setSensingOrIntuition(7, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You save money long-term over purchasing items that you want.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempTurbulentAssertive[7]}
            onChange={(event, value) => setAssertiveOrTurbulent(7, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You often find yourself focusing more on the future than the present.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempSensingIntuition[8]}
            onChange={(event, value) => setSensingOrIntuition(8, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>When giving advice, you are more inclined to provide emotional support over practical solutions.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempThinkingFeeling[8]}
            onChange={(event, value) => setThinkingOrFeeling(8, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>When learning a new skill, you prefer structured approachs with clear steps over experimenting and learning by trial and error.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempTurbulentAssertive[8]}
            onChange={(event, value) => setAssertiveOrTurbulent(8, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You don't shy away from making phone calls.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempIntrovertExtrovert[8]}
            onChange={(event, value) => setIntrovertOrExtrovert(8, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You enjoy exploring new viewpoints, even if they conflict with your own.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempIntrovertExtrovert[9]}
            onChange={(event, value) => setIntrovertOrExtrovert(9, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You usually completely finish one task before starting on another.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempJudgingPerceiving[9]}
            onChange={(event, value) => setJudgingOrPerceiving(9, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>Your handle stressful situations very well.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempTurbulentAssertive[9]}
            onChange={(event, value) => setAssertiveOrTurbulent(9, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>After dreaming, you focus on the underlying meaning of your dream over what you visually saw.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempThinkingFeeling[9]}
            onChange={(event, value) => setThinkingOrFeeling(9, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>When facts and feelings conflict, you usually find yourself following your heart.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempIntrovertExtrovert[10]}
            onChange={(event, value) => setIntrovertOrExtrovert(10, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>It is more interesting to discuss hypothetical scenarios and theories over real experiences and events.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempSensingIntuition[11]}
            onChange={(event, value) => setSensingOrIntuition(11, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You are more drawn to busy, bustling atmospheres than to quiet, intimate places.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempTurbulentAssertive[11]}
            onChange={(event, value) => setAssertiveOrTurbulent(11, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You complete things in order without skipping over any steps.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempJudgingPerceiving[11]}
            onChange={(event, value) => setJudgingOrPerceiving(11, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You prefer tasks that require you to come up with creative solutions rather than follow a predefined series of steps.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempIntrovertExtrovert[12]}
            onChange={(event, value) => setIntrovertOrExtrovert(12, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>When making decisions, you focus more on how the affected people might feel than on what is most logical or efficient.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempThinkingFeeling[11]}
            onChange={(event, value) => setThinkingOrFeeling(11, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>When traveling, you make a detailed planned itinerary with each day mapped out in advance.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempJudgingPerceiving[12]}
            onChange={(event, value) => setJudgingOrPerceiving(12, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div className="slider">
        <p>You are easily swayed by emotional arguments.</p>
          <Slider 
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
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
            sx={{ width: '80%' }}
            min={-10}
            max={10}
            defaultValue={0}
            step={1}
            color="secondary"
            /* marks */
            value={tempTurbulentAssertive[12]}
            onChange={(event, value) => setAssertiveOrTurbulent(12, value)}
          />
          <span className='agree'>Agree</span>
          <span className='neutral'>Neutral</span>
          <span className='disagree'>Disagree</span>
        </div>

        <div>
          <button className="submitButton" onClick={handleClick}>See my results</button>
        </div>

        {!notClicked ? (
          <div className='personality-result'>
            <p>
              You are <br /> {personalityResults}
            </p>

            <div className='parent-container'>
              <p className='trait-title'>{introvertPercentage > extrovertPercentage ? "Introvert (I)" : "Extrovert (E)"}</p>
              <div class="container">
                <div class="skills i/e" style={{ width: `${introvertPercentage > extrovertPercentage ? introvertPercentage : extrovertPercentage}%`, backgroundColor: '#ffbf00' }}>{introvertPercentage > extrovertPercentage ? introvertPercentage : extrovertPercentage}%</div>
              </div>

              <p className='trait-title'>{sensingPercentage > intuitionPercentage ? "Sensing (S)" : "Intuition (N) "}</p>
              <div class="container">
                <div class="skills s/i" style={{ width: `${sensingPercentage > intuitionPercentage ? sensingPercentage : intuitionPercentage}%`, backgroundColor: '#ff1a1a' }}>{sensingPercentage > intuitionPercentage ? sensingPercentage : intuitionPercentage}%</div>
              </div>

              <p className='trait-title'>{thinkingPercentage > feelingPercentage ? "Thinking (T)" : "Feeling (F)"}</p>
              <div class="container">
                <div class="skills t/f" style={{ width: `${thinkingPercentage > feelingPercentage ? thinkingPercentage : feelingPercentage}%`, backgroundColor: '#0099ff' }}>{thinkingPercentage > feelingPercentage ? thinkingPercentage : feelingPercentage}%</div>
              </div>

              <p className='trait-title'>{judgingPercentage > perceivingPercentage ? "Judging (J)" : "Perceiving (P)"}</p>
              <div class="container">
                <div class="skills j/p" style={{ width: `${judgingPercentage > perceivingPercentage ? judgingPercentage : perceivingPercentage}%`, backgroundColor: '#00ff00' }}>{judgingPercentage > perceivingPercentage ? judgingPercentage : perceivingPercentage}%</div>
              </div>

              <p className='trait-title'>{turbulentPercentage > assertivePercentage ? "Turbulent (-T)" : "Assertive (-A)"}</p>
              <div class="container">
                <div class="skills t/a" style={{ width: `${turbulentPercentage > assertivePercentage ? turbulentPercentage : assertivePercentage}%`, backgroundColor: '#8000ff' }}>{turbulentPercentage > assertivePercentage ? turbulentPercentage : assertivePercentage}%</div>
              </div>
            </div>
          </div>
        ) : null }

      </main>
    </div>
  );
}

export default App;
