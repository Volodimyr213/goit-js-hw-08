import throttle from 'lodash.throttle';

const LOCAL_KEY = "feedback-form-state";

const formHtml =document.querySelector(".feedback-form");
formHtml.addEventListener('input',throttle(onInputDataFn, 1000));
formHtml.addEventListener('submit', onDataFormFn);

const dataFromLocale = JSON.parse( localStorage.getItem(LOCAL_KEY))|| {}


const {email,message} =formHtml.elements ;

reloadPage()

    function onInputDataFn (evt){
      const data = {
            email : email.value, 
            message : message.value,
        };

        localStorage.setItem(LOCAL_KEY, JSON.stringify(data))
    };

       
    

        function reloadPage(){
            email.value = dataFromLocale.email ||"";
            message.value = dataFromLocale.message ||"";
        };

        function onDataFormFn(evt){
            evt.preventDefault();
            const submitData = {
                email: email.value,
                message : message.value,
            };
            console.log( submitData);

            if (email.value === "" || message.value === "" ) {
              return alert("Заповніть всі поля")  
            };
            localStorage.removeItem(LOCAL_KEY);
            evt.currentTarget.reset();
            data = {};

        };

      
    

