import React, { useState } from 'react';
import Quiz, { Question } from './Quiz';
import androidQuestions from '../data/androidQuizQuestions.json';
import rustQuestions from '../data/rustQuizQuestions.json';
import swiftQuestions from '../data/swiftQuizQuestions.json';
import typescriptQuestions from '../data/typescriptQuizQuestions.json';
import devopsQuestions from '../data/devopsQuizQuestions.json';
import systemDesignQuestions from '../data/systemDesignQuizQuestions.json';
import aiMlQuestions from '../data/aiMlQuizQuestions.json';
import cybersecurityQuestions from '../data/cybersecurityQuizQuestions.json';
import embeddedSystemsQuestions from '../data/embeddedSystemsQuizQuestions.json';
import productDesignQuestions from '../data/productDesignQuizQuestions.json';
import './Quiz.css';

type QuizType = 'android' | 'rust' | 'swift' | 'typescript' | 'devops' | 'systemDesign' | 'aiMl' | 'cybersecurity' | 'embeddedSystems' | 'productDesign' | null;

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
  swift: {
    questions: swiftQuestions as Question[],
    title: 'Swift iOS Quiz',
  },
  typescript: {
    questions: typescriptQuestions as Question[],
    title: 'TypeScript React Quiz',
  },
  devops: {
    questions: devopsQuestions as Question[],
    title: 'DevOps Quiz',
  },
  systemDesign: {
    questions: systemDesignQuestions as Question[],
    title: 'System Design Quiz',
  },
  aiMl: {
    questions: aiMlQuestions as Question[],
    title: 'AI & Machine Learning Quiz',
  },
  cybersecurity: {
    questions: cybersecurityQuestions as Question[],
    title: 'Cybersecurity Quiz',
  },
  embeddedSystems: {
    questions: embeddedSystemsQuestions as Question[],
    title: 'Embedded Systems Quiz',
  },
  productDesign: {
    questions: productDesignQuestions as Question[],
    title: 'Product Design Quiz',
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
          onClick={() => setSelectedQuiz('swift')}
        >
          <span className="quiz-select-title">Swift iOS</span>
          <span className="quiz-select-count">{quizConfigs.swift.questions.length} questions</span>
        </button>
        <button
          className="quiz-select-button"
          onClick={() => setSelectedQuiz('rust')}
        >
          <span className="quiz-select-title">Rust Backend</span>
          <span className="quiz-select-count">{quizConfigs.rust.questions.length} questions</span>
        </button>
        <button
          className="quiz-select-button"
          onClick={() => setSelectedQuiz('typescript')}
        >
          <span className="quiz-select-title">TypeScript React</span>
          <span className="quiz-select-count">{quizConfigs.typescript.questions.length} questions</span>
        </button>
        <button
          className="quiz-select-button"
          onClick={() => setSelectedQuiz('devops')}
        >
          <span className="quiz-select-title">DevOps</span>
          <span className="quiz-select-count">{quizConfigs.devops.questions.length} questions</span>
        </button>
        <button
          className="quiz-select-button"
          onClick={() => setSelectedQuiz('systemDesign')}
        >
          <span className="quiz-select-title">System Design</span>
          <span className="quiz-select-count">{quizConfigs.systemDesign.questions.length} questions</span>
        </button>
        <button
          className="quiz-select-button"
          onClick={() => setSelectedQuiz('aiMl')}
        >
          <span className="quiz-select-title">AI & ML</span>
          <span className="quiz-select-count">{quizConfigs.aiMl.questions.length} questions</span>
        </button>
        <button
          className="quiz-select-button"
          onClick={() => setSelectedQuiz('cybersecurity')}
        >
          <span className="quiz-select-title">Cybersecurity</span>
          <span className="quiz-select-count">{quizConfigs.cybersecurity.questions.length} questions</span>
        </button>
        <button
          className="quiz-select-button"
          onClick={() => setSelectedQuiz('embeddedSystems')}
        >
          <span className="quiz-select-title">Embedded Systems</span>
          <span className="quiz-select-count">{quizConfigs.embeddedSystems.questions.length} questions</span>
        </button>
        <button
          className="quiz-select-button"
          onClick={() => setSelectedQuiz('productDesign')}
        >
          <span className="quiz-select-title">Product Design</span>
          <span className="quiz-select-count">{quizConfigs.productDesign.questions.length} questions</span>
        </button>
      </div>
    </div>
  );
};

export default QuizSelector;
