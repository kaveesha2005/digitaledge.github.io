<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $userName = isset($_POST['username']) ? $_POST['username'] : "";
    $senderEmail = isset($_POST['email']) ? $_POST['email'] : "";
    $senderPhone = isset($_POST['phone']) ? $_POST['phone'] : "";
    $userSubject = isset($_POST['subject']) ? $_POST['subject'] : "";
    $message = isset($_POST['message']) ? $_POST['message'] : "";

    if ($userName && $senderEmail && $userSubject && $message) {
        $to = "kaveeshachathil@gmail.com";  
        $subject = "Contact Form Submission";
        $emailBody =
            "Name: " . $userName . "\n" .
            "Email: " . $senderEmail . "\n" .
            "Phone: " . $senderPhone . "\n" .
            "Subject: " . $userSubject . "\n" .
            "Message: " . $message . "\n";

        mail($to, $subject, $emailBody);

         
        header('Location: thank_you.html');
        exit();
    } else {
         
        header('Location: contact_form.html?error=1');
        exit();
    }
}
?>
