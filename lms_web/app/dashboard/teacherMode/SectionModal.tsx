import React, { useState } from 'react';

function SectionModal({ addSection }) {
  const [newSection, setNewSection] = useState({ title: '', description: '', video: null, number: '' });

  const handleSectionChange = (e) => {
    setNewSection({...newSection, [e.target.name]: e.target.value});
  }

  const handleAddSection = () => {
    addSection(newSection);
    setNewSection({ title: '', description: '', video: null, number: '' });
  }

  return (
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
        <button type="button" onClick={handleAddSection} className="bg-blue-500 text-white px-4 py-2 rounded">Bölüm Ekle</button>
      </form>
    </div>
  );
}

export default SectionModal;
