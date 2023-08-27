import React, { useState } from 'react';

function LanguageSelect({ onSelectLanguage }) {
  const [selectedLanguage, setSelectedLanguage] = useState('korean');

  const handleSelectChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    onSelectLanguage(newLanguage);
  };

  return (
    <select className='NF-Lan-Select' value={selectedLanguage} onChange={handleSelectChange}>
      <option value="korean">한국어</option>
      <option value="english">English</option>
    </select>
  );
}

export default LanguageSelect;