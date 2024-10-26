import React from 'react';

function Memorial() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-2xl font-semibold mb-8 text-gray-300">生平简介</h2>
        <div className="memorial-card p-8 rounded-lg">
          <p className="text-gray-300 leading-relaxed mb-6">
            王飞老师担任黑龙江科技大学年级辅导员，以其专业素养和敬业精神，深受学生爱戴。
            他始终关心学生成长，为人师表，以身作则，为莘莘学子指明方向。
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            在工作岗位上，他尽职尽责，无私奉献，为学生解决困难，帮助学生成长。
            他的言传身教，将永远影响着每一位学生的人生道路。
          </p>
          <div className="mt-8 pt-6 border-t border-gray-800">
            <blockquote className="text-gray-400 italic">
              "春风化雨，润物无声。王老师的教诲与关怀，永远铭记于心。"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Memorial;