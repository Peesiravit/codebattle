// src/app/game/competitor/ProgressBar.jsx

import React from 'react';

// ต้องมีคำว่า "export" อยู่หน้า "const" เสมอ
export const ProgressBar = ({ team1Name, team1Score, team2Name, team2Score }) => {
  const totalScore = team1Score + team2Score;
  const team1Percentage = totalScore > 0 ? (team1Score / totalScore) * 100 : 50;
  
  return (
    <div className="w-full max-w-7xl mx-auto p-4 flex flex-col items-center">
      {/* Container สำหรับ ProgressBar */}
      <div className="relative w-full h-8 bg-gray-600 rounded-full flex overflow-hidden border-2 border-gray-400">
        {/* Blue progress bar for Team 1 */}
        <div
          className="h-full bg-blue-500 transition-all duration-500 ease-out"
          style={{ width: `${team1Percentage}%` }}
        ></div>
        
        {/* Red progress bar for Team 2 */}
        <div
          className="h-full bg-red-500 transition-all duration-500 ease-out"
          style={{ width: `${100 - team1Percentage}%` }}
        ></div>
        
        {/* Lightning Bolt and Score Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
          <span className="text-white text-sm font-semibold pr-2">Score</span>
          <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center transform rotate-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-800" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11 15h2v6h-2v-6zm0-10h2v4h-2V5zm0 6h2v2h-2v-2zm-2-2h-2v2h2V9zm4 0h2v2h-2V9zm-2-4h2v2h-2V5zm0 10h2v2h-2v-2zm-4 2h2v2h-2v-2zm8-6h-2v2h2V9z"/>
            </svg>
          </div>
          <span className="text-white text-sm font-semibold pl-2">Score</span>
        </div>
      </div>
      
      {/* Team Names */}
      <div className="w-full flex justify-between mt-2">
        <div className="text-left text-white text-lg font-bold">{team1Name}</div>
        <div className="text-right text-white text-lg font-bold">{team2Name}</div>
      </div>
    </div>
  );
};