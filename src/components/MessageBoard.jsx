import React, { useState } from 'react';
import MessageForm from './MessageForm';

function MessageBoard() {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      author: '2020级学生', 
      content: '王老师永远活在我们心中，感谢您的教导与关怀。', 
      date: '2023-10-01' 
    },
    { 
      id: 2, 
      author: '教师代表', 
      content: '好同事，好老师，永远怀念。', 
      date: '2023-10-02' 
    }
  ]);

  const addMessage = (newMessage) => {
    setMessages(prevMessages => [
      {
        id: prevMessages.length + 1,
        ...newMessage,
        date: new Date().toLocaleDateString('zh-CN')
      },
      ...prevMessages
    ]);
  };

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-12 text-gray-300">留言寄语</h2>
        <MessageForm onSubmit={addMessage} />
        <div className="space-y-6 mt-12">
          {messages.map(message => (
            <div key={message.id} className="memorial-card p-6 rounded-lg">
              <p className="text-gray-300 text-lg mb-4">{message.content}</p>
              <div className="text-sm text-gray-500">
                <span>{message.author}</span>
                <span className="mx-2">·</span>
                <span>{message.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MessageBoard;