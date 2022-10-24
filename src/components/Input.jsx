import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Input = ({ tasks }) => {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  
  useEffect(() => {
    setMaxScore(tasks.length)
  }, [tasks.length]);

  const handleFormSubmit = (e, correct) => {
    e.preventDefault();
    const answer = e.target.elements.word.value;
    if (answer.trim() === correct.trim()) {
      setScore(prevScore => prevScore < tasks.length ? prevScore += 1 : prevScore);
      notifySuccess();
    } else {
      notifyFail();
    }
  }

  const notifySuccess = () => {
    toast.success('Correct', {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "light",
    });
  };

  const notifyFail = () => {
    toast.error('Try again', {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "light",
    });
  };

    
  return (

    <div>
      <h3>Score : {score}/{maxScore}</h3>
      <p>
        Input new words inside
      </p>
      <ul>
        {
          tasks.map(({ id, question, part1, part2, correct }) => (
            <li key={id}>
               <p className='question'>
                {question}
              </p>
              <form onSubmit={e => handleFormSubmit(e, correct)}>
                <p>{part1}</p>
                <input type="text" name="word" />
                <p>{part2}</p>
                <button type='submit'>check</button>
              </form>
            </li>
          ))
        }
      </ul>
      <ToastContainer
        position="top-center"
        autoClose={200}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Input