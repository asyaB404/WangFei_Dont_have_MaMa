import React from 'react';

function Header() {
  return (
    <header className="bg-black bg-opacity-80 text-gray-100 py-16 border-b border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <span className="text-yellow-300 candle-light text-2xl">🕯️</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-100">永远怀念王飞辅导员</h1>
        <p className="text-xl text-gray-400 mb-2">黑龙江科技大学年级辅导员</p>
        <p className="text-gray-500">1990 - 2023</p>
      </div>
    </header>
  );
}

export default Header;