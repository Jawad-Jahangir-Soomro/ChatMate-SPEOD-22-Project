import React from 'react'
import './chat.css'
import { useState } from 'react';
import io from 'socket.io-client'
import { useEffect } from 'react';
import ScrolltoBottom from 'react-scroll-to-bottom'
import icon from '../../utils/icon.png'
const socket = io.connect("http://localhost:8000/");

// var username = localStorage.getItem('username')
function Chat() {

    const [currentMessage, setcurrentMessage] = useState("")
    const [messageList, setMessageList] = useState([]);
    const sendMessage = async () => {
        if (currentMessage !== '') {

            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            }
            await socket.emit('send_message', messageData);
            setMessageList((list) => [...list, messageData]);
            setcurrentMessage("")
        }
    }
    const [username, setUsername] = useState("");
    const [room, setroom] = useState("")
    const [showChat, setShowChat] = useState(false);
    const JoinRoom = () => {
        if (username !== "" && room !== "") {
            socket.emit('join', room)
            setShowChat(true);

        }
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        });
    }, []);
    return (
        <>
            <div className='App'>
                {!showChat ? (
                    <div className="joinChatContainer">

                        <h3>Join the Chat</h3>
                        <input
                            type="text"
                            placeholder="Enter Your chat name"
                            onChange={(event) => {
                                setUsername(event.target.value);
                            }}
                        />
                        <input type='text' placeholder='Enter the Chat Room Name' onChange={(event) => { setroom(event.target.value) }}></input>
                        <button onClick={JoinRoom}>Join Chat</button>

                    </div>) : (
                        <div className="chat-window">
                        <div className="chat-header">
                        <p>Chat-Mate</p>

                        </div>
                        <div className="chat-body">
                            <ScrolltoBottom className="message-container">
                                {messageList.map((messageContent) => {
                                    return (
                                        <div
                                            className="message"
                                            id={username === messageContent.author ? "you" : "other"}
                                        >
                                            <div>
                                                <div className="message-content">
                                                    <p>{messageContent.message}</p>
                                                </div>
                                                <div className="message-meta">
                                                    <p id="time">{messageContent.time}</p>
                                                    <p id="author">{messageContent.author}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </ScrolltoBottom>
                        </div>
                        <div className="chat-footer">
                            <input
                                type="text"
                                value={currentMessage}
                                placeholder="your text here"
                                onChange={(event) => {
                                    setcurrentMessage(event.target.value);
                                }}
                                onKeyPress={(event) => {
                                    event.key === "Enter" && sendMessage();
                                }}
                            />
                            <button onClick={sendMessage}>&#9658;</button>
                        </div>
                    </div>
                )}

            </div>

        </>


    )
}

export default Chat