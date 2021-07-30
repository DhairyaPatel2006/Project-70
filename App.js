import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';




export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: {screen: WriteStoryScreen},
  ReadStory: {screen: ReadStoryScreen},
},
/*{defaultNavigationOptions : ({navigation}) => ({
    tabBarIcon : () => { const routeName = navigation.state.routeName 
                         if(routeName === "Transaction"){
                          return( <Image source = {require("./assets/booklogo.jpg")}
                                  style = {styles.booklogo}>
                           </Image>
                         }
                         else if(routeName === "Search"){
                           <Image source ={require("./assets/searchingbook.png")}
                                  style = {styles.booklogo}>
                           </Image>                         
                         }
                         }
})*/

{ defaultNavigationOptions: ({navigation})=> ({ 
  tabBarIcon: () =>{ const routeName = navigation.state.routeName; 
   if(routeName === "WriteStory"){ 
     return( <Image source={require("./assets/write[1].png")} 
              style={{width:40, height:40}} /> ) } 
              else if(routeName === "ReadStory")
              { return( <Image source={require("./assets/read[1].png")} 
              style={{width:40, height:40}} />) } } }) } );


const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  booklogo : {
    width : 50,
    height : 50
  }
});




