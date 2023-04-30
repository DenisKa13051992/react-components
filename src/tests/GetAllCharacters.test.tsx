import GetAllCharacters from '../rickAndMortyApi/GetAllCharacters';

describe('GetAllCharacters', () => {
  it('check returning', async () => {
    const data = await GetAllCharacters();
    expect(data.results.length).toBeDefined();
  });
});
