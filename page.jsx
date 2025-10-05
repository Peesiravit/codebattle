import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 md:py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-20">

        {/* Section 1: About Us */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 leading-tight">
              About us
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              มาทำความรู้จักกับ <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">code battle</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              แพลตฟอร์มเกมการแข่งขันเขียนโค้ดออนไลน์ที่จะท้าทายและพัฒนาทักษะการเขียนโปรแกรมของคุณ!
              เราสร้าง Code Battle ขึ้นมาเพื่อเป็นพื้นที่ให้นักพัฒนาทุกระดับได้ฝึกฝน ท้าทายตัวเอง
              และพัฒนาทักษะการเขียนโค้ดให้ก้าวหน้ายิ่งขึ้น โดยมีวิสัยทัศน์ที่จะเป็นชุมชนนักพัฒนาที่รักการแข่งขันและเรียนรู้
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            {/* Image Placeholder for About Us section */}
            <img 
              src="https://placehold.co/600x400/E0E0E0/333333?text=Image+1" 
              alt="People coding together" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/E0E0E0/333333?text=Image+Not+Found'; }}
            />
          </div>
        </div>

        {/* Section 2: Why Join Us */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 flex justify-center items-center order-2 md:order-1">
            {/* Image Placeholder for Why Join Us section */}
            <img 
              src="https://placehold.co/600x400/E0E0E0/333333?text=Image+2" 
              alt="Coding on laptop" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/E0E0E0/333333?text=Image+Not+Found'; }}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              ทำไมต้องเข้าร่วมกับเรา?
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              ไม่ว่าคุณจะเป็นนักศึกษา ผู้เริ่มต้นเขียนโค้ด หรือนักพัฒนาที่มีประสบการณ์ Code Battle
              คือสนามประลองที่คุณสามารถมาทดสอบขีดความสามารถและเรียนรู้สิ่งใหม่ ๆ ได้เสมอ:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-gray-50 rounded-lg p-4 w-full shadow-sm flex items-center">
                  <span className="text-blue-500 text-2xl mr-3">&#x2022;</span>
                  <p className="text-gray-700 font-medium">
                    <span className="font-semibold">พัฒนาทักษะ:</span> ฝึกฝนการเขียนโค้ดและพัฒนาทักษะการแก้ปัญหา
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-gray-50 rounded-lg p-4 w-full shadow-sm flex items-center">
                  <span className="text-purple-500 text-2xl mr-3">&#x2022;</span>
                  <p className="text-gray-700 font-medium">
                    <span className="font-semibold">แข่งขันและเรียนรู้:</span> ประลองฝีมือกับเพื่อนนักพัฒนา และเรียนรู้เทคนิคใหม่ ๆ
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-gray-50 rounded-lg p-4 w-full shadow-sm flex items-center">
                  <span className="text-green-500 text-2xl mr-3">&#x2022;</span>
                  <p className="text-gray-700 font-medium">
                    <span className="font-semibold">โจทย์ที่หลากหลาย:</span> พบกับโจทย์ปัญหาที่ครอบคลุมภาษาและระดับความยาก
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-gray-50 rounded-lg p-4 w-full shadow-sm flex items-center">
                  <span className="text-yellow-500 text-2xl mr-3">&#x2022;</span>
                  <p className="text-gray-700 font-medium">
                    <span className="font-semibold">ชุมชน:</span> เข้าร่วมชุมชนนักพัฒนาที่กระตือรือร้น
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3: Call to Action */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            เข้าร่วมกับ <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Code Battle</span> เลย !
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            พร้อมที่จะเข้าร่วมการต่อสู้ด้วยโค้ดแล้วหรือยัง? สมัครสมาชิกและเริ่มการแข่งขันของคุณได้เลย!
          </p>
          <a href="#" className="inline-block bg-gradient-to-r from-red-500 to-purple-700 hover:from-red-600 hover:to-purple-800 text-white font-bold py-3 px-10 rounded-full text-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            เริ่มเลย
          </a>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-12">
          <p>© 2025 Code Battle. สงวนลิขสิทธิ์.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
