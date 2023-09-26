function submitForm() {
    var userName = document.querySelector('#contact-form [name="username"]').value;
    var senderEmail = document.querySelector('#contact-form [name="email"]').value;
    var senderPhone = document.querySelector('#contact-form [name="phone"]').value;
    var userSubject = document.querySelector('#contact-form [name="subject"]').value;
    var message = document.querySelector('#contact-form [name="message"]').value;

    // If any required field is empty, show an error message
    if (!userName || !senderEmail || !userSubject || !message) {
        alert("Please fill all required fields before submitting the form.");
        return;
    }

    // Construct the email content
    var to = "kaveeshachathil@gmail.com"; // Replace with your email address
    var subject = "Contact Form Submission";
    var emailBody =
        "Name: " + userName + "\n" +
        "Email: " + senderEmail + "\n" +
        "Phone: " + senderPhone + "\n" +
        "Subject: " + userSubject + "\n" +
        "Message: " + message + "\n";

    // Use the mailto link to open the user's email client with the pre-filled email
    var mailtoLink = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(emailBody);

    // Redirect the user to the mailto link
    window.location.href = mailtoLink;
}
