import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width:100%;
  height:50px;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  background-color:#fff;
  border-radius:4px ;
  overflow:hidden;
  margin-bottom:16px;
  `;

  export const TaskText = styled.Text`
  color:'#007FFF';
  font-size:16px;
  font-weight:100;
  `
  export const Taskdone = styled.TouchableOpacity`
  weight:100px;
  height:100px;
  background-color:#007FFF;
  justify-content:center;
  align-content:center;

  `
  export const TaskDelete = styled.TouchableOpacity`
  weight:56px;
  height:56px;
  background-color:'#B12C2C';
  justify-content:center;
  align-content:center;
  `
  export const InputContainer= styled.View`
flex-direction:row;
width:100%;
`;

export const Input= styled.TextInput`
backgroundColor:#FEFCFC;
flex:1;
padding:16px;
border-radius:4px;
color:#FEFCFC;

`;

