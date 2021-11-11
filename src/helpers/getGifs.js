

export const getGifs = async(category, cant) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=fTlcugxLI3CvVFv3R8PXr6d2YQglfva5`;
    const resp = await fetch(url);
    const {data} =  await resp.json();

 

    const gifs = data.map(img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.original.url
        }
    });

   return gifs;
    

}