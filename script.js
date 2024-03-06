let formInput = document.querySelectorAll('.form-input');
let     btnGreen = document.querySelector('.btn-green');
let form = document.querySelector('.form');




window.addEventListener('DOMContentLoaded',()=>{
    formInput.forEach((item)=>{
        item.value = ''
    })
})




btnGreen.addEventListener('click', (event)=>{  // event listner start

    event.preventDefault();

    formInput.forEach((item) =>{  // foreach starts 

// for text input
        if (item.type == 'text'){  // first and last name validation starts

            if (item.value == ''){  // input has no value
                if (item.parentElement.lastElementChild.classList.contains('hide-me')){
                    item.classList.add('color-change')
                    item.parentElement.lastElementChild.classList.remove('hide-me')
                    item.parentElement.lastElementChild.classList.add('show-me');
                    item.nextElementSibling.classList.remove('hide-me');
                    item.nextElementSibling.classList.add('show-me');
                    
                }
            } // input has no value

            else if (item.value!= ''){ // input has a new value
                if (item.parentElement.lastElementChild.classList.contains('show-me')){
                    item.parentElement.lastElementChild.classList.remove('show-me')
                    item.parentElement.lastElementChild.classList.add('hide-me');
                    item.nextElementSibling.classList.remove('show-me');
                    item.nextElementSibling.classList.add('hide-me');
                    item.classList.remove('color-change')
                }
            }  // input has a new value
            
        } // first and last name validation ends

// for email
        else if (item.type == 'email'){  // email validation starts
            const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  //email pattern

            if (item.value == ''){ // email input empty
                item.parentElement.lastElementChild.textContent = 'email cannot be empty';
                item.parentElement.lastElementChild.classList.remove('hide-me')
                item.parentElement.lastElementChild.classList.add('show-me');   
                item.nextElementSibling.classList.remove('hide-me');
                item.nextElementSibling.classList.add('show-me');
                item.classList.add('color-change')
            } // email input empty

            else if(item.value.match(pattern)) {  // email pattern matching
                if (item.parentElement.lastElementChild.classList.contains('show-me')){
                    item.parentElement.lastElementChild.classList.remove('show-me')
                    item.parentElement.lastElementChild.classList.add('hide-me');
                    item.nextElementSibling.classList.remove('show-me');
                    item.nextElementSibling.classList.add('hide-me');
                    item.classList.remove('color-change')

                }                
            }

            else{
                item.parentElement.lastElementChild.textContent = 'Looks like this is not an email';
                item.parentElement.lastElementChild.classList.remove('hide-me')
                item.parentElement.lastElementChild.classList.add('show-me');    
                item.nextElementSibling.classList.remove('hide-me');
                item.nextElementSibling.classList.add('show-me');
                item.classList.add('color-change')
            }
            
        } // email validation ends


// for password

        else if (item.type == 'password'){
            if (item.value == ''){ // password empty
                    item.parentElement.lastElementChild.textContent = 'Password cannot be empty';
                    item.parentElement.lastElementChild.classList.remove('hide-me')
                    item.parentElement.lastElementChild.classList.add('show-me');  
                    item.nextElementSibling.classList.remove('hide-me');
                    item.nextElementSibling.classList.add('show-me'); 
                    item.classList.add('color-change')
                } // password input empty 

                else if (item.value!= ''){ // password has a  value
                    if (item.parentElement.lastElementChild.classList.contains('show-me')){
                        item.parentElement.lastElementChild.classList.remove('show-me')
                        item.parentElement.lastElementChild.classList.add('hide-me');
                        item.nextElementSibling.classList.remove('show-me');
                        item.nextElementSibling.classList.add('hide-me');
                        item.classList.remove('color-change')
                    }
                }  // password has a value
            }
            

        
    }) // foreach ends

    

    // form reset

    // reset();
    
    
}) // event listener end



// form reset function 
function reset(){
    formInput.forEach((item)=>{
        item.value = '';
    })
}















