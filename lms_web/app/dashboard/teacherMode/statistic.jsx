import React, { useEffect, useState } from 'react';
import {  FaReply } from 'react-icons/fa';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import GlobalApi from "../../_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";

function Statistic() {
  const [courseList, setCourseList] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showGeneral, setShowGeneral] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    GlobalApi.GetIstatisticCourse(user.primaryEmailAddress.emailAddress).then((resp) => {
      if (resp && resp.courseLists) {
        setCourseList(resp.courseLists);
        setSelectedCourse(resp.courseLists[0]);
      }
    });
  }, []);

  if (!courseList) {
    return <div>Yükleniyor...</div>;
  }

  if (courseList.length === 0) {
    return <div>Henüz kurs yüklemediniz.</div>;
  }

  const kişiData = showGeneral
    ? courseList.map(course => ({
        name: course.name,
        'Kişi Sayısı': course.counterEnroll,
      }))
    : [
        {
          name: selectedCourse.name,
          'Kişi Sayısı': selectedCourse.counterEnroll,
        },
      ];

  const kazançData = showGeneral
    ? courseList.map(course => ({
        name: course.name,
        Kazanç: course.free ? 0 : course.price * course.counterEnroll,
      }))
    : [
        {
          name: selectedCourse.name,
          Kazanç: selectedCourse.free ? 0 : selectedCourse.price * selectedCourse.counterEnroll,
        },
      ];

  return (
    <div className="flex flex-col md:flex-row">
      <h2 className="mt-14 text-[20px] font-bold text-sky-700 mr-4">İstatistikler {selectedCourse && !showGeneral && `- ${selectedCourse.name}`}</h2>
      <div className="flex flex-row justify-around mt-5">
        <div className="w-1/4 cursor-pointer" style={{ position: 'absolute', top: '30%', left: '8%', transform: 'translate(-50%, -50%)' }}>
          <table className="ml-16 md:w-full divide-y divide-gray-200 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <thead className="bg-sky-100">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kurslar
                  <button onClick={() => setShowGeneral(true)} className="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-3xl">
                    <FaReply />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {courseList.map(course => (
                <tr key={course.id} onClick={() => { setSelectedCourse(course); setShowGeneral(false); }} className={selectedCourse && selectedCourse.id === course.id ? 'bg-blue-200' : 'bg-white'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {course.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {courseList.length > 0 && (
          <div style={{ position: 'absolute', top: '50%', left: '70%', transform: 'translate(-50%, -50%)' }}>
            {/* Kişi Sayısı Chart */}
            <BarChart width={350} height={300} data={kişiData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Kişi Sayısı" fill="#8884d8" minPointSize={10} />
            </BarChart>

            {/* Kazanç Chart */}
            <BarChart width={350} height={300} data={kazançData} style={{ position: 'absolute', top: '50%', right: '60%', transform: 'translate(-50%, -50%)' }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Kazanç" fill="#82ca9d" minPointSize={10} />
            </BarChart>
          </div>
        )}
      </div>
    </div>
  );
}

export default Statistic;