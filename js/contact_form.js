function submitForm() {
    var userName = document.getElementById("username").value;
    var senderEmail = document.getElementById("email").value;
    var senderPhone = document.getElementById("phone").value;
    var userSubject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
  
    
    if (!userName || !senderEmail || !senderPhone || !userSubject || !message) {
      alert("Please fill all required fields before submitting the form.");
      return;
    }
  
  
    var to = "kaveeshachathil@gmail.com"; 
    var subject = "Contact Form Submission";
    var emailBody =
      "Name: " + userName + "\n" +
      "Email: " + senderEmail + "\n" +
      "Phone: " + senderPhone + "\n" +
      "Subject: " + userSubject + "\n" +
      "Message: " + message + "\n";
  
    
    var mailtoLink = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(emailBody);
  
    
    window.location.href = mailtoLink;
  }
  