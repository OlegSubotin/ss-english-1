import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Select = ({ tasks }) => {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  useEffect(() => {
    setMaxScore(tasks.length)
  }, [tasks.length]);

  const handleSelectChange = (e, correct) => {
    const answer = e.target.value
    if (answer === correct.trim()) {
      setScore(prevScore => prevScore < tasks.length ? prevScore += 1 : prevScore);
      notifySuccess();
    } else {
      notifyFail();
    }
  };
    
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
      <h2>Choose correct option</h2>
      <h3>Score : {score}/{maxScore}</h3>
      <ol>
        {
          tasks.map(({ id, question, answer, variant1, variant2, variant3, variant4, correct }) => (
            <li key={question}>
              <p className='question'>
                {question}
              </p>
              <p>
                {answer}
              </p>
              <select name="answers" id='answers' onChange={e => handleSelectChange(e, correct)}>
                <option value=" "> </option>
                <option value={variant1}>{variant1}</option>
                <option value={variant2}>{variant2}</option>
                <option value={variant3}>{variant3}</option>
                <option value={variant4}>{variant4}</option>
              </select>
            </li>
          ))
        }
      </ol>
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

export default Select