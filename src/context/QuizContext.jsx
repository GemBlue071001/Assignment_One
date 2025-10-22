import { useState } from 'react';
import { QuizContext } from './QuizContextDefinition';

export const QuizProvider = ({ children }) => {
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const selectAnswer = (questionIndex, answer) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [questionIndex]: answer
        }));
    };

    const value = {
        selectedAnswers,
        showResults,
        setShowResults,
        currentQuestion,
        setCurrentQuestion,
        selectAnswer
    };

    return (
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    );
};