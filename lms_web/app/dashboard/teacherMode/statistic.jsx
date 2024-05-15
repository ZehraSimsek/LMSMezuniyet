// import React, { useEffect, useState } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';
// import GlobalApi from "../../_utils/GlobalApi";
// import { useUser } from "@clerk/nextjs";

// // Gerekli bileşenleri kaydet
// Chart.register(CategoryScale, LinearScale, BarElement);

// function Statistic() {
//   const [courseList, setCourseList] = useState(null);
//   const { user } = useUser();

//   useEffect(() => {
//     GlobalApi.GetIstatisticCourse(user.primaryEmailAddress.emailAddress).then((resp) => {
//       if (resp && resp.courseLists) {
//         setCourseList(resp.courseLists);
//       }
//     });
//   }, []);

//   // Veri henüz yüklenmediyse bir yükleniyor mesajı göster
//   if (!courseList) {
//     return <div>Yükleniyor...</div>;
//   }

//   // Kurs isimleri, kayıtlı kişi sayısı ve kazanç verilerini hazırla
//   const courseNames = courseList.map(course => course.name);
//   const enrollCounts = courseList.map(course => course.counterEnroll);
//   const earnings = courseList.map(course => course.free ? 0 : course.price * course.counterEnroll);

//   return (
//     <div style={{ position: 'relative', top: '80px' }} className="flex flex-col md:flex-row">
//       <span className='mt-5'>KURS ISTATISTIKLERI</span>
//       <div className="flex flex-row justify-around mt-5">
//         <div>
//           <Bar data={{
//             labels: courseNames,
//             datasets: [{
//               label: 'Kişi Sayısı',
//               data: enrollCounts,
//               backgroundColor: 'rgba(75, 192, 192, 0.6)',
//               borderColor: 'rgba(75, 192, 192, 1)',
//               borderWidth: 1,
//               hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
//               hoverBorderColor: 'rgba(75, 192, 192, 1)',
//             }]
//           }} options={{
//             responsive: true,
//             scales: {
//               x: {
//                 grid: {
//                   display: false
//                 }
//               },
//               y: {
//                 grid: {
//                   display: true
//                 }
//               }
//             }
//           }} />
//           <span>Kursa Kayıtlı Kişi Grafiği</span>
//         </div>
//         <div>
//           <Bar data={{
//             labels: courseNames,
//             datasets: [{
//               label: 'Kazanç',
//               data: earnings,
//               backgroundColor: 'rgba(255, 99, 132, 0.6)',
//               borderColor: 'rgba(255, 99, 132, 1)',
//               borderWidth: 1,
//               hoverBackgroundColor: 'rgba(255, 99, 132, 0.8)',
//               hoverBorderColor: 'rgba(255, 99, 132, 1)',
//             }]
//           }} options={{
//             responsive: true,
//             scales: {
//               x: {
//                 grid: {
//                   display: false
//                 }
//               },
//               y: {
//                 grid: {
//                   display: true
//                 }
//               }
//             }
//           }} />
//           <span>Kazanç Grafiği</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Statistic;

import React, { useEffect, useState } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import GlobalApi from "../../_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";

function Statistic() {
  const [courseList, setCourseList] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    GlobalApi.GetIstatisticCourse(user.primaryEmailAddress.emailAddress).then((resp) => {
      if (resp && resp.courseLists) {
        setCourseList(resp.courseLists);
      }
    });
  }, []);

  if (!courseList) {
    return <div>Yükleniyor...</div>;
  }

  const data = courseList.map(course => ({
    name: course.name,
    'Kişi Sayısı': course.counterEnroll,
    Kazanç: course.free ? 0 : course.price * course.counterEnroll,
  }));

  return (
    <div style={{ position: 'absolute', top: '80px' }} className="flex flex-col md:flex-row">
      <h2 className="text-[20px] font-bold text-sky-700 mr-4">İstatistikler</h2>
      <div className="flex flex-row justify-around mt-5">
        {courseList.length > 0 ? (
          <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Kişi Sayısı" fill="#8884d8" />
            <Bar dataKey="Kazanç" fill="#82ca9d" />
          </BarChart>
        ) : (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '10vh',
                width: '80vw',
                backgroundColor: '#f9f9f9'
              }}>
                <div style={{
                  padding: '20px',
                  backgroundColor: '#ffdd57',
                  color: '#333',
                  borderRadius: '8px',
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ height: '24px', width: '24px', marginRight: '10px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.847.516 1.874-.072 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                    Mailinize kayıtlı kurs bulunmamaktadır.
                </div>
              </div>
              
        )}
      </div>
    </div>
  );
}

export default Statistic;
