import { StatusBar } from 'expo-status-bar';
import{Feather} from "@expo/vector-icons"
import { StyleSheet, View,Text, Image, FlatList, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Task } from './src/componentes/Task';
import { InputAddTask } from './src/componentes/InputAddTask/Index';
import { useEffect, useState } from 'react';
import { TaskText } from './src/componentes/Task/style';

export default function App() {
  const [tasks,setTask]= useState<{description:string; check:boolean}[]>([]);
  const [taskText,setTaskText]= useState ("");
  const [countTask,setCountTask]= useState(0);
  
  function handleTaskAd(){
   if(taskText===""){
     return Alert.alert("Erro, tarefa está sem descrição");
   }
  if(tasks.some((task)=>task.description===taskText)){
   return Alert.alert("Erro, tarefa já existe");

  }
    const newTask ={description:taskText,check:false};
    setTask([...tasks,newTask]);
    setTaskText('');
  }

  useEffect(()=>{
    let totalTask= tasks.length;
    setCountTask(totalTask);
  },[tasks]);
  return (
    <View style={styles.container}> 
    <StatusBar style ="auto"/> 
    <View style={styles.InputContainer}>
   <TextInput
      style={styles.Input}
      placeholder='Digite algo...'
      placeholderTextColor={"black"}
      keyboardType='default'
      onChangeText={setTaskText}
      value={taskText}
   />
   <TouchableOpacity style={styles.InputButton}onPress={handleTaskAd}>
      <Feather name = "plus-square" size={50} color={"white"}/>
   
   </TouchableOpacity>
  </View>
  <View style={styles.tasks}>
   <Text> Total de tarefas cadastradas:{countTask}</Text>
      <FlatList
      data={tasks}
      keyExtractor={(item,index)=>index.toString()}
      renderItem={({item})=>(
        <Task/>
      )
    }
    ListEmptyComponent={()=>(
   <View> 
    <Text>Opa,cadastre alguma 
      tarefa!
      </Text>
   </View>
    )
  }
    />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FF9933',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding:16,
    paddingTop:64,
    gap:16,
  },
  InputContainer:{
    flexDirection:'row',
    borderRadius:4,
    backgroundColor:'#FEFCFC',

  },
  Input:{
  flex:1,
  padding:16,
  color:'black',

  },
  InputButton:{
    backgroundColor:'black',
    padding:16,
    borderRadius:4,
  },
  tasks:{
    justifyContent:'flex-start',
    flexDirection:'column',

  }
});
