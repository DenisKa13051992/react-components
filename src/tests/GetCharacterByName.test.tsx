import GetCharacterByName from '../rickAndMortyApi/GetCharacterByName';

describe('GetCharacterByName', () => {
  it('check returning with Morty', async () => {
    const data = await GetCharacterByName('Morty');
    expect(data.results.length).toBeDefined();
  });
});
