import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Checkbox } from "@mui/material";
import "../Card/card.css";
const ListCard = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState([]);

  const addTodo = () => {
    if (input.trim !== "") {
      setTodo([...todo, input]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodo = todo.filter((_, i) => i !== index);
    setTodo(updatedTodo);
  };
  return (
    <div className="cardContainer">
      <div className="scroller-div">
        <Card sx={{ minWidth: 275 }} className="card-component">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              List
            </Typography>
            <div className="listContainer">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <div className="unordered-list">
                <ul>
                  {todo.map((todo, index) => (
                    <li key={index} className="todo-list">
                      {todo}
                      <Checkbox onClick={() => deleteTodo(index)} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button onClick={addTodo} className="addTodoButton">Add Todo</button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default ListCard;
