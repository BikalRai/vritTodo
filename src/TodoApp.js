import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [firstEntry, setFirstEntry] = useState('');
    const [secondEntry, setSecondEntry] = useState('');

    const [edit, setEdit] = useState(false);
    const [editIndex, setEditIndex] = useState(-1);

    // handle first input
    const handleFirstInput = ({ target: { value } }) => {
        setFirstEntry(value);
        console.log(firstEntry);
    };

    // handle second input
    const handleSecondInput = ({ target: { value } }) => {
        setSecondEntry(value);
        console.log(secondEntry);
    };

    // handle to add
    const handleAddTodo = () => {
        if (edit) {
            setTodos((prev) => {
                prev[editIndex].first = firstEntry;
                prev[editIndex].second = secondEntry;
                return prev;
            });
            setEdit(false);
            setEditIndex(-1);
        } else {
            setTodos((prev) => {
                return [...prev, { first: firstEntry, second: secondEntry }];
            });
        }

        setFirstEntry('');
        setSecondEntry('');
    };

    //handle edit
    const handleEdit = (index) => {
        setFirstEntry(todos[index].first);
        setSecondEntry(todos[index].second);
        setEdit(true);
        setEditIndex(index);
    };

    // handling delete
    const handleDelete = (index) => {
        setTodos((prev) => {
            const newArr = [...prev];
            newArr.splice(index, 1);
            return newArr;
        });
    };

    return (
        <>
            <form>
                {/* <input
                    type="text"
                    value={firstEntry}
                    onChange={handleFirstInput}
                /> */}
                {/* <TextField
                    id="standard-basic"
                    className="first-entry"
                    label="First Entry"
                    variant="standard"
                    value={firstEntry}
                    onChange={handleFirstInput}
                /> */}
                <TextField
                    id="standard-entry-input"
                    label="First entry"
                    type="text"
                    variant="filled"
                    value={firstEntry}
                    onChange={handleFirstInput}
                />
                {/* <input
                    type="text"
                    value={secondEntry}
                    onChange={handleSecondInput}
                /> */}
                {/* <TextField
                    id="standard-basic"
                    className="second-entry"
                    label="Second Entry"
                    variant="standard"
                    value={secondEntry}
                    onChange={handleSecondInput}
                /> */}
                <TextField
                    id="standard-entry-input"
                    label="Second entry"
                    type="text"
                    variant="filled"
                    value={secondEntry}
                    onChange={handleSecondInput}
                />
                {/* <button type="button" onClick={handleAddTodo}>
                    {edit ? 'Update' : '+'}
                </button> */}
                <Button
                    variant="contained"
                    color="success"
                    onClick={handleAddTodo}
                    type="submit"
                >
                    {edit ? 'Update' : '+'}
                </Button>

                <hr />
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            {index + 1} <span>{todo.first}</span>
                            <span>{todo.second}</span>
                            {/* <button
                                type="button"
                                onClick={() => handleEdit(index)}
                            >
                                Edit
                            </button> */}
                            <Button
                                variant="outlined"
                                href="#outlined-buttons"
                                onClick={() => handleEdit(index)}
                            >
                                Edit
                            </Button>
                            {/* <button type="button">Delete</button> */}
                            <Button
                                variant="outlined"
                                href="#outlined-buttons"
                                onClick={() => handleDelete(index)}
                            >
                                Delete
                            </Button>
                        </li>
                    ))}
                </ul>
            </form>
        </>
    );
};

export default TodoApp;
