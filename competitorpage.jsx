// src/app/game/competitor/page.jsx

"use client";
import { useState, useEffect } from 'react';
import dynamic from "next/dynamic";
import { ProgressBar } from './ProgressBar'; 

const CodeEditor = dynamic(
  () => import('./CodeEditor'),
  { ssr: false }
);

export default function Competitor() {
  const [randomProblem, setRandomProblem] = useState({
    title: "กำลังโหลดโจทย์...",
    type: "-",
    difficulty: "-",
    description: "-",
    score: "-",
    input: "-",
    output: "-",
    testcases: []
  });
  const [teamScores, setTeamScores] = useState({ team1: 70, team2: 30 });

  const fetchProblems = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/problems`);
      const jsonData = await res.json();
      const data = Array.isArray(jsonData) ? jsonData : jsonData.problems || [];
      const usedIds = JSON.parse(localStorage.getItem("usedProblems") || "[]");

      const availableProblems = data.filter(
        (problem) => !usedIds.includes(problem._id)
      );

      if (availableProblems.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableProblems.length);
        const chosen = availableProblems[randomIndex];
        localStorage.setItem(
          "usedProblems",
          JSON.stringify([...usedIds, chosen._id])
        );
        setRandomProblem(chosen);
      } else {
        localStorage.removeItem("usedProblems");
        setRandomProblem({
          title: "ไม่มีโจทย์เหลือแล้ว",
          type: "-",
          difficulty: "-",
          description: "-",
          score: "-",
          input: "-",
          output: "-",
          testcases: []
        });
      }
    } catch (error) {
      console.error("ไม่สามารถโหลดข้อมูลโจทย์ได้:", error);
      setRandomProblem({
        title: "เกิดข้อผิดพลาดในการโหลด",
        type: "-",
        difficulty: "-",
        description: "โปรดลองใหม่อีกครั้งในภายหลัง",
        score: "-",
        input: "-",
        output: "-",
        testcases: []
      });
    }
  };

  useEffect(() => {
    fetchProblems();
  }, []);

  const handleTryAgain = () => {
    fetchProblems();
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center">
      <section className='bg-black w-full flex text-center justify-center'>
        <div className='bg-gradient-to-r from-red-600 via-purple-500 to-blue-400 text-transparent bg-clip-text font-bold text-5xl m-10'>
          Code Battle
        </div>
      </section>

      <ProgressBar
        team1Name="Team A"
        team1Score={teamScores.team1}
        team2Name="Team B"
        team2Score={teamScores.team2}
      />

      <div className="bg-black flex flex-col md:flex-row gap-[20px] w-full max-w-7xl px-4">
        {/* Left Side: Problem Description */}
        <div className="w-full md:w-1/2 lg:w-[40%] h-auto bg-slate-800 rounded-2xl p-4 text-white mb-5 flex flex-col gap-4">
          <div className="bg-slate-700 rounded-2xl p-4">
            <h1 className="text-xl font-medium">โจทย์</h1>
            <h2 className="text-sm font-light">{randomProblem.title}</h2>
          </div>
          <div className="bg-slate-700 rounded-2xl p-4">
            <h1 className="text-xl font-medium">ประเภท</h1>
            <h2 className="text-sm font-light">{randomProblem.type}</h2>
          </div>
          <div className="bg-slate-700 rounded-2xl p-4">
            <h1 className="text-xl font-medium">ความยาก</h1>
            <h2 className="text-sm font-light">{randomProblem.difficulty}</h2>
          </div>
          <div className="bg-slate-700 rounded-2xl p-4">
            <h1 className="text-xl font-medium">คำอธิบาย</h1>
            <h2 className="text-sm font-light">{randomProblem.description}</h2>
          </div>
          <div className="bg-slate-700 rounded-2xl p-4">
            <h1 className="text-xl font-medium">คะแนน</h1>
            <h2 className="text-sm font-light">{randomProblem.score}</h2>
          </div>
          {/* Example Section */}
          {randomProblem.testcases?.length > 0 && (
            <div className="bg-slate-700 rounded-2xl p-4">
              <h1 className="text-xl font-medium">ตัวอย่าง</h1>
              <div className="space-y-4 mt-2">
                {randomProblem.testcases.map((testcase, index) => (
                  <div key={index} className="bg-slate-800 p-3 rounded-lg">
                    <h3 className="font-semibold text-sm mb-1">ตัวอย่างที่ {index + 1}</h3>
                    <div className="mt-2 text-sm">
                      <h2 className="font-semibold">Input:</h2>
                      <pre className="bg-slate-800 p-2 rounded-md mt-1">{testcase.input}</pre>
                    </div>
                    <div className="mt-2 text-sm">
                      <h2 className="font-semibold">Output:</h2>
                      <pre className="bg-slate-800 p-2 rounded-md mt-1">{testcase.output}</pre>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4 mt-auto">
            <button className="flex-1 bg-green-600 text-white p-3 rounded-lg font-bold hover:bg-green-700 transition-colors cursor-pointer">
              ส่งคำตอบ
            </button>
            <button
              onClick={handleTryAgain}
              className="flex-1 bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition-colors cursor-pointer"
            >
              สุ่มโจทย์ใหม่
            </button>
          </div>
        </div>

        {/* Right Side: Code Editor Component */}
        <div className="w-full md:w-1/2 lg:w-[60%] h-auto bg-slate-800 rounded-2xl p-4 mb-5">
          <h1 className="text-white text-xl font-medium mb-2">โค้ดของคุณ</h1>
          <CodeEditor />
        </div>
      </div>
    </div>
  );
}