import{Feather} from "@expo/vector-icons"
import {Container,TaskText,Taskdone,TaskDelete} from "./style"
import { TaskProps,RootStackParamList } from '../../utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useContext } from 'react';
import {useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TaskContext } from "../../context/TaskContext";
import React from "react";

type Props = NativeStackScreenProps<RootStackParamList>;
export function Task (props:TaskProps)
{
  const navigation = useNavigation<Props ['navigation']>();
 const {selectTask}= useContext(TaskContext);

    
function handlePress(){
  navigation.navigate('Detaills')
  selectTask(props)

 }
    return(
     <Container onPress={()=>handlePress()}>
       <Taskdone onPress={props.onCheck} style={props.status?{backgroundColor :'#A020F0'}:{}}>
        {!props.status && <Feather name = "square" size = {40} color ="white" />}
        { props.status && <Feather name = "check" size = {40} color ="black" />}
       </Taskdone> 
       <TaskText>{props.title} </TaskText>
       <TaskDelete onPress={props.onRemove}>
       <Feather name = "trash-2" size = {40} color ="red" />
       </TaskDelete>
     </Container>

    );
}