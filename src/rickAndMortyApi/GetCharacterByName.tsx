import { AllCharacters } from '../interfaces';

const GetCharacterByName = async (name: string) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
  const characterByName: AllCharacters = await response.json();
  if (!response.ok) throw new Error('GetCharacterByName fetch error');
  return characterByName;
};

export default GetCharacterByName;
