console.log("hello");

const saveBtn = document.querySelector(".save-btn");
const usernameInput = document.getElementById("username");
const displayName = document.getElementById("display-name");
const clearBtn = document.querySelector(".clear-btn");

saveBtn.addEventListener('click', () => {
    const name = usernameInput.value;
    displayName.textContent = name;
    localStorage.setItem(usernameInput, name);
    
});

clearBtn.addEventListener("click", () => {
    displayName.textContent = "";
    usernameInput.value = "";
});

