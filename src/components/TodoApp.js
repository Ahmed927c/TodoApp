import React, { useState } from "react";
import "./todoapp.css";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };

      setTaskList([...tasklist, taskDetails]);
    }
  };
  const EditTask = (id) => {
    const newTask = prompt("Enter the new task");
    setTaskList(tasklist
      .map((task) => {
        if (task.id === id) {
          task.value = newTask;
        }
        return task;
      })
    );
  };
  const deletetask = (e, id) => {
    e.preventDefault();
    setTaskList(tasklist.filter((t) => t.id !== id));
  };

  const taskCompleted = (e, id) => {
    e.preventDefault();
    //let's find index of element
    const element = tasklist.findIndex((elem) => elem.id === id);

    //copy array into new variable
    const newTaskList = [...tasklist];

    //edit our element
    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };

    setTaskList(newTaskList);
  };

  return (
    <div className="todo">
      <ul>
        {tasklist.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.isCompleted ? "line-through" : "none",
              }}
            >
              {task.value}
            </span>
            <button className="delete" onClick={(e) => deletetask(e, task.id)}>Delete</button>
            <button className="Edit" onClick={(e) => EditTask(task.id)}>Edit</button>
            <button  className="completed" onClick={(e) => taskCompleted(e, task.id)}>Completed</button>
          </li>
        ))}
      </ul>
      <input type="text" onChange={handleChange} />
      <button className="add-btn" onClick={AddTask}>Add Task</button>
    </div>
  );
}











//     <div className="todo">
//       <input
//         type="text"
//         name="text"
//         id="text"
//         onChange={(e) => handleChange(e)}
//         placeholder="Add task here..."
//       />
//       <button className="add-btn" onClick={AddTask}>
//         Add
//       </button>
      
//       <br />
//       {tasklist !== [] ? (
//         <ul>
//           {tasklist.map((t) => (
//             <li className={t.isCompleted ? "crossText" : "listitem"}>
//               {t.value}
//               <button
//                 className="completed"
//                 onClick={(e) => taskCompleted(e, t.id)}
//               >
//                 Completed
//               </button>

//               <button className="delete" onClick={(e) => deletetask(e, t.id)}>
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       ) : null}
//     </div>
//   );
// }

export default TodoApp;
