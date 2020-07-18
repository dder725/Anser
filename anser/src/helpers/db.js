import { db } from "../services/firebase";

export function readChats() {
  let abc = [];
  db.ref("chats").on("value", snapshot => {
    snapshot.forEach(snap => {
      abc.push(snap.val())
    });
    return abc;
  });
}

export function writeChats(message) {
  return db.ref("chats").push({
    content: message.content,
    timestamp: message.timestamp,
    uid: message.uid
  });
}

export function writeUser(user) {
  return db.ref("users").push({
    content: user.content,
    uid: user.uid
  }
  )
}

export function getChatRoom(userName){
  return
}
export function createChatRoom(userName) {
  return db.ref("chatRoom").push({
    userName: userName
  })
}