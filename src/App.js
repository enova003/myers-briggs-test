import './App.css';
import React from 'react';
import Slider from '@mui/material/Slider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Myers Briggs Personality Test
        </p>
      </header>
      <main>
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

        <p>I regularly make new friends</p>
        <div className="slider">
          <Slider 
            sx={{ width: 400 }}
            min={0}
            max={100}
            defaultValue={50}
            step={1}
            color="secondary"
          />
        </div>

        <div>
          <button className="submitButton">See my results</button>
        </div>

      </main>
    </div>
  );
}

export default App;
