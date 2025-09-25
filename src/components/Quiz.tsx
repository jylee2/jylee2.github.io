import React, { useState } from 'react';
import questions from '../data/rustQuizQuestions.json';
import './Quiz.css';

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerClick = (option: string) => {
    if (quizCompleted) return;

    setSelectedOption(option);
    const correct = option === questions[currentQuestionIndex].answer;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setShowFeedback(false);
      setSelectedOption(null);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setQuizCompleted(true);
      }
    }, 1500);
  };

  if (quizCompleted) {
    return (
      <div className="quiz-container">
        <h2>Quiz Completed!</h2>
        <p>Your final score is: {score} out of {questions.length}</p>
      </div>
    );
  }

  const currentQuestion: Question = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h2>Rust Programming Quiz</h2>
      <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
      <h3>{currentQuestion.question}</h3>
      <div className="options-container">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(option)}
            disabled={showFeedback}
            className={`option-button
              ${showFeedback && option === currentQuestion.answer ? 'correct' : ''}
              ${showFeedback && option === selectedOption && !isCorrect ? 'incorrect' : ''}
            `}
          >
            {option}
          </button>
        ))}
      </div>
      {showFeedback && (
        <div className={`feedback ${isCorrect ? 'correct-feedback' : 'incorrect-feedback'}`}>
          {isCorrect ? 'Correct!' : 'Incorrect. The answer was: ' + currentQuestion.answer}
        </div>
      )}
    </div>
  );
};

export default Quiz;
