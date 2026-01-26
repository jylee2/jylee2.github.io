import React, { useState } from 'react';
import Quiz, { Question } from './Quiz';
import androidQuestions from '../data/androidQuizQuestions.json';
import rustQuestions from '../data/rustQuizQuestions.json';
import './Quiz.css';

type QuizType = 'android' | 'rust' | null;

interface QuizConfig {
  questions: Question[];
  title: string;
}

const quizConfigs: Record<Exclude<QuizType, null>, QuizConfig> = {
  android: {
    questions: androidQuestions as Question[],
    title: 'Kotlin Android Quiz',
  },
  rust: {
    questions: rustQuestions as Question[],
    title: 'Rust Backend Quiz',
  },
};

const QuizSelector: React.FC = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<QuizType>(null);

  const handleBack = () => {
    setSelectedQuiz(null);
  };

  if (selectedQuiz) {
    const config = quizConfigs[selectedQuiz];
    return (
      <Quiz
        questions={config.questions}
        title={config.title}
        onBack={handleBack}
      />
    );
  }

  return (
    <div className="quiz-container">
      <h2>Software Engineer Quiz</h2>
      <p className="quiz-selector-subtitle">Select a quiz to begin</p>
      <div className="quiz-selector-buttons">
        <button
          className="quiz-select-button"
          onClick={() => setSelectedQuiz('android')}
        >
          <span className="quiz-select-title">Kotlin Android</span>
          <span className="quiz-select-count">{quizConfigs.android.questions.length} questions</span>
        </button>
        <button
          className="quiz-select-button"
          onClick={() => setSelectedQuiz('rust')}
        >
          <span className="quiz-select-title">Rust Backend</span>
          <span className="quiz-select-count">{quizConfigs.rust.questions.length} questions</span>
        </button>
      </div>
    </div>
  );
};

export default QuizSelector;
