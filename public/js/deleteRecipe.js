const deleteHandler = async (event) => {
    event.preventDefault();

    // collect values from the login form
    const id = event.target.dataset.id

    if (id) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/recipes/delete', {
            method: 'POST',
            body: JSON.stringify({ id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/account');
        } else {
            alert(response.statusText);
        }
    } else {
        alert("Please enter a Url")
    }
};

const buttons = document.querySelectorAll('.deleteButton');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', deleteHandler)
};