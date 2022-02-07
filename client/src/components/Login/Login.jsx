import { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import UserNameGen from "username-generator";
import "./Login.css";

const Login = ({ onSubmitId }) => {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitId(idRef.current.value);
  };

  const generateUserName = () => {
    onSubmitId(UserNameGen.generateUsername("-"));
  };

  return (
    <Container className="align-items-center d-flex login-container">
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Form.Group className="mt-3">
          <Button type="submit" className="me-2">
            Login
          </Button>
          <Button onClick={generateUserName} variant="secondary">
            Create A New Id
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Login;
