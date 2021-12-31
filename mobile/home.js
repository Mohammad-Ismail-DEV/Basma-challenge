import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import {useNavigate} from 'react-router-native';

const Home = () => {
  let navigate = useNavigate();

  const handleChange = () => {
    navigate('/login');
  };
  return (
    <ScrollView>
      <View>
        <Text>this is the home page</Text>
        <Button onPress={() => handleChange()} title="Login"></Button>
      </View>
    </ScrollView>
  );
};

export default Home;
