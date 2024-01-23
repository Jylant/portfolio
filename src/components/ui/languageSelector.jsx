import React from 'react';
import { useRecoilState } from 'recoil';
import { languageAtom } from '..atoms/lang'  // replace with the actual path

function LanguageSelector() {
  const [language, setLanguage] = useRecoilState(languageAtom);

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <select value={language} onChange={handleChange}>
      {languageAtom.choices.map((choice) => (
        <option key={choice} value={choice}>
          {choice}
        </option>
      ))}
    </select>
  );
}

export default LanguageSelector;