import styled from "styled-components/native/";

export const Container = styled.View
`
flex: 1;
background-color:'black'.;
padding: 16px;
padding-top: 64px;
gap: 16px;
`;

export const TopContainer = styled.View
`
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
`;

export const TopButton = styled.TouchableOpacity
`
flex-direction: row;
justify-content: start;
align-item: center;
gap: 16px;
`;

export const TopText = styled.Text
`color: #000000;
font-size: 16px;
`;

export const TitleContainer = styled.View
`
background-color: #FFA500;
border-radius: 4px:
padding:16px;

`;

export const Title = styled.Text
`
color: #FFFFFF;
font-size: 20px

`;

export const TextStatus = styled.Text
`
color: #FFFFFF;
font-size: 16px;

`;

export const StatusContainer = styled.View
`
flex-direction: row;
justify-content: space-between;
gap: 16px;

`;

export const StatusCard = styled.View
`
background-color: #FFA500;
border-radius: 4px;
flex-direction: row;
gap: 16px;
flex: 1;

`;

export const StatusIcon = styled.View
`
background-color:#A020F0;
border-radius: 4px;
padding: 16px;

`;

export const StatusTextContainer = styled.View

`
padding: 16px;
`;

export const StatusText = styled.View
`
color: #FFFFFF;
font-size: 16px;

`;

export const StatusButtonDel = styled.TouchableOpacity

`
background-color: #F222424;
border-radius: 4px:
padding: 16px;

`;