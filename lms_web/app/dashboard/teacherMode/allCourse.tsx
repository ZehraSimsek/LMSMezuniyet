import React, { useEffect, useState } from 'react';
import GlobalApi from '../../_utils/GlobalApi';
import { FaTrash, FaEdit, FaChevronUp } from 'react-icons/fa';
import { useUser } from '@clerk/nextjs';
import { VictoryPie } from 'victory';
import EditCourse from './editCourse';

function AllCourses() {
  const [courses, setCourses] = useState([]);
  const [expandedRows, setExpandedRows] = useState([]);
  const { user } = useUser();
  const [editingCourseId, setEditingCourseId] = useState(null);

  useEffect(() => {
    GlobalApi.getAllCourseList().then((result) => {
      setCourses(result.courseLists.filter(course => course.authorEmail === user?.primaryEmailAddress?.emailAddress));
    });
  }, [user]);

  const handleDeleteCourse = async (courseId) => {
    try {
      await GlobalApi.deleteCourse(courseId);
      setCourses(courses.filter(course => course.id !== courseId));
    } catch (error) {
      console.error("Kurs silinirken bir hata oluştu:", error);
    }
  };

  const handleRowClick = (courseId) => {
    const currentExpandedRows = expandedRows;
    const isRowCurrentlyExpanded = currentExpandedRows.includes(courseId);

    const newExpandedRows = isRowCurrentlyExpanded ?
      currentExpandedRows.filter(id => id !== courseId) :
      currentExpandedRows.concat(courseId);

    setExpandedRows(newExpandedRows);
  }

  const handleEditCourse = (courseId) => {
    setEditingCourseId(courseId);
  }

  if (editingCourseId) {
    return <EditCourse courseId={editingCourseId} />;
  }
  return (
    <div className="flex flex-col mt-14">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className=" bg-sky-100">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kurs Adı
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Açıklama
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fiyat
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Toplam Bölüm
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ücretsiz mi?
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kursu Alan Kişi Sayısı
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Etiket
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {courses.map((course) => (
                  <React.Fragment key={course.id}>
                    <tr onClick={() => handleRowClick(course.id)}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {course.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.description.substring(0, 20)}{course.description.length > 20 ? "..." : ""}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.totalChapters}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.free ? 'Evet' : 'Hayır'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.counterEnroll}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.tag}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button onClick={(e) => { e.stopPropagation(); handleEditCourse(course.id); }} className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <FaEdit className="h-5 w-5" />
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); handleDeleteCourse(course.id); }} className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <FaTrash className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                    {expandedRows.includes(course.id) && (
                      <tr>
                        <td colSpan="8">
                          <div className="p-6">
                            <p><strong>Kurs Açıklaması:</strong> {course.description}</p>
                            {course.free ?
                              <div style={{
                                padding: '10px',
                                backgroundColor: 'rgba(224 , 242, 254)',
                                color: '#333',
                                borderRadius: '8px',
                                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                                display: 'inline-flex',
                                marginLeft: '2px',
                                width: '210px',
                                marginTop: '10px',
                              }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ height: '24px', width: '12px' }}>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.847.516 1.874-.072 2.572-1.065z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Kazanç elde edilmemiştir.
                              </div> :
                              <p><strong>Kurstan Sağlanan Kazanç:</strong> {course.price * course.counterEnroll}</p>
                            }
                            {!course.free && (
                              <div style={{ width: '200px', height: '200px', marginTop: '10px' }}>
                                <VictoryPie
                                  data={[
                                    { x: 'Kazanç', y: course.price * course.counterEnroll }
                                  ]}
                                  colorScale={['#36A2EB']}
                                />
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}

                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCourses;
