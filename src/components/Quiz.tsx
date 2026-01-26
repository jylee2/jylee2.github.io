import React, { useState } from 'react';
import './Quiz.css';

export interface Question {
  id: number;
  question: string;
  answer: string;
  example: string;
}

interface QuizProps {
  questions: Question[];
  title: string;
  onBack: () => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, title, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuestion: Question = questions[currentQuestionIndex];

  const handleRevealAnswer = () => {
    setShowAnswer(true);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowAnswer(false);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowAnswer(false);
    }
  };

  return (
    <div className="quiz-container">
      <button className="back-button" onClick={onBack}>
        Back to Quiz Selection
      </button>
      <h2>{title}</h2>
      <p className="question-counter">Question {currentQuestionIndex + 1} of {questions.length}</p>
      <h3 className="question-text">{currentQuestion.question}</h3>

      {!showAnswer ? (
        <button className="reveal-button" onClick={handleRevealAnswer}>
          Reveal Answer
        </button>
      ) : (
        <div className="answer-container">
          <div className="answer-section">
            <h4>Answer:</h4>
            <p className="answer-text">{currentQuestion.answer}</p>
          </div>
          <div className="example-section">
            <h4>Example:</h4>
            <pre className="example-code">{currentQuestion.example}</pre>
          </div>
        </div>
      )}

      <div className="navigation-container">
        <button
          className="nav-button"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button
          className="nav-button"
          onClick={handleNext}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
