const namee = document.getElementById("name");
const emaill = document.getElementById("email");
const passwordd = document.getElementById("password");
const confirmPasswordd = document.getElementById("confirmPassword");
const formm = document.getElementById("form");

formm.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
})

const validateInputs = () => {
    const nameValue = namee.value.trim()
    const emailValue = emaill.value.trim()
    const passwordValue = passwordd.value.trim()
    const confirmPasswordValue = confirmPasswordd.value.trim()
    
    if(nameValue === ''){
        setError(username)
    }
} 