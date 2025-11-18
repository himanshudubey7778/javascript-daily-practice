const dropdown = document.getElementById('dropdown');
const output = document.getElementById('Output');
const statusText = document.getElementById('statusText');

function populateUsers() {
    statusText.textContent = "Loading Users...";

    const xhr = new XMLHttpRequest();
    xhr.open('GET', "https://jsonplaceholder.typicode.com/users");

    xhr.onload = () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            //success
            try {
                const users = JSON.parse(xhr.responseText);
                dropdown.innerHTML = '<option value="">-- choose a user --</option>';

                users.forEach(user => {
                    const opt = document.createElement('option');
                    opt.textContent = user.name;
                    opt.value = user.id;
                    dropdown.appendChild(opt);
                });

                statusText.textContent = "users loaded.";
                output.textContent = "choose a user from the dropdown.";
            } catch(error) {
                status
            }
        }
    }
}