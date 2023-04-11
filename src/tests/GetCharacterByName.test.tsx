import GetCharacterByName from '../rickAndMortyApi/GetCharacterByName';

describe('GetCharacterByName', () => {
  it('check returning', async () => {
    const data = await GetCharacterByName('Morty');
    expect(data.results.length).toBeDefined();
  });
});
