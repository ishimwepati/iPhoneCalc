/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component<Props> {

  state={text:"", res: 0, number1:""}
  
  render() {
    return (
      <View style={styles.container}>
              <View style={styles.entered}>
                    <Text style={{fontSize:30}}>{this.state.text}</Text>
              </View>
               <View style={styles.entered}>
                    <Text style={{fontSize:30}}>{this.state.res}</Text>
              </View>
              
              <View style={styles.digits}>
                      <View style={styles.number}>

                          <TouchableOpacity style={styles.roundSymbol} 
                           onPress={()=>{
                                  this.setState({text:"", res:""})
                              }}
                          >
                              <Text style={styles.textSymbol}>C</Text>

                          </TouchableOpacity>


                          <TouchableOpacity style={styles.roundButton}
                              onPress={()=>{
                                  this.setState({text:this.state.text+7})
                              }}
                          >  
                              <Text style={styles.textButton}>7</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.roundButton}
                              onPress={()=>{
                                  this.setState({text:this.state.text+4})
                              }}
                          >
                              <Text style={styles.textButton}>4</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.roundButton}
                              onPress={()=>{
                                  this.setState({text:this.state.text+1})
                              }}
                          >
                              <Text style={styles.textButton}>1</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.roundButton}
                              onPress={()=>{
                                  this.setState({text:this.state.text+0})
                              }}
                          >
                              <Text style={styles.textButton}>0</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={styles.number}>
                          <TouchableOpacity style={styles.roundSymbol}
                                 onPress={()=>{
                      this.setState({text:this.state.text.slice(0, this.state.text.length-1)})
                        //oldStr.slice(0, oldStr.length-1);
                  }}
                          >
                              <Text style={styles.textSymbol}>Del</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.roundButton}
                              onPress={()=>{
                                  this.setState({text:this.state.text+8})
                              }}
                          >
                              <Text style={styles.textButton}>8</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.roundButton}
                              onPress={()=>{
                                  this.setState({text:this.state.text+5})
                              }}
                          >
                              <Text style={styles.textButton}>5</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.roundButton}
                              onPress={()=>{
                                  this.setState({text:this.state.text+2})
                              }}
                          >
                              <Text style={styles.textButton}>2</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.roundButton}
                               onPress={()=>{
                                  this.setState({text:this.state.text+'-'})
                              }}
                          >
                              <Text style={styles.textButton}>+/-</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={styles.number}>
                          <TouchableOpacity style={styles.roundSymbol}>
                              <Text style={styles.textSymbol}>%</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.roundButton}
                              onPress={()=>{
                                  this.setState({text:this.state.text+9})
                              }}
                          >
                              <Text style={styles.textButton}>9</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.roundButton}
                              onPress={()=>{
                                  this.setState({text:this.state.text+6})
                              }}
                          >
                              <Text style={styles.textButton}>6</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.roundButton}
                                  onPress={()=>{
                                  this.setState({text:this.state.text+3})
                              }}
                          >
                              <Text style={styles.textButton}>3</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.roundButton}
                              onPress={()=>{
                                  this.setState({text:this.state.text+'.'})
                              }}
                          >
                              <Text style={styles.textButton}>.</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={styles.number}>
                          <TouchableOpacity style={styles.roundSign}>
                              <Text style={styles.textButton}>/</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.roundSign}>
                              <Text style={styles.textButton}>x</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.roundSign}>
                              <Text style={styles.textButton}>-</Text>
                          </TouchableOpacity>
{/*============================== Addition ============================================*/}
                          <TouchableOpacity style={styles.roundSign}
                                onPress={()=>{
                                  this.setState({number1: this.state.text, text:""})
                                  
                              }}
                          >
                              <Text style={styles.textButton}>+</Text>
                          </TouchableOpacity>
{/*==========================================================================*/}

                          <TouchableOpacity style={styles.roundSign}
                                  onPress={()=>{
                                  this.setState({res: +this.state.number1 + +this.state.text, number1: this.state.res})

                                  
                              }}
                          >
                          
                              <Text style={styles.textButton}>=</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={styles.signs}>
                          
                      </View>
              </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
   
  },
        entered: {
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        },
        
        digits: {
          flex: 7,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          backgroundColor: '#2f3e46',
        },
                number: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',

                
              },
             
                        roundButton : {
                                  
                            borderWidth:1,
                            borderColor:'rgba(0,0,0,0.2)',
                            alignItems:'center',
                            justifyContent:'center',
                            width:70,
                            height:70,
                            backgroundColor:'#000011',
                            borderRadius:90,
                            marginTop: 15,
                                },

                        roundSign : {
                                  
                            borderWidth:1,
                            borderColor:'rgba(0,0,0,0.2)',
                            alignItems:'center',
                            justifyContent:'center',
                            width:70,
                            height:70,
                            backgroundColor:'#e59500',
                            borderRadius:90,
                            marginTop: 15,
                                },

                        roundSymbol : {
                                  
                            borderWidth:1,
                            borderColor:'rgba(0,0,0,0.2)',
                            alignItems:'center',
                            justifyContent:'center',
                            width:70,
                            height:70,
                            backgroundColor:'#e5dada',
                            borderRadius:90,
                            marginTop: 15,
                                },

                                         textButton : {
                                          fontSize: 30,
                                          color: '#ffffff'
                                        },

                                        textSymbol: {
                                          fontSize: 30,
                                          color: '#000000',
                                        },
              
        
});
