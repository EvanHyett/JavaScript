import React, {useState} from "react";

const Todo = () => {
    let [todo, setTodo] = useState("");
    let [isDone, setIsDone] = useState(false);

    let [list, setList] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();

        let todoObj = {todo, isDone};

        setList([...list, todoObj])
    }

    const check = (e, i) => {
        let copyOfList = [...list]

        copyOfList[i].isDone = e.target.checked;

        setList(copyOfList);
    }

    const deleteTask = (e, i) => {
        let filteredCopy = list.filter((task, idx) => {
            return idx!=i
        })

        setList(filteredCopy);
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                    <label>To Do:</label>
                    <input onChange={(e)=>setTodo(e.target.value)} type="text" />
                    <div>
                        <input type="submit" value="Add" className="btn btn-success mt-3" />
                    </div>
                </form>
            <hr />
            <div className="todoList">
                {
                    list.map((item, i)=> {
                        return(
                            <div className="list" key={i} style={{textDecoration: item.isDone? "line-through": "none"}}>
                                <p>{item.todo} <input type="checkbox" onClick={(e)=>check(e,i)} /> </p>
                                <button onClick={(e)=>deleteTask(e,i)} className="btn btn-danger m-3" >Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Todo;