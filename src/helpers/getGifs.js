export const getGifs = async( category ) => {

    const url = `http://api.giphy.com/v1/gifs/search?apikey=CPx8q7pGx51007B7BCDH2tiQAysL5OA3&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}