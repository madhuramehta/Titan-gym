export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '94ff602b50mshe4130c05fdb5106p16a804jsneb77e04965f9',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '27d0a05052mshdeab56e13ec3a41p18fd09jsn017b90444fa5',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
  };


export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
