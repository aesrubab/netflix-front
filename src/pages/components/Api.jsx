export const signUp = async (formData) => {
    const response = await fetch('http://localhost:5001/api/v1/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'An error occurred.');
    }
  
    return response.json();
  };

  
export const logIn = async (formData) => {
  const response = await fetch('http://localhost:5001/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Xəta baş verdi.');
  }

  return response.json(); 
};
