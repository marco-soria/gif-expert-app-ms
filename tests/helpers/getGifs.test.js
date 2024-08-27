// tests/helpers/getGifs.test.js
import { getGifs } from '../../src/helpers/getGifs';

describe('getGifs', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('should return an array of gifs', async () => {
    fetch.mockResponseOnce(JSON.stringify({
      data: [
        {
          id: '1',
          title: 'Test Gif',
          images: {
            downsized_medium: {
              url: 'https://testurl.com/gif1.gif',
            },
          },
        },
      ],
    }));

    const gifs = await getGifs('Satoru');
    //console.log(gifs)
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: '1',
      title: 'Test Gif',
      url: 'https://testurl.com/gif1.gif',
    });
  });
});