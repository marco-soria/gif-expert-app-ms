import 'whatwg-fetch'
import { getEnvironments } from './getEnvironments'

export const getGifs = async (category) => {

    const { VITE_APP_GIPHY_API_KEY } = getEnvironments();
    // const url = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_APP_GIPHY_API_KEY}&q=${category}&limit=10`
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${VITE_APP_GIPHY_API_KEY}&q=${category}&limit=10`;
    const response = await fetch(url);
    const { data = [] } = await response.json();

    //console.log('API response data:', data);

    const gifs = data.map(img => ({
         
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        
    }))

    //console.log('Mapped gifs:', gifs);

    // console.log(gifs);
    return gifs;
}