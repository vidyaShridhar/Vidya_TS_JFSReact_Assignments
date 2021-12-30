const chatRoomsUsers1 = [{
    "Jack": "hi"},
    {"Rohan": "how are you"},
    {"Arnav": "bye"
}];
const chatRoomsUsers2 = [{
    "sania": "namaste"},
    {"neeraj": "program"},
    {"virat": "javascript"
}];
const getUserName = (userData)=>{
    console.log("chatroom1");
    userData.map(item => console.log(item))
}
const getUserMessages = (userData)=>{
    console.log("");
    console.log("chatroom2");
    userData.map(item => console.log(item))
}
getUserName(chatRoomsUsers1)
getUserMessages(chatRoomsUsers2)