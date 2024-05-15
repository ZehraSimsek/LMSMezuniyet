// import React, { useState } from 'react';
// import { MdClose } from "react-icons/md";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Modal({ closeModal }) {
//   const [course, setCourse] = useState({
//     name: '',
//     description: '',
//     coverPhoto: null,
//     totalSections: '',
//     isPaid: false,
//     category: '',
//     price: '',
//     sections: []
//   });

//   const [showSectionForm, setShowSectionForm] = useState(false);
//   const [newSection, setNewSection] = useState({ title: '', description: '', video: null, number: '' });

//   const handleChange = (e) => {
//     setCourse({...course, [e.target.name]: e.target.value});
//   }

//   const handleFileChange = (e) => {
//     if (e.target.name === 'coverPhoto') {
//       if (!['image/jpeg', 'image/png'].includes(e.target.files[0].type)) {
//         toast.error('Lütfen bir JPG veya PNG dosyası seçin');
//         return;
//       }
//     } else if (e.target.name === 'video') {
//       if (e.target.files[0].type !== 'video/mp4') {
//         toast.error('Lütfen bir MP4 dosyası seçin');
//         return;
//       }
//     }
//     setCourse({...course, [e.target.name]: e.target.files[0]});
//   }

//   const handleSectionChange = (e) => {
//     setNewSection({...newSection, [e.target.name]: e.target.value});
//   }

//   const handleSectionFileChange = (e) => {
//     if (e.target.files[0].type !== 'video/mp4') {
//       toast.error('Lütfen bir MP4 dosyası seçin');
//       return;
//     }
//     setNewSection({...newSection, [e.target.name]: e.target.files[0]});
//   }

//   const addSection = () => {
//     setCourse({...course, sections: [...course.sections, newSection]});
//     setNewSection({ title: '', description: '', video: null, number: '' });
//     setShowSectionForm(false);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Form gönderimini burada işleyin
//   }

//   return (
//     <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
//       <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
//         <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
//         <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-full sm:w-full">
//           <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//             <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
//               Kurs Ekle
//             </h3>
//             <div className="mt-2">
//               {!showSectionForm ? (
//                 <div className="flex flex-wrap -mx-2">
//                   <form onSubmit={handleSubmit} className="space-y-4 w-1/2 px-2">
//                     <div className="flex flex-col">
//                       <label className="font-bold mb-2">Kurs Adı:</label>
//                       <input type="text" name="name" onChange={handleChange} className="border p-2 rounded" />
//                     </div>
//                     <div className="flex flex-col">
//                       <label className="font-bold mb-2">Kurs Açıklaması:</label>
//                       <textarea name="description" onChange={handleChange} className="border p-2 rounded" />
//                     </div>
//                     <div className="flex flex-col">
//                       <label className="font-bold mb-2">Kapak Fotoğrafı:</label>
//                       <input type="file" name="coverPhoto" onChange={handleFileChange} className="border p-2 rounded" />
//                     </div>
//                     <div className="flex flex-col">
//                       <label className="font-bold mb-2">Toplam Bölüm:</label>
//                       <input type="number" name="totalSections" onChange={handleChange} className="border p-2 rounded" />
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <input type="checkbox" name="isPaid" onChange={(e) => setCourse({...course, isPaid: e.target.checked})} />
//                       <label className="font-bold">Kurs ücretli mi?</label>
//                     </div>
//                     <div className="flex flex-col">
//                       <label className="font-bold mb-2">Kurs Kategorisi:</label>
//                       <select name="category" onChange={handleChange} className="border p-2 rounded">
//                         <option value="">Bir kategori seçin</option>
//                         {/* Kategorilerinizi buraya ekleyin */}
//                       </select>
//                     </div>
//                     <div className="flex flex-col">
//                       <label className="font-bold mb-2">Kurs Fiyatı:</label>
//                       <input type="number" name="price" onChange={handleChange} className="border p-2 rounded" />
//                     </div>
//                     <button type="button" onClick={() => setShowSectionForm(true)} className="bg-blue-500 text-white px-4 py-2 rounded">Bölüm Ekle</button>
//                     <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Gönder</button>
//                   </form>
//                   <div className="w-1/2 px-2 mt-4">
//                     <h4 className="font-bold mb-2">Eklenen Bölümler:</h4>
//                     {course.sections.map((section, index) => (
//                       <div key={index} className="border p-2 rounded mb-2">
//                         <h5 className="font-bold">{section.title}</h5>
//                         <p>{section.description}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <div>
//                   <button onClick={() => setShowSectionForm(false)} className="float-right">
//                     <MdClose size={24} />
//                   </button>
//                   <form className="space-y-4">
//                     <div className="flex flex-col">
//                       <label className="font-bold mb-2">Bölüm Başlığı:</label>
//                       <input type="text" name="title" value={newSection.title} onChange={handleSectionChange} className="border p-2 rounded" />
//                     </div>
//                     <div className="flex flex-col">
//                       <label className="font-bold mb-2">Bölüm Açıklaması:</label>
//                       <textarea name="description" value={newSection.description} onChange={handleSectionChange} className="border p-2 rounded" />
//                     </div>
//                     <div className="flex flex-col">
//                       <label className="font-bold mb-2">Video:</label>
//                       <input type="file" name="video" onChange={handleSectionFileChange} className="border p-2 rounded" />
//                     </div>
//                     <div className="flex flex-col">
//                       <label className="font-bold mb-2">Bölüm Numarası:</label>
//                       <input type="number" name="number" value={newSection.number} onChange={handleSectionChange} className="border p-2 rounded" />
//                     </div>
//                     <button type="button" onClick={addSection} className="bg-blue-500 text-white px-4 py-2 rounded">Bölüm Ekle</button>
//                   </form>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//             <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={closeModal}>
//               Kapat
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;

// import React, { useState } from 'react';
// import { MdClose, MdEdit, MdDelete } from "react-icons/md";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Modal({ closeModal }) {
//   const [course, setCourse] = useState({
//     name: '',
//     description: '',
//     coverPhoto: null,
//     totalSections: '',
//     isPaid: false,
//     category: '',
//     price: '',
//     sections: []
//   });

//   const [showSectionForm, setShowSectionForm] = useState(false);
//   const [newSection, setNewSection] = useState({ title: '', description: '', video: null, number: '' });

//   const handleChange = (e) => {
//     setCourse({...course, [e.target.name]: e.target.value});
//   }

//   const handleFileChange = (e) => {
//     if (e.target.name === 'coverPhoto') {
//       if (!['image/jpeg', 'image/png'].includes(e.target.files[0].type)) {
//         toast.error('Lütfen bir JPG veya PNG dosyası seçin');
//         return;
//       }
//     } else if (e.target.name === 'video') {
//       if (e.target.files[0].type !== 'video/mp4') {
//         toast.error('Lütfen bir MP4 dosyası seçin');
//         return;
//       }
//     }
//     setCourse({...course, [e.target.name]: e.target.files[0]});
//   }

//   const handleSectionChange = (e) => {
//     setNewSection({...newSection, [e.target.name]: e.target.value});
//   }

//   const handleSectionFileChange = (e) => {
//     if (e.target.files[0].type !== 'video/mp4') {
//       toast.error('Lütfen bir MP4 dosyası seçin');
//       return;
//     }
//     setNewSection({...newSection, [e.target.name]: e.target.files[0]});
//   }

//   const addSection = () => {
//     setCourse({...course, sections: [...course.sections, newSection]});
//     setNewSection({ title: '', description: '', video: null, number: '' });
//     setShowSectionForm(false);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Form gönderimini burada işleyin
//   }

//   return (
//     <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
//       <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
//         <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
//         <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-full sm:w-full">
//           <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//             <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
//               Kurs Ekle
//             </h3>
//             <div className="mt-2">
//               {!showSectionForm ? (
//                 <div className="flex flex-wrap -mx-2">
//        <form onSubmit={handleSubmit} className="space-y-4 w-1/2 px-2">
//                     <div className="flex flex-col">
//                       <label className="font-bold mb-2">Kurs Adı:</label>
//                       <input type="text" name="name" onChange={handleChange} className="border p-2 rounded" />
//                     </div>
//                     <div className="flex flex-col">
//                       <label className="font-bold mb-2">Kurs Açıklaması:</label>
//                       <textarea name="description" onChange={handleChange} className="border p-2 rounded" />
//                     </div>
//                     <div className="flex flex-col">
//                       <label className="font-bold mb-2">Kapak Fotoğrafı:</label>
//                       <input type="file" name="coverPhoto" onChange={handleFileChange} className="border p-2 rounded" />
//                     </div>
//                     <div className="flex flex-col">
//                       <label className="font-bold mb-2">Toplam Bölüm:</label>
//                       <input type="number" name="totalSections" onChange={handleChange} className="border p-2 rounded" />
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <input type="checkbox" name="isPaid" onChange={(e) => setCourse({...course, isPaid: e.target.checked})} />
//                       <label className="font-bold">Kurs ücretli mi?</label>
//                     </div>
//                     <div className="flex flex-col">
//                       <label className="font-bold mb-2">Kurs Kategorisi:</label>
//                       <select name="category" onChange={handleChange} className="border p-2 rounded">
//                         <option value="">Bir kategori seçin</option>
//                         {/* Kategorilerinizi buraya ekleyin */}
//                       </select>
//                     </div>
//                     <div className="flex flex-col">
//                       <label className="font-bold mb-2">Kurs Fiyatı:</label>
//                       <input type="number" name="price" onChange={handleChange} className="border p-2 rounded" />
//                     </div>
//                     <button type="button" onClick={() => setShowSectionForm(true)} className="bg-blue-500 text-white px-4 py-2 rounded">Bölüm Ekle</button>
//                     <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Gönder</button>
//                   </form>
//                   <div className="w-1/2 px-2 mt-4">
//                     <h4 className="font-bold mb-2">Eklenen Bölümler:</h4>
//                     {course.sections.map((section, index) => (
//                       <div key={index} className="border p-2 rounded mb-2">
//                         <h5 className="font-bold">{section.title}</h5>
//                         <p>{section.description}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <div>
//                   <button onClick={() => setShowSectionForm(false)} className="float-right">
//                     <MdClose size={24} />
//                   </button>
//                   <form className="space-y-4">
//                     <div className="flex flex-col">
//                       <label className="font-bold mb-2">Bölüm Başlığı:</label>
//                       <input type="text" name="title" value={newSection.title} onChange={handleSectionChange} className="border p-2 rounded" />
//                     </div>
//                     <div className="flex flex-col">
//                       <label className="font-bold mb-2">Bölüm Açıklaması:</label>
//                       <textarea name="description" value={newSection.description} onChange={handleSectionChange} className="border p-2 rounded" />
//                     </div>
//                     <div className="flex flex-col">
//                       <label className="font-bold mb-2">Video:</label>
//                       <input type="file" name="video" onChange={handleSectionFileChange} className="border p-2 rounded" />
//                     </div>
//                     <div className="flex flex-col">
//                       <label className="font-bold mb-2">Bölüm Numarası:</label>
//                       <input type="number" name="number" value={newSection.number} onChange={handleSectionChange} className="border p-2 rounded" />
//                     </div>
//                     <button type="button" onClick={addSection} className="bg-blue-500 text-white px-4 py-2 rounded">Bölüm Ekle</button>
//                   </form>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//             <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={closeModal}>
//               Kapat
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Modal;

import React, { useState } from 'react';
import { MdClose, MdEdit, MdDelete, MdAdd, MdArrowBack  } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SectionModal from './SectionModal';

function Modal({ closeModal }) {
  const [course, setCourse] = useState({
    name: '',
    description: '',
    coverPhoto: null,
    totalSections: '',
    isPaid: false,
    category: '',
    price: '',
    sections: []
  });

  const [showSectionForm, setShowSectionForm] = useState(false);
  const [newSection, setNewSection] = useState({ title: '', description: '', video: null, number: '' });

  const handleChange = (e) => {
    setCourse({...course, [e.target.name]: e.target.value});
  }
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [video, setVideo] = useState(null);
  
  const handleCoverPhotoFileChange = (e) => {
    if (!['image/jpeg', 'image/png'].includes(e.target.files[0].type)) {
      toast.error('Lütfen bir JPG veya PNG dosyası seçin');
      return;
    }
    setCoverPhoto(e.target.files[0]);
  }
  
  const handleVideoFileChange = (e) => {
    if (e.target.files[0].type !== 'video/mp4') {
      toast.error('Lütfen bir MP4 dosyası seçin');
      return;
    }
    setVideo(e.target.files[0]);
  }

  const handleSectionChange = (e) => {
    setNewSection({...newSection, [e.target.name]: e.target.value});
  }
  
  const addSection = () => {
    setCourse({...course, sections: [...course.sections, newSection]});
    setNewSection({ title: '', description: '', video: null, number: '' });
    setShowSectionForm(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderimini burada işleyin
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-full sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          {showSectionForm ? (
            <button onClick={() => setShowSectionForm(false)} className="float-left">
              <MdArrowBack size={24} />
            </button>
          ) : (
            <button onClick={closeModal} className="float-right">
              <MdClose size={24} />
            </button>
          )}
            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
              Kurs Ekle
            </h3>
            <div className="mt-2">
              {!showSectionForm ? (
                <div className="flex flex-wrap -mx-2">
                  <form onSubmit={handleSubmit} className="space-y-4 w-1/2 px-2">
                    <div className="flex flex-col">
                      <label className="font-bold mb-2">Kurs Adı:</label>
                      <input type="text" name="name" onChange={handleChange} className="border p-2 rounded" />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-bold mb-2">Kurs Açıklaması:</label>
                      <textarea name="description" onChange={handleChange} className="border p-2 rounded" />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-bold mb-2">Kapak Fotoğrafı:</label>
                      <input type="file" name="coverPhoto" onChange={handleCoverPhotoFileChange} className="border p-2 rounded" />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-bold mb-2">Toplam Bölüm:</label>
                      <input type="number" name="totalSections" onChange={handleChange} className="border p-2 rounded" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" name="isPaid" onChange={(e) => setCourse({...course, isPaid: e.target.checked})} />
                      <label className="font-bold">Kurs ücretli mi?</label>
                    </div>
                    <div className="flex flex-col">
                      <label className="font-bold mb-2">Kurs Kategorisi:</label>
                      <select name="category" onChange={handleChange} className="border p-2 rounded">
                        <option value="">Bir kategori seçin</option>
                        {/* Kategorilerinizi buraya ekleyin */}
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label className="font-bold mb-2">Kurs Fiyatı:</label>
                      <input type="number" name="price" onChange={handleChange} className="border p-2 rounded" />
                    </div>
                    <button type="submit" className="fixed right-4 bottom-4 bg-green-500 text-white px-4 py-2 rounded">Ekle</button>
                  </form>
                  <div className="w-1/2 px-2 mt-4">
                    <h4 className="font-bold mb-2">Eklenen Bölümler</h4>
                    <table className="table-auto border-collapse border border-green-800 mt-2">
                      <tbody>
                        {course.sections.sort((a, b) => a.number - b.number).map((section, index) => (
                          <tr key={index}>
                            <td className="border border-green-600">{section.title}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <button type="button" onClick={() => setShowSectionForm(true)} className="bg-khaki text-gray-800 px-2 py-1 rounded mt-2 float-right"><MdAdd size={16} /></button>
                  </div>
                </div>
              ) : (
                <div>
                  <form className="space-y-4">
                    <div className="flex flex-col">
                      <label className="font-bold mb-2">Bölüm Başlığı:</label>
                      <input type="text" name="title" value={newSection.title} onChange={handleSectionChange} className="border p-2 rounded" />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-bold mb-2">Bölüm Açıklaması:</label>
                      <textarea name="description" value={newSection.description} onChange={handleSectionChange} className="border p-2 rounded" />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-bold mb-2">Video:</label>
                      <input type="file" name="video" onChange={handleVideoFileChange} className="border p-2 rounded" />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-bold mb-2">Bölüm Numarası:</label>
                      <input type="number" name="number" value={newSection.number} onChange={handleSectionChange} className="border p-2 rounded" />
                    </div>
                    <button type="button" onClick={addSection} className="bg-blue-500 text-white px-4 py-2 rounded">Bölüm Ekle</button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );

}
export default Modal;