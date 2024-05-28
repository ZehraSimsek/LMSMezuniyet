import React, { useEffect, useState } from "react";
import GlobalApi from "../../../_utils/GlobalApi"
import { FaCrown } from "react-icons/fa";

export default function SideBanners() {
  const [leaderData, setLeaderData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await GlobalApi.getLeadCount();
      setLeaderData(result);
    };

    fetchData();
  }, []);

  const getUsername = (email) => {
    return email.split('@')[0];
  }

  return (
    <div className="mb-8 ml-3 mr-3 min-h-screen bg-slate-200 rounded-lg shadow-lg p-4">
      <h2 className="text-2xl text-center text-blue-400 font-semibold mb-4">Lider Tablosu</h2>
      {leaderData.map((userInfo, index) => (
        <div key={userInfo.email} className="mb-2 flex items-center cursor-pointer bg-white rounded-lg p-2 shadow-md">
          <span className={`font-bold text-lg ${index === 0 ? 'text-yellow-500' : 'text-gray-500'}`}>
            {index === 0 ? <FaCrown className="animate-pulse text-yellow-500"/> : `${index + 1}. `}
          </span>
          <span className="text-gray-700 ml-2">{getUsername(userInfo.email)}</span>
          <span className="ml-auto bg-blue-500 text-white rounded-full px-2 py-1 text-sm">{userInfo.completedChapterCounter*10}</span>
        </div>
      ))}
    </div>
  );
}
