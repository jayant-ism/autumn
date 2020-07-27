// initialize the firebase 

var config = {
    apiKey: "AIzaSyDDJ5Wg9JL8G459fpTICau0jneDe2g2bwY",
    authDomain: "autumn-9547a.firebaseapp.com",
    databaseURL: "https://autumn-9547a.firebaseio.com",
    projectId: "autumn-9547a",
    storageBucket: "autumn-9547a.appspot.com",
    messagingSenderId: "44450015763",
    appId: "1:44450015763:web:24dd4805de7dd97533ede6",
    measurementId: "G-6F0DP8L302"
  };

firebase.initializeApp(config) ; 

// reference message 
var message_ref = firebase.database().ref('messages') ; 




// make an event  listner  for submit  buttom  of 

document.getElementById('myForm').addEventListener('submit' , submitForm ) ;


// e refers to event 
// submit the form 
function submitForm(e){
    e.preventDefault() ; 
    
    // for  checking whether  it is woring or not console.log("jayant") ;
    

    // get values 

    var first_name = getInputVal('first_name') ; 
    var last_name = getInputVal('last_name') ; 
    var email = getInputVal('email') ; 
    var subject = getInputVal('subject') ; 
    var details = getInputVal('details') ;

    
/*  
    check all the values  

    console.log(first_name) ; 
    console.log(last_name) ; 
    console.log(email) ; 
    console.log(details) ; 
    console.log(subject) ; 
  
  */


    // for  erasing all the values 

    document.getElementById('first_name').value ='' ;
    document.getElementById('last_name').value ='' ;
    document.getElementById('email').value ='' ;
    document.getElementById('details').value ='' ;
    document.getElementById('subject').value ='' ;

    saveMessage(first_name , last_name ,  email , subject , details  ) ;
}

function getInputVal(id){
 return document.getElementById(id).value ; 

}


// save the messaget  to firebase 

function saveMessage(first_name , last_name , email , details , subject )
{

    var newmessage_ref =  message_ref.push() ; 
    newmessage_ref.set({

        first_name:first_name , 
        last_name :last_name , 
        email : email  ,
        subject : subject ,
        
        details : details  ,
        

    }) ;



}