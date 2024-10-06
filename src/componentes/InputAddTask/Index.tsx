import {Feather} from '@expo/vector-icons';
import {InputContainer,Input,InputButton}from './style' ;
import React from 'react';

type Props ={
   onPress:()=> void;
   onChargeText:(text:string)=>void;
   onBlur: (e: any) =>void;
   value:string ;
}
export function InputAddTask({onPress,onChargeText,onBlur,value}:Props){
  return(
  <InputContainer>
  <Input
  placeholder = 'Digite algo'
  placeholderTextColor="black"
  keyboardType='default'
  value={value}
  onChangeText={onChargeText}
  onBlur= {onBlur}
  />
  <InputButton onPress={onPress}>
  <Feather name = "plus-square" size={50} color ="while"/>
  
  </InputButton>

</InputContainer>
);

}
