import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quiz from './Quiz';
import questions from '../data/rustQuizQuestions.json';

// Mock the setTimeout to control its behavior in tests
jest.useFakeTimers();

describe('Quiz Component', () => {
  beforeEach(() => {
    // Reset question index and score before each test if necessary
    // (This is implicitly handled by re-rendering the component)
  });

  test('renders the first question and options', () => {
    render(<Quiz />);

    expect(screen.getByText(questions[0].question)).toBeInTheDocument();
    questions[0].options.forEach(option => {
      expect(screen.getByRole('button', { name: option })).toBeInTheDocument();
    });
    expect(screen.getByText('Question 1 of ' + questions.length)).toBeInTheDocument();
  });

  test('handles correct answer and increments score', async () => {
    render(<Quiz />);

    const correctOption = questions[0].answer;
    fireEvent.click(screen.getByRole('button', { name: correctOption }));

    expect(screen.getByText('Correct!')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: correctOption })).toHaveClass('correct');

    jest.advanceTimersByTime(1500);

    await waitFor(() => {
      expect(screen.queryByText('Correct!')).not.toBeInTheDocument();
      expect(screen.getByText(questions[1].question)).toBeInTheDocument();
    });
  });

  test('handles incorrect answer and displays feedback', async () => {
    render(<Quiz />);

    const incorrectOption = questions[0].options.find(opt => opt !== questions[0].answer);
    if (!incorrectOption) throw new Error("Could not find an incorrect option.");

    fireEvent.click(screen.getByRole('button', { name: incorrectOption }));

    expect(screen.getByText(/Incorrect\. The answer was:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: incorrectOption })).toHaveClass('incorrect');

    jest.advanceTimersByTime(1500);

    await waitFor(() => {
      expect(screen.queryByText(/Incorrect\. The answer was:/i)).not.toBeInTheDocument();
      expect(screen.getByText(questions[1].question)).toBeInTheDocument();
    });
  });

  test('advances through questions', async () => {
    render(<Quiz />);

    for (let i = 0; i < questions.length - 1; i++) {
      const correctOption = questions[i].answer;
      fireEvent.click(screen.getByRole('button', { name: correctOption }));
      jest.advanceTimersByTime(1500);
      await waitFor(() => {
        expect(screen.getByText(questions[i + 1].question)).toBeInTheDocument();
      });
    }
  });

  test('displays final score upon quiz completion', async () => {
    render(<Quiz />);

    let expectedScore = 0;
    for (let i = 0; i < questions.length; i++) {
      const correctOption = questions[i].answer;
      fireEvent.click(screen.getByRole('button', { name: correctOption }));
      expectedScore++;
      jest.advanceTimersByTime(1500);
    }

    await waitFor(() => {
      expect(screen.getByText('Quiz Completed!')).toBeInTheDocument();
      expect(screen.getByText(`Your final score is: ${expectedScore} out of ${questions.length}`)).toBeInTheDocument();
    });
  });
});
