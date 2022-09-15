import React,{useState} from 'react';
import {View,Text,useWindowDimension} from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';

const NewsTab = () => {
  const layout = useWindowDimension();
  const [index,setIndex] = useState(1);
  const routes = useState([
    {key: "first" , title: "Discover"},
    {key: "second" , title: " News"},
  ]);
  return(
    <TabView
      navigationState = {{index,routes}}
      renderScene = {renderScene}
      onIndexChange = {setIndex}
      initialLayout = {{width: layoutwidth}}
    />
  );
};

export default NewsTab;