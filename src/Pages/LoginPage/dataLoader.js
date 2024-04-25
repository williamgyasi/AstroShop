
export const catLoader = async () => {
    const resp = await fetch("https://api.thecatapi.com/v1/images/search");
    const cat = await resp.json();
    return cat[0]
  };
  