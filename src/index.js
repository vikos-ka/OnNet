import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: 1, message: "Hi! How are you?", like: 12, comment: 9999},
    {id: 2, message: "It's my first page", like: 40, comment: 1},
    {id: 3, message: "Some text", like: 12, comment: 9999},
    {id: 4, message: "Mike", like: 12, comment: 9999},
    {id: 5, message: "Tom", like: 12, comment: 9999},
    {id: 6, message: "Miles", like: 12, comment: 9999},
    {id: 7, message: "Vika", like: 12, comment: 9999},
    ];

let dialogs = [
    {id: 1, name: "Max"},
    {id: 2, name: "Oliver"},
    {id: 3, name: "Andrew"},
    {id: 4, name: "Mike"},
    {id: 5, name: "Tom"},
    {id: 6, name: "Miles"},
    {id: 7, name: "Vika"},
];

let messages = [
    {id: 1, message: "Hello"},
    {id: 2, message: "Hi"},
    {id: 3, message: "Yo"},
    {id: 4, message: "How are you"},
    {id: 5, message: "What's up"},
    {id: 6, message: "Miles"},
    {id: 7, message: "Vika"},
];

ReactDOM.render(<App posts = {posts} messages = {messages} dialogs = {dialogs}/>, document.getElementById('root'));

