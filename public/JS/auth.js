const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const logoutForm = document.querySelector('#logout');
const loginBtn = document.querySelector('#login-btn');



const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  
  if (email && password) {
      const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({  email, password }),
          headers: { 'Content-Type': 'application/json' },
        });

        if(response.status !== 200){
          console.log(" wrong username or password please try again");

          Toastify({
            text: "Wrong Email or Password",
            backgroundColor: "linear-gradient(to right, #ED3710, #7B35FF )",
            className: "Error Toast",
            gravity: "top",
            position: "center"
          }).showToast();

        }else{
        window.location.href = '/profile';
        }
         
  }
}
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
          
          if(response.status !== 200){
            console.log("error at response");

            Toastify({
              text: "Error on Signup",
              backgroundColor: "linear-gradient(to right, #ED3710, #7B35FF )",
              className: "Error Toast",
              gravity: "top",
              position: "center"
            }).showToast();

          }
          
          if(response.status == 200){
            console.log("hitting form submission");
           
            Toastify({
              text: "Signup Successful",
              backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
              className: "Success Toast",
              gravity: "top",
              position: "center"
            }).showToast();

          }  
    }
  };
const logoutFormHandler = async () => { 
  
    return await fetch('api/users/logout').then(
      ()=> {
        window.location.href = '/login'
        console.log("redirecting to login screen");
      }
    )
  };
const loginRedirect = async () => {
 
    window.location.href = '/login'
    
  
}






// const getGenre = async () => {
//   const response = await fetch('/api/users/profile', {
//     method: "GET"
//   }
//   ).then(
//     console.log(response)
//   )
//   };


if(loginForm){
loginForm.addEventListener('submit',loginFormHandler)
};
if(signupForm){
signupForm.addEventListener('submit',signupFormHandler)
};
if(logoutForm){
logoutForm.addEventListener('submit',logoutFormHandler)
};
if(loginBtn){
  loginBtn.addEventListener('click', loginRedirect)
}
    



































