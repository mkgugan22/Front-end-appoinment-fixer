function reg(e){
  e.preventDefault();
  console.log('Submited...');
  console.log('hiii');
  var name=document.getElementById('Fname').value;
  var email=document.getElementById('email').value;
  var password=document.getElementById('password').value;
  var password2=document.getElementById('Password2').value;
 var msg=document.getElementById('msg');
 var rex=/^[A-z]+$/;

//    var reg=[/^[a-zA-Z0-.9!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/]; 
//    msg.innerHTML =name +' is registered with email'+email;
 if(name.length==' '||email.length==' '|| password.length== ' '||password2.length==' '||email.length==' '){
  msg.className="alert alert-danger";
  msg.innerHTML='Please enter all fields';
 }
 else{
  if(name.length<3 && !rex.test(name)){
      msg.className="alert alert-danger";
      msg.innerHTML ='please enter name correctly'
  }
 }
 if(password!=password2){
  msg.className="alert alert-danger";
  msg.innerHTML="Please enter correct password";
 }
}
document.getElementById('regForm').addEventListener('submit',reg,false);