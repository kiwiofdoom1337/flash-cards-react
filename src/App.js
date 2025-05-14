import { useState } from 'react';
import './App.css';
import  { questionsAnswers }  from './questions.js';
/* import { useState } from 'react' */

function Header() {
  return <div className='title'>Flash Cards</div>
}

function ProgressBar({ index }) {
  return (
    <div className='progressBar'>
      <div className='percentBar'>
        <div className='gray' style={{width: `${18 * (index + 1)}px`}}></div>
        <div className='percent'>{5 * (index + 1)} %</div>
      </div>
      <div className='qCount'>{index + 1} of {questionsAnswers.length}</div>
    </div>
  )
}

function QnABox({ children }) {
  return (
    <div className='qnaBox'>
      {children}
    </div>
  )
}

function Question({ index, answerShow }) {
  let qa = questionsAnswers[index];
  if (answerShow === false) {
    return (
      <div className='question'>
        <p>{qa.question}</p>
      </div>
    )
  } else {
    return null;
  }
}

function Answer({ index, answerShow }) {
  let qa = questionsAnswers[index];
  if (answerShow === true) {
    return (
      <div className='answer'>
      <p>{qa.answer}</p>
      </div>
    )
  } else {
    return null;
  }
}

function Navigation({ index, setIndex, answerShow, setAnswerShow}) {
  function handlePrevious() {
    if (index > 0) {
      setIndex(index - 1);
      setAnswerShow(false);
    }
  }

  function handleNext() {
    if (index < questionsAnswers.length - 1) {
      setIndex(index + 1);
      setAnswerShow(false);
    }
  }

  function handleAnswer() {
    setAnswerShow(!answerShow)
  }

  

  return (
    <div>
        <div className='nav'>
          <button onClick={handlePrevious}>&lt; Previous</button>
          <div className='nav-showHide'>
            <button className='showAnswer' onClick={handleAnswer}>{answerShow ? 'Hide Answer' : 'Show Answer'}</button>
          </div>
          <button onClick={handleNext}>Next &gt;</button>
        </div>
    </div>
  )
}

function App() {
  const [index, setIndex] = useState(0);
  const [answerShow, setAnswerShow] = useState(false);
  return (
    <>
      < Header />
      < ProgressBar index={index}/>
      < QnABox >
        < Question index={index} answerShow={answerShow}/>
        < Answer index={index} answerShow={answerShow}/>
        < Navigation index={index} setIndex={setIndex} answerShow={answerShow} setAnswerShow={setAnswerShow}/>
      </QnABox>
    </>
  );
}

export default App;
