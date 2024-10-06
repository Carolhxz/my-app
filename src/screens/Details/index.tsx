import React, { useContext } from "react";
import {Container, TitleContainer, TopButton, TopContainer, TopText, Title, StatusContainer, StatusText,TextStatus, StatusCard, StatusIcon,StatusTextContainer, StatusButtonDel} from "./style";
import {Feather} from "@expo/vector-icons"
import { RootStackParamList } from "../../utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { TaskContext } from "../../context/TaskContext";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Detaills(){
    const {task}= useContext(TaskContext)
    const navigation = useNavigation<Props['navigation']>();

    return(

        <Container>
            <TopContainer>
                <TopButton onPress= {()=> navigation.popToTop()}>
                    <Feather name= "chevron-left" size={24} color="white"/>
                    <TopText> Voltar </TopText>
                </TopButton>
                </TopContainer>

                <TitleContainer>
                <Title>{task.title}</Title>
                </TitleContainer>

                <TextStatus> Status da tarefa: </TextStatus>
                <StatusContainer>
                <StatusCard>
                    <StatusIcon style= {task.status ? {backgroundColor: '#0e9577'} : {}}>
                    {!task.status && <Feather  name= "square" size= {24} color="white" /> }
                    { task.status && <Feather  name= "check-square" size= {24} color="black" />}
                        
                    </StatusIcon>
                    <StatusTextContainer>
                            <StatusText>{task.status ? "Realizada" : "Em aberto" }</StatusText>
                        </StatusTextContainer>            
                </StatusCard>
                <StatusButtonDel>
                    <Feather name= "trash-2" size={24} color="red"/>
                </StatusButtonDel>
            </StatusContainer>

        </Container>

    );

}