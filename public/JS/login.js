
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const topGenre = document.querySelector('#genre-signup').value.trim();

   
    if (name && email && password && topGenre ) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ name, email, password, topGenre }),
            headers: { 'Content-Type': 'application/json' },
          });
    }
    console.log("hitting form submission");
  };
  
//   document
//     .querySelector('.login-form')
//     .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  