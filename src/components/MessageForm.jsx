import React, { useState } from 'react';

function MessageForm({ onSubmit }) {
  const [formData, setFormData] = useState({ author: '', content: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.author.trim() || !formData.content.trim()) return;
    
    onSubmit(formData);
    setFormData({ author: '', content: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="memorial-card p-8 rounded-lg">
      <div className="mb-6">
        <label htmlFor="author" className="block text-gray-300 text-sm font-medium mb-2">
          您的姓名
        </label>
        <input
          type="text"
          id="author"
          value={formData.author}
          onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
          className="bg-gray-900 text-gray-300 w-full p-3 rounded border border-gray-700 focus:border-gray-500 focus:outline-none"
          maxLength={20}
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="content" className="block text-gray-300 text-sm font-medium mb-2">
          留言内容
        </label>
        <textarea
          id="content"
          value={formData.content}
          onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
          className="bg-gray-900 text-gray-300 w-full p-3 rounded border border-gray-700 focus:border-gray-500 focus:outline-none h-32"
          maxLength={200}
          required
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-700 text-gray-300 font-medium py-2 px-6 rounded focus:outline-none transition-colors"
        >
          提交留言
        </button>
      </div>
    </form>
  );
}

export default MessageForm;