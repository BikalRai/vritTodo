import React, { useState } from 'react';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState({
        firstName: '',
        lastName: '',
    });

    const [edit, setEdit] = useState(false);
    const { firstName, lastName } = inputValue;

    // handle first input
    const handleFirstInput = ({ prev, target: { value } }) => {
        setInputValue({ ...inputValue, firstName: value });
        console.log(inputValue);
    };

    // handle second input
    const handSecondInput = ({ prev, target: { value } }) => {
        setInputValue({ ...inputValue, lastName: value });
        console.log(inputValue);
    };

    // handle to add
    const handleAddTodo = () => {
        setTodos((prev) => [...prev, inputValue]);
        console.log(todos);
        setInputValue({ ...inputValue, firstName: '', lastName: '' });
    };

    //handle edit
    const handleEditOne = (index) => {
        // setInputValue(todos[index].firstName);
        console.log(todos[0].firstname);
        setEdit(true);
    };

    return (
        <>
            <form>
                <input
                    type="text"
                    value={firstName}
                    onChange={handleFirstInput}
                />
                <input
                    type="text"
                    value={lastName}
                    onChange={handSecondInput}
                />
                <button type="button" onClick={handleAddTodo}>
                    {edit ? 'Update' : '+'}
                </button>
                <hr />
                <ul>
                    {todos.map((todo, index) => (
                        <ul key={index}>
                            <li>
                                {todo.firstName}
                                <button
                                    type="button"
                                    onClick={() => handleEditOne(index)}
                                >
                                    Edit
                                </button>
                                <button type="button">Delete</button>
                            </li>
                            <li>
                                {todo.lastName}
                                <button type="button">Edit</button>
                                <button type="button">Delete</button>
                            </li>
                        </ul>
                    ))}
                </ul>
            </form>
        </>
    );
};

export default TodoApp;
