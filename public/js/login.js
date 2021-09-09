const loginFormatHandler = async (event) => {
    event.preventDefault();

    // collect values from the login form
    const username = document.querySelector('#userInfo').value.trim();
  const password = document.querySelector('#userPassword').value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/account');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#loginForm')
  .addEventListener('submit', loginFormatHandler);
