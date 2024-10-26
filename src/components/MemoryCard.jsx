import React from 'react';

function MemoryCard({ memory }) {
  return (
    <div className="memorial-card rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="h-48 bg-gray-900 relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-600">
          <span className="text-sm">珍贵照片</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-medium text-lg mb-2 text-gray-300">{memory.title}</h3>
        <p className="text-sm text-gray-500 mb-3">{memory.date}</p>
        <p className="text-gray-400 text-sm">{memory.description}</p>
      </div>
    </div>
  );
}

export default MemoryCard;