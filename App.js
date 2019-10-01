/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state={
    value:''
  }
  pressclear=()=>{
    this.setState({
      value:''
    })
  }
  press0=()=>{
    const number=this.state.value+"0";
    this.setState({
      value:number
    })
  }
  press1=()=>{
    const number=this.state.value+"1";
    this.setState({
    value:number
  })
}
  press2=()=>{
    const number=this.state.value+"2";
    this.setState({
    value:number
  })
}
  press3=()=>{
    const number=this.state.value+"3";
    this.setState({
    value:number
  })
  }
  press4=()=>{
    const number=this.state.value+"4";
    this.setState({
    value:number
  })
}
press5=()=>{
  const number=this.state.value+"5";
  this.setState({
  value:number
})
}
press6=()=>{
  const number=this.state.value+"6";
  this.setState({
  value:number
})
}
press7=()=>{
  const number=this.state.value+"7";
  this.setState({
  value:number
})
}
press8=()=>{
  const number=this.state.value+"8";
  this.setState({
  value:number
})
}
press9=()=>{
  const number=this.state.value+"9";
  this.setState({
  value:number
})
}
pressplus=()=>{
  const plus= this.state.value+"+";
  this.setState({
      value:plus
  })
}
pressminus=()=>{
  const minus= this.state.value+"-";
  this.setState({
      value:minus
  })
}
pressinto=()=>{
  const into= this.state.value+"*";
  this.setState({
      value:into
  })
}
pressdivision=()=>{
  const division= this.state.value+"/";
  this.setState({
      value:division
  })
}
pressmodular=()=>{
  const modular= this.state.value+"%";
  this.setState({
      value:modular
  })
}
pressequal=()=>{
  const result=eval(this.state.value);
  this.setState({
      value:result
  })
}
  render(){
    return(
      <View style={styles.container}>
        <Text style={{color:'white', fontSize:20, textAlign:'center', backgroundColor:'#090622'}}>Calculator</Text>
        <View style={styles.resultcont}>
          <TextInput editable={false} style={{flex:1, color:'white', fontSize:50}}><Text>{this.state.value}</Text></TextInput>
        </View>
        <View style={styles.inputcont}>
          <View style={styles.numbercont}>
            <View style={{flex:1, flexDirection:'row',justifyContent:'space-around'}}>
              <TouchableOpacity style={{backgroundColor:'#25255A',borderRadius:50, justifyContent:'center', alignItems:'center', width:70, height:70}} onPress={this.press1}><Text style={{color:'red', fontSize:30}}>1</Text></TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'#25255A',borderRadius:50, justifyContent:'center', alignItems:'center', width:70, height:70}} onPress={this.press2}><Text style={{color:'red', fontSize:30}}>2</Text></TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'#25255A',borderRadius:50, justifyContent:'center', alignItems:'center', width:70, height:70}} onPress={this.press3}><Text style={{color:'red', fontSize:30}}>3</Text></TouchableOpacity>
            </View>
            <View style={{flex:1, flexDirection:'row',justifyContent:'space-around'}}>
              <TouchableOpacity style={{backgroundColor:'#25255A',borderRadius:50, justifyContent:'center', alignItems:'center', width:70, height:70}} onPress={this.press4}><Text style={{color:'red', fontSize:30}}>4</Text></TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'#25255A',borderRadius:50, justifyContent:'center', alignItems:'center', width:70, height:70}} onPress={this.press5}><Text style={{color:'red', fontSize:30}}>5</Text></TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'#25255A',borderRadius:50, justifyContent:'center', alignItems:'center', width:70, height:70}} onPress={this.press6}><Text style={{color:'red', fontSize:30}}>6</Text></TouchableOpacity>
            </View>
            <View style={{flex:1, flexDirection:'row',justifyContent:'space-around'}}>
              <TouchableOpacity style={{backgroundColor:'#25255A',borderRadius:50, justifyContent:'center', alignItems:'center', width:70, height:70}} onPress={this.press7}><Text style={{color:'red', fontSize:30}}>7</Text></TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'#25255A',borderRadius:50, justifyContent:'center', alignItems:'center', width:70, height:70}} onPress={this.press8}><Text style={{color:'red', fontSize:30}}>8</Text></TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'#25255A',borderRadius:50, justifyContent:'center', alignItems:'center', width:70, height:70}} onPress={this.press9}><Text style={{color:'red', fontSize:30}}>9</Text></TouchableOpacity>
            </View>
            <View style={{flex:1, flexDirection:'row',justifyContent:'space-around'}}>
              <TouchableOpacity style={{backgroundColor:'#25255A',borderRadius:50, justifyContent:'center', alignItems:'center', width:70, height:70}} onPress={this.pressdot}><Text style={{color:'red', fontSize:30}}>.</Text></TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'#25255A',borderRadius:50, justifyContent:'center', alignItems:'center', width:70, height:70}} onPress={this.press0}><Text style={{color:'red', fontSize:30}}>0</Text></TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'#25255A',borderRadius:50, justifyContent:'center', alignItems:'center', width:70, height:70}} onPress={this.pressequal}><Text style={{color:'red', fontSize:30}}>=</Text></TouchableOpacity>
            </View>
            <View style={{flex:1, flexDirection:'row',justifyContent:'space-around'}}>
              <TouchableOpacity style={{borderRadius:50, justifyContent:'center', alignItems:'center', width:70, height:70}} onPress={this.pressclear}><Text style={{color:'red', fontSize:30}}></Text></TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'#25255A',borderRadius:50, justifyContent:'center', alignItems:'center', width:70, height:70}} onPress={this.pressclear}><Text style={{color:'red', fontSize:30}}>C</Text></TouchableOpacity>
              <TouchableOpacity style={{borderRadius:50, justifyContent:'center', alignItems:'center', width:70, height:70}} onPress={this.pressbrace2}><Text style={{color:'red', fontSize:30}}></Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.operationcont}>
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-around'}}>
              <TouchableOpacity onPress={this.pressplus} style={{backgroundColor:'#25255A',borderRadius:50, justifyContent:'center', alignItems:'center', width:70, height:70}}><Text style={{color:'red', fontSize:30}}>+</Text></TouchableOpacity>
            </View>
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-around'}}>
              <TouchableOpacity onPress={this.pressminus} style={{backgroundColor:'#25255A',borderRadius:50, justifyContent:'center', alignItems:'center', width:70, height:70}}><Text style={{color:'red', fontSize:30}}>-</Text></TouchableOpacity>
            </View>
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-around'}}>
              <TouchableOpacity onPress={this.pressinto} style={{backgroundColor:'#25255A',borderRadius:50, justifyContent:'center', alignItems:'center', width:70, height:70}}><Text style={{color:'red', fontSize:30}}>*</Text></TouchableOpacity>
            </View>
            <View style={{flex:1, flexDirection:'row',justifyContent:'space-around'}}>
              <TouchableOpacity onPress={this.pressdivision} style={{backgroundColor:'#25255A',borderRadius:50, justifyContent:'center', alignItems:'center', width:70, height:70}}><Text style={{color:'red', fontSize:30}}>/</Text></TouchableOpacity>
            </View>
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-around'}}>
              <TouchableOpacity onPress={this.pressmodular} style={{backgroundColor:'#25255A',borderRadius:50, justifyContent:'center', alignItems:'center', width:70, height:70}}><Text style={{color:'red', fontSize:30}}>%</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column'
  },
  resultcont:{
    flex:1,
    backgroundColor:'#090622',
    width:500,
    height:700,
  },
  inputcont:{
    flex:2,
    flexDirection:'row',
    backgroundColor:'#0D0831',
  },
  numbercont:{
    flex:3,
    backgroundColor:'#0D0831',
    flexDirection:'column'
  },
  operationcont:{
    flex:1,
    backgroundColor:'#242449',
  }
})
