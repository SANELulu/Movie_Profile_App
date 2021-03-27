const loginForm = document.querySelector('.login-form')
const signupForm = document.querySelector('.signup-form')
const logoutForm = document.querySelector('#logout')



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
        }else{
        window.location.href = 'http://localhost:3001/profile';
        }
        
        //if response.staus == 200 trigger success toast WIP 
        // return response;
        
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
          }
          //if response.staus == 200 trigger success toast WIP   
    }
      
    console.log("hitting form submission");
  };

  const logoutFormHandler = async (event) => { 
    // event.preventDefault();
   
    return await fetch('api/users/logout').then(
      ()=> {
        window.location.href = 'http://localhost:3001/login'
        console.log("redirecting to login screen");
      }
    )
  };
  
if(loginForm){
loginForm.addEventListener('submit',loginFormHandler)
};
if(signupForm){
signupForm.addEventListener('submit',signupFormHandler)
};
if(logoutForm){
logoutForm.addEventListener('submit',logoutFormHandler)
};
  
  
