<?php

function sendEmail($fName, $lName, $cTitle, $cName, $pNumb, $eMail) {
    $to = 'clemansta@gmail.com';

    $subject = 'Email for Web Resume';

    $message = nl2br("Hello, \n\n".$fName." ".$lName.", has accessed your online profile site and requested your resume and or coverletter.\n This individual is a ".$cTitle." at ".$cName.". They can be reached at: \n Phone: ".$pNumb."\n E-Mail: ".$eMail."\n\n Thanks, \n Your Profile Site.");

    $toSend = wordwrap($message,100);

    mail("clemansta@gmail.com", $subject, $toSend);
}
?>