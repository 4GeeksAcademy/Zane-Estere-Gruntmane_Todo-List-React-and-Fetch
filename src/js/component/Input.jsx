import React from "react";

const Input = ({ todo, trash, total }) => {

  return (
    <div className="container-fluid">

      <div className="todo-items bg-light shadow-sm bg-body-tertiary rounded m-auto">

        <i className="fa-regular fa-square-check ms-3" style={{ color: "#23c474"}}></i>
        <span className="todos-text">{todo}</span>
        <button className="todos-trash btn" onClick={trash}> 
          <i className="fa-solid fa-delete-left" style={{ color: "#ff0000" }}></i>
        </button>

      </div>

      <div className="total-todos fs-6 fw-light">{total}</div>

    </div >

  )
}

export default Input;
