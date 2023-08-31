import React, { useState, useRef } from 'react';
import { BiGlobe } from "react-icons/bi";
import '../css/LanguageSelect.css';


function LanguageSelect({ onSelectLanguage }) {
  const [selectedLanguage, setSelectedLanguage] = useState('korean');
  const selectRef = useRef(null);

  const handleSelectChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    onSelectLanguage(newLanguage);
  };

  return (
    <div className="language-container">
      <BiGlobe className="globe-icon"/>
      <select 
        className='NF-Lan-Select' 
        value={selectedLanguage} 
        onChange={handleSelectChange} 
        ref={selectRef}
      >
        <option value="korean" className="hidden-option">한국어</option>
        <option value="english" className="hidden-option">English</option>
      </select>
    </div>
  );
}

export default LanguageSelect;
