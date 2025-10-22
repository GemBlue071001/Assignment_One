import { useState, useEffect } from 'react';
import { QuizProvider } from '../context/QuizContext';
import { useQuizContext } from '../hooks/useQuizContext';
import { quizData } from '../constants/quizes';



// Quiz Display Component
const QuizDisplay = ({ questions }) => {
    const { selectedAnswers, selectAnswer, showResults, setShowResults } = useQuizContext();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => {
        // Reset quiz state when questions change
        setCurrentQuestionIndex(0);
        setShowResults(false);
    }, [questions, setShowResults]);

    const handleAnswerSelect = (answer) => {
        selectAnswer(currentQuestionIndex, answer);
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResults(true);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const calculateScore = () => {
        return questions.reduce((score, question, index) => {
            return selectedAnswers[index] === question.correctAnswer ? score + 1 : score;
        }, 0);
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setShowResults(false);
    };

    if (questions.length === 0) {
        return (
            <div className="alert alert-info">
                No questions available. Please add some questions first.
            </div>
        );
    }

    if (showResults) {
        const score = calculateScore();
        return (
            <div className="card">
                <div className="card-body text-center">
                    <h2 className="text-success mb-4">Quiz Completed! </h2>
                    <h3 className="mb-4">Your score: {score}/{questions.length}</h3>
                    
                    <div className="mb-4">
                        <h5>Review your answers:</h5>
                        {questions.map((question, index) => {
                            const userAnswer = selectedAnswers[index];
                            const isCorrect = userAnswer === question.correctAnswer;
                            
                            return (
                                <div key={index} className="card mb-2">
                                    <div className="card-body">
                                        <h6>Question {index + 1}: {question.question}</h6>
                                        <p>
                                            <strong>Your answer:</strong> 
                                            <span className={isCorrect ? 'text-success' : 'text-danger'}>
                                                {userAnswer || 'Not answered'}
                                            </span>
                                        </p>
                                        {!isCorrect && (
                                            <p>
                                                <strong>Correct answer:</strong> 
                                                <span className="text-success">{question.correctAnswer}</span>
                                            </p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    
                    <button 
                        className="btn btn-primary"
                        onClick={restartQuiz}
                    >
                        Take Quiz Again
                    </button>
                </div>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="card">
            <div className="card-header">
                <h5>Question {currentQuestionIndex + 1} of {questions.length}</h5>
            </div>
            <div className="card-body">
                <h4 className="mb-4">{currentQuestion.question}</h4>
                
                <div className="mb-4">
                    {currentQuestion.answers.map((answer, index) => (
                        <div key={index} className="form-check mb-2">
                            <input
                                className="form-check-input"
                                type="radio"
                                name={`question-${currentQuestionIndex}`}
                                id={`answer-${index}`}
                                checked={selectedAnswers[currentQuestionIndex] === answer}
                                onChange={() => handleAnswerSelect(answer)}
                            />
                            <label className="form-check-label" htmlFor={`answer-${index}`}>
                                {answer}
                            </label>
                        </div>
                    ))}
                </div>
                
                <div className="d-flex justify-content-between">
                    <button
                        className="btn btn-secondary"
                        onClick={handlePrevious}
                        disabled={currentQuestionIndex === 0}
                    >
                        Previous
                    </button>
                    
                    <button
                        className="btn btn-primary"
                        onClick={handleNext}
                        disabled={!selectedAnswers[currentQuestionIndex]}
                    >
                        {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
};

// Main Quiz Component
const QuizContent = () => {
    const questions = quizData;

    return (
        <div className="container mt-4">
            <div className="mb-4">
                <h1>Interactive Quiz</h1>
            </div>

            <QuizDisplay questions={questions} />
        </div>
    );
};

const Quiz = () => {
    return (
        <QuizProvider>
            <QuizContent />
        </QuizProvider>
    );
};

export default Quiz