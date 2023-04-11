import GetCharacterByName from '../rickAndMortyApi/GetCharacterByName';

describe('GetCharacterByName', () => {
  it('check returning', () => {
    GetCharacterByName('Morty').then((characterByName) => {
      expect(characterByName.results.length);
    });
  });
});
