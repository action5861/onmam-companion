'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TaglineSection: React.FC = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold text-primary mb-6">
              멀리 있어도 괜찮습니다.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-plus-jakarta max-w-3xl mx-auto leading-relaxed mb-4">
              이제 온맘동행에 맡기고 안심하세요.
            </p>
            <p className="text-lg md:text-xl text-gray-700 font-plus-jakarta max-w-3xl mx-auto leading-relaxed">
              당신의 소중한 순간을 함께하는 프리미엄 병원동행 서비스
            </p>
            <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-primary text-white rounded-lg font-plus-jakarta font-semibold hover:bg-primary/90 transition-colors min-w-[200px]">
                서비스 신청하기
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-plus-jakarta font-semibold hover:bg-primary/5 transition-colors min-w-[200px]">
                자세히 알아보기
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TaglineSection; 