import {Feather} from '@expo/vector-icons';
import {InputContainer,Input,InputButton}from './style' ;
import React from 'react';
import {View,TextInput, TouchableOpacity} from 'react-native';

type Props ={
   onPress:()=> void;
   onChargeText:(text:string)=>void;
   onBlur: (e: any) =>void;
   value:string ;
}
export function InputAddTask({onPress,onChargeText,onBlur,value}:Props){
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
      borderRadius: 8,
      padding: 16,
      marginBottom: 10,
      height:70,
      width:300
    }}>
      <TextInput
        style={{ flex: 1 }}
        placeholder="Digite sua tarefa"
        value={value}
        onChangeText={onChargeText}
        onBlur={onBlur}
      />
      <TouchableOpacity onPress={onPress}>
        <Feather name="plus-square" size={40} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

export default InputAddTask;