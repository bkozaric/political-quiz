import { useEffect, useState } from 'react';
import { quizQuestions, getPoliticalClassification } from './quizLogic';
import './App.css';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState(Array(quizQuestions.length).fill(3));
  const [result, setResult] = useState(null);

  const [showLongHint, setShowLongHint] = useState(false);

  const toggleHint = () => {
    setShowLongHint(!showLongHint);
  };

  useEffect(() => {
    if (!quizQuestions[currentQuestionIndex].hintLong) {
      setShowLongHint(false);
    }
  }, [currentQuestionIndex]);


  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const economicScore = responses.slice(0, 10).reduce((acc, curr) => acc + quizQuestions[0].calculatePoints(curr), 0);
      const socialScore = responses.slice(10).reduce((acc, curr) => acc + quizQuestions[11].calculatePoints(curr), 0);
      console.log(`Social score: ${socialScore}. Economic score: ${economicScore}`)
      setResult(getPoliticalClassification(economicScore, socialScore));
    }
  };


  function handlePreviousQuestion() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }

  const handleResponseChange = (value) => {
    const newResponses = [...responses];
    newResponses[currentQuestionIndex] = parseInt(value);
    setResponses(newResponses);
  };

  const getDotPosition = (economicScore, socialScore) => {
    const x = (((economicScore + 10) / 20) * 100) - 1.3;
    const y = 98.7 - (((socialScore + 10) / 20) * 100);
    return { x, y };
  };

  const isBackButtonDisabled = currentQuestionIndex === 0;

  return (
    <>
      <h1>Political Affiliation Quiz</h1>
      <div className="quiz-container">
        {result === null ? (
          <div className="question-container">
            <p className="question-count">Question {currentQuestionIndex + 1}/{quizQuestions.length}</p>
            <p className="question">{quizQuestions[currentQuestionIndex].question}</p>
            <p className="hint">
              {showLongHint && quizQuestions[currentQuestionIndex].hintLong
                ? quizQuestions[currentQuestionIndex].hintLong
                : quizQuestions[currentQuestionIndex].hint}
              {quizQuestions[currentQuestionIndex].hintLong && (
                <a onClick={toggleHint} className="show-more-link">
                  {showLongHint ? ' Show Less' : ' Show More'}
                </a>
              )}
            </p>
            <input
              type="range"
              min="1"
              max="5"
              value={responses[currentQuestionIndex]}
              onChange={(e) => handleResponseChange(e.target.value)}
              className="slider"
              step="1"
            />
            <div className="slider-labels">
              <span>Strongly Disagree</span>
              <span className="slider-label-neutral">Neutral</span>
              <span>Strongly Agree</span>
            </div>
            <div className="navigation-buttons">
              <button onClick={handlePreviousQuestion} className="back-button" disabled={isBackButtonDisabled}>Back</button>
              <button onClick={handleNextQuestion} className="next-button">
                {currentQuestionIndex === quizQuestions.length - 1 ? 'Submit' : 'Next'}
              </button>
            </div>
          </div>
        ) : (
          <div className="results-container">
            <h2>Your Political Affiliation</h2>
            <p>Economic View: {result.economicAffiliation} ({result.economicScore})</p>
            <p>Social View: {result.socialAffiliation} ({result.socialScore})</p>
            <div className="graph">
              <div className="graph-axis-x"></div>
              <div className="graph-axis-y"></div>
              <div className="axis-label left-label">Socialist</div>
              <div className="axis-label right-label">Capitalist</div>
              <div className="axis-label top-label">Conservative</div>
              <div className="axis-label bottom-label">Liberal</div>
              <div className="graph-dot" style={{
                left: `${getDotPosition(result.economicScore, result.socialScore).x}%`,
                bottom: `${getDotPosition(result.economicScore, result.socialScore).y}%`
              }}></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
