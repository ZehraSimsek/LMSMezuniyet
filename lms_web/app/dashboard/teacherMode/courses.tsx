import React, { useState } from 'react';
import Modal from './Modal'; 
import { FaPlus } from 'react-icons/fa'

function courses() {
  const [modalOpen, setModalOpen] = useState(false); 

  return (
    <div style={{ position: 'relative', top: '60px' }} className="flex flex-col md:flex-row">
      <div className="md:w-1/4 p-4">
        <button onClick={() => setModalOpen(true)} className="bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-2 rounded flex items-center w-28">
          <FaPlus className="mr-1" />
          <span>Kurs Ekle</span>
        </button>
        {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
      </div>
      <div className="md:w-3/4 p-4">
        <div>lessons</div>
      </div>
    </div>
  )
}

export default courses
