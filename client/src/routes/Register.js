import React, { useState } from 'react';
import { Button, Input, Container, Header } from 'semantic-ui-react';
import { gql, useMutation } from '@apollo/client';

const Register = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

  const [registerUser, response] = useMutation(registerMutation);

  const onSubmit = async () => {
      
     await registerUser({variables: {username, email, password}})
    console.log(response);
  };

//   const onChange = e => {
//     // const { name, value } = e.target;
//     // name = "email";
//     setFormState({
//          username: e.target.value, 
//         email: e.target.value,
//         password: e.target.value,
//         });
//   };
  
    return (
      <Container text>
        <Header as="h2">Register</Header>
        <Input
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Username"
          fluid
        />
        <Input name="email" 
        onChange={(e) => setEmail(e.target.value)}
        value={email} placeholder="Email" fluid />
        <Input
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          fluid
        />
        <Button onClick={onSubmit}>Submit</Button>
      </Container>
    );
  }

const registerMutation = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password)
  }
`;

export default Register;
