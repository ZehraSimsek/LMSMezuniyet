import React, { useEffect, useState } from 'react';
import GlobalApi from '../../../_utils/GlobalApi';

function LeaderTable() {
  const [leaderData, setLeaderData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await GlobalApi.getLeadCount();
      if (result && result.userInfos) {
        const sortedData = result.userInfos.sort((a, b) => b.completedChapterCounter - a.completedChapterCounter);
        setLeaderData(sortedData);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen py-6 bg-gray-100">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">Leader Table</h1>
      <div className="flex flex-col mx-auto max-w-4xl w-full">
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full bg-white rounded-lg">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Rank</th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Completed Chapters</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leaderData.map((userInfo, index) => (
                <tr key={userInfo.email} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center">
                      {index === 0 ? (
                        <span className="text-yellow-500 text-xl">👑</span>
                      ) : (
                        <span className="text-gray-500">{index + 1}</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{userInfo.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{userInfo.completedChapterCounter}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  
  
}

export default LeaderTable;
