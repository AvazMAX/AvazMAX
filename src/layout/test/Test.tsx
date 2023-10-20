import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Input } from '../../components/UI/Input/Input';
import { Button } from '../../components/UI/Button/Button';
import { getTest, postTest } from '../../store/test/testThunk';
import { useAppDispatch } from '../../store';

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

const array = [
  {
    questionId: '1',
    questionValue: '',
    questionOptions: [
      {
        optionId: '1',
        option: '',
        checked: false
      }
    ]
  }
];

export const Test = () => {
  const dispatch = useAppDispatch();
  const [todos, setTodos] = useState<Todo[]>(array);

  useEffect(() => {
    dispatch(getTest());
  }, [dispatch]);

  const changeQuestionHandler = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    setTodos(
      todos.map((el) => {
        if (el.questionId == id) {
          return { ...el, questionValue: e.target.value };
        }
        return el;
      })
    );
  };

  const changeOptionHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    questionId: string,
    optionId: string
  ) => {
    setTodos(
      todos.map((el) => {
        if (el.questionId === questionId) {
          const updatedOptions = el.questionOptions.map((item) => {
            if (item.optionId === optionId) {
              return { ...item, option: e.target.value };
            }
            return item;
          });
          return { ...el, questionOptions: updatedOptions };
        }
        return el;
      })
    );
  };

  const addedOptionHandler = (id: string) => {
    setTodos(
      todos.map((el) => {
        if (el.questionId === id) {
          const data = [
            ...el.questionOptions,
            {
              optionId: uuidv4(),
              option: '',
              checked: false
            }
          ];
          return {
            ...el,
            questionOptions: data
          };
        }
        return el;
      })
    );
  };

  const addedHandler = () => {
    const data: Todo = {
      questionId: uuidv4(),
      questionValue: '',
      questionOptions: [
        {
          optionId: uuidv4(),
          option: '',
          checked: false
        }
      ]
    };
    setTodos([...todos, data]);
  };

  const saveHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      todos: todos.map((el) => ({
        questionId: el.questionId,
        questionValue: el.questionValue,
        questionOptions: el.questionOptions.map((item) => ({
          optionId: item.optionId,
          option: item.option,
          checked: item.checked
        }))
      }))
    };
    console.log(data, 'data');
    dispatch(postTest(data.todos));
  };

  return (
    <div>
      <h1>Test</h1>
      <form onSubmit={saveHandler}>
        {todos.map((el) => (
          <div key={el.questionId}>
            <Input
              placeholder="Question"
              type="text"
              value={el.questionValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                changeQuestionHandler(e, el.questionId)
              }
            />
            {el.questionOptions.map((item) => (
              <div key={item.optionId}>
                <Input
                  placeholder="Option"
                  type="text"
                  value={item.option}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    changeOptionHandler(e, el.questionId, item.optionId)
                  }
                />
              </div>
            ))}
            <Button onClick={() => addedOptionHandler(el.questionId)}>Added option</Button>
          </div>
        ))}
        <Button type="submit">Save</Button>
      </form>
      <Button onClick={addedHandler}>Add</Button>
    </div>
  );
};
