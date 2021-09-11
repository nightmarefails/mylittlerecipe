const searchHandler = async (event) => {
    event.preventDefault();

    // collect values from the login form
    const name = document.querySelector('#recipeLink').value.trim();

    if (url) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/recipes', {
            method: 'POST',
            body: JSON.stringify({ name }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/account');
        } else {
            alert(response.statusText);
        }
    } else {
        alert("Please enter a url")
    }
};

document.querySelector('#recipeForm').addEventListener('submit', searchHandler)