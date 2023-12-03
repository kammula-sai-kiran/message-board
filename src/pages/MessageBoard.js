import React, { useEffect } from 'react';
import PostMessageSection from '../components/PostMessageSection/PostMessageSection';
import MessageList from '../components/MessageList/MessageList';
import './MessageBoard.scss';
import Dropdown from '../components/DropDown/DropDown';
import { useDispatch } from 'react-redux';
import { fetchAllMessages } from '../redux/apis';

const MessageBoard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllMessages());
    },[])
    return (
    <div className='message-board' >
    <h1>MessageBoard</h1>
    <div className='post-and-sort'>
        <PostMessageSection></PostMessageSection>
        <Dropdown></Dropdown>
    </div>
    <MessageList></MessageList>
    </div>
    )

};

export default MessageBoard;