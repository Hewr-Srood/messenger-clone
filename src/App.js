import { Button, Input, FormControl, InputLabel, IconButton } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import Message from './components/Message';
import firebase from 'firebase';
import db from './firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setusername] = useState('');
  useEffect(() => {
    setusername(prompt('please enter your name'));
  }, []);
  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() })));
      });
  }, []);

  const sendMessage = (e) => {
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setMessages([...messages, { username: username, message: input }]);
    // setInput('');
  };
  const sendMessageOnEnter = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };
  const sendMessageOnSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };
  return (
    <div className="App">
      <h1>A new Messenger 🔥🔥🔥</h1>
      <h2>Welcome {username}</h2>

      <form action="" className="app__form">
        <FormControl className="app_formcontrol">
          <Input
            className="app_input"
            placeholder="Enter a message"
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={sendMessageOnEnter}
          />

          <IconButton
            className="app__iconButton"
            variant="contained"
            type="submit"
            onClick={sendMessageOnSubmit}
            disabled={!input}
            color="primary">
            <SendIcon disabled={!input} />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ message, id }) => {
          return <Message key={id} username={username} message={message} />;
        })}
      </FlipMove>
    </div>
  );
}

export default App;
