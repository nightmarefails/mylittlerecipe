const loginFormatHandler = async (event) => {
    event.preventDefault();

    // collect values from the login form
    const user_name = document.querySelector('#userInfo').value.trim();
  const password = document.querySelector('#userPassword').value.trim();

  if (user_name && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ user_name, password }),
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

const signupHandler = async (event) => {
  event.preventDefault();
  console.log("Running");

  const user_name = document.querySelector('#userInfo').value.trim();
  const password = document.querySelector('#userPassword').value.trim();

  console.log(user_name, password);

  if (user_name && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ user_name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/account');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#loginForm')
  .addEventListener('submit', loginFormatHandler);

document
  .querySelector("#signupBtn")
  .addEventListener('click', signupHandler);
