import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../store';

interface Option {
  optionId: string;
  option: string;
  checked: boolean;
}

interface Todo {
  questionId: string;
  questionValue: string;
  questionOptions: Option[];
}

export const TestAnswer = () => {
  const { test } = useAppSelector();
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(test);

  useEffect(() => {
    setTodos(test?.test);
  }, [test?.test]);

  const changeCheckboxHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    questionId: string,
    optionId: string
  ) => {
    setTodos(
      todos?.map((el) => {
        if (el.questionId === questionId) {
          const updateChecked = el.questionOptions.map((item) => {
            if (item.optionId === optionId) {
              return { ...item, checked: !item.checked };
            }
            return item;
          });
          return { ...el, questionOptions: updateChecked };
        }
        return el;
      })
    );
  };
  return (
    <div>
      <h1>TestAnswer</h1>
      <div>
        {todos?.map((el) => (
          <div key={el.questionId}>
            <h1>{el.questionValue}</h1>
            {el?.questionOptions.map((item) => (
              <div key={item.optionId}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    changeCheckboxHandler(e, el.questionId, item.optionId)
                  }
                />
                <h3>{item.option}</h3>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
