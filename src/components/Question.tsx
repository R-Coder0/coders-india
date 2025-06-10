    import React from 'react';

    interface QuestionProps {
      question: {
        id: string | number;
        question: string;
        options: (string | number | React.Key | React.ReactElement | null | undefined)[];
      };
      selectedAnswer: string | number | React.Key | React.ReactElement | null | undefined;
      onAnswerSelect: (option: string | number | React.Key | React.ReactElement | null | undefined) => void;
    }

    function Question({ question, selectedAnswer, onAnswerSelect }: QuestionProps) {
      return (
        <div className="mb-4">
          <p className="text-lg font-medium text-gray-700 mb-4">{question?.question}</p>
          <ul className="space-y-2">
            {question?.options.map(
              (
                option:
                  | string
                  | number
                  | React.Key
                  | React.ReactElement
                  | null
                  | undefined
              ) => (
                <li key={typeof option === 'string' || typeof option === 'number' ? option : String(option)}>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-5 w-5 text-blue-600"
                      name={`question-${question?.id}`}
                      value={option != null ? String(option) : ''}
                      checked={selectedAnswer === option}
                      onChange={() => onAnswerSelect(option)}
                    />
                    <span className="ml-2 text-gray-700">{option}</span>
                  </label>
                </li>
              )
            )}
          </ul>
        </div>
      );
    }

    export default Question;
    