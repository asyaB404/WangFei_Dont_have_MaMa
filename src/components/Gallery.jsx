import React from 'react';
import MemoryCard from './MemoryCard';

function Gallery() {
  const memories = [
    { 
      id: 1, 
      title: '师生交流', 
      date: '2022年春',
      description: '与学生谈心，关心学生学习生活'
    },
    { 
      id: 2, 
      title: '班级活动', 
      date: '2022年秋',
      description: '组织班级活动，增进师生情谊'
    },
    { 
      id: 3, 
      title: '工作风采', 
      date: '2023年',
      description: '认真负责的工作态度，永远的榜样'
    }
  ];

  return (
    <section className="py-16 bg-black bg-opacity-40">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-12 text-gray-300">珍贵回忆</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memories.map(memory => (
            <MemoryCard key={memory.id} memory={memory} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;