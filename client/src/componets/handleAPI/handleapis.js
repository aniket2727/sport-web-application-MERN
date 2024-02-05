const base_url = 'http://localhost:8008/hooks';

const handleregister = async ({email,name,pass}) => {
  try {
    const result = await fetch(`${base_url}/register/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name, pass}),
    });

    const data = await result.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error; // Rethrow the error for handling at the calling site
  }
};



const handlelogin = async ({ email, pass }) => {
    try {
      const result = await fetch(`${base_url}/login/login`, {
        method: 'POST', // Use 'POST' instead of 'post'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, pass }), // Correct case for 'pass'
      });
  
      const data = await result.json(); // Correct case for 'json'
      console.log(result);
      return data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error; // Rethrow the error for handling at the calling site
    }
  };
  
module.exports = {
  handleregister,
  handlelogin,
};
