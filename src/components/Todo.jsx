import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const Todo = () => {
  const [formdata, setFormData] = useState({
    student: "",
    studentFeedback: "",
  });
  const [todolist, setTodoList] = useState([]);
  const onsubmit =(e)=>{
    e.preventDefault();
    console.log('submited')
  }

  return (
    <>
    <Form className='d-flex align-items-center flex-column' onSubmit={(e)=>{
      onsubmit(e)
    }}>
      <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
        <Form.Label>Student Name </Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
        <Form.Label>Student FeedBack </Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>

    </>
  );
};

export default Todo;
