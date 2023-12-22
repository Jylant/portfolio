import React from 'react';
import { useRecoilState } from 'recoil';
import { languageAtom } from './path_to_your_atom_file';  // replace with the actual path

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