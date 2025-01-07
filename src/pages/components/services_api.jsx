export const fetchMovieTrailers = async (id, accessToken) => {
    const response = await fetch(`http://localhost:5001/api/v1/movie/${id}/trailers`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.json();
  };
  
  export const fetchTvTrailers = async (id, accessToken) => {
    const response = await fetch(`http://localhost:5001/api/v1/tv/${id}/trailers`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.json();
  };
  
  export const fetchSimilarMovies = async (id, accessToken) => {
    const response = await fetch(`http://localhost:5001/api/v1/movie/${id}/similar`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.json();
  };
  
  export const fetchSimilarTvShows = async (id, accessToken) => {
    const response = await fetch(`http://localhost:5001/api/v1/tv/${id}/similar`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.json();
  };
  

export const fetchMoviesByCategory = async (accessToken) => {
  try {
    const response = await fetch('http://localhost:5001/api/v1/movie/category', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error:", errorData);
      throw new Error(errorData.message || "Something went wrong!");
    }

    return response.json();
  } catch (error) {
    console.error("An error occurred while fetching movies:", error);
    throw error;
  }
};


  
  export const fetchTvShowsByCategory = async (accessToken) => {
    const response = await fetch('http://localhost:5001/api/v1/tv/category', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.json();
  };

  export const getAccessToken = async () =>{
    return localStorage.getItem("token")
  }