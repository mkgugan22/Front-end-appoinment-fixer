
   function login(w){
    w.preventDefault();
    console.log('Submited...');
    console.log('hiii');
    var company=document.getElementById('Cname').value;
    var phoneNumber=document.getElementById('phone').value;
    var officialEmail=document.getElementById('Oemail').value;
    var officeAddress=document.getElementById('Address').value;
   var msg=document.getElementById('msg');
  //  let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/; 
   var ph=/^[0-9]+$/;
  

  if(email.length==' '||phoneNumber.length==' '||officeAddress.length ==' '||officialEmail.length ==' '||company.length ==' '){
    msg.className="alert alert-danger";
    msg.innerHTML='Please enter all fields';
   }
   if(company.length<2){
    msg.className="alert alert-danger";
    msg.innerHTML='Please enter the company name correctly';
   }
   if(!(ph.test(phoneNumber)) && ph.length!=10){
    msg.className="alert alert-danger";
    msg.innerHTML="Please enter correct phoneNumber";
   }
  }
  document.getElementById('regForm1').addEventListener('submit',login,false);
   