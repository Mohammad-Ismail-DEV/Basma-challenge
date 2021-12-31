import React from 'react';
import {Button, ScrollView, Text} from 'react-native';
import {useNavigate} from 'react-router-native';
import {postLogin} from './axios';

const Login = () => {
  let navigate = useNavigate();

  const login = () => {
    postLogin({email: 'mohamad.ismail.dev@gmail.com', password: '1471236987Mi'})
      .then(r => {
        navigate('/');
      })
      .catch(e => {
        return console.log(e.message);
      });
  };

  return (
    <ScrollView>
      <Text>this is the login page</Text>
      <Button onPress={() => login()} title="Home"></Button>
    </ScrollView>
  );
};

export default Login;
