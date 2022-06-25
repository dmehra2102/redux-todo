import React, { useState } from "react";
import { useNavigate } from "react-router";
import Removetodo from "./Removetodo";
import "./style.css";

function TodoItem({ item, index }) {
      const navigate = useNavigate();
      const handleseemore = () => {
            navigate(`/todo/${item.id}`);
      };
      const [toggole, setToggole] = useState(false);
      return (
            <div className="todo-div" key={item.id}>
                  <p>
                        {index + 1}. <span>{item.title}</span>
                        <span style={{ marginLeft: "10px" }}>
                              <button onClick={() => setToggole(!toggole)}>
                                    {!toggole ? item.status : "Completed"}
                              </button>
                              <button
                                    onClick={handleseemore}
                                    style={{ marginLeft: "10px" }}
                              >
                                    See More
                              </button>
                        </span>
                  </p>
                  <Removetodo id={item.id}/>
            </div>
      );
}

export default TodoItem;
