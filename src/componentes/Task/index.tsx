import{Feather} from "@expo/vector-icons"
import {Container,TaskText,Taskdone,TaskDelete} from "./style"
export function Task(){
    return(
     <Container>
       <Taskdone>
        <Feather name = "square" size = {40} color ="white" />
       </Taskdone>
       <TaskText>Tarefa </TaskText>
       <TaskDelete>
       <Feather name = "trash-2" size = {40} color ="red" />
       </TaskDelete>
     </Container>

    );
}