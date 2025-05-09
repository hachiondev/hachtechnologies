package com.hachionUserDashboard.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;


import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Component
public class EmailUtil {

    @Autowired
    private JavaMailSender javaMailSender;


	

    public void sendOtpEmail(String email, String otp) {
        try {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom("trainings@hachion.co");
            helper.setTo(email);
            helper.setSubject("Your One-Time Password (OTP) to Access Your Account");

            String htmlContent = "<div style='max-width: 600px; margin: auto; font-family: Arial, sans-serif;'>" +
                    "    <div style='text-align: center; padding: 10px 0;'>" +
                    "        <img src='cid:logoImage' alt='Logo' height='40'/>" +
                    "    </div>" +
                    "    <div style='background-color: #0056b3; color: white; text-align: center; padding: 15px; font-size: 18px; font-weight: bold;'>" +
                    "        Your One-Time Password (OTP) to Access Your Account" +
                    "    </div>" +
                    "    <div style='padding: 30px 20px;'>" +
                    "        <p>Hi Candidate,</p>" +
                    "        <p>We received a request to log in to your account on Hach Technologies. Please use the One-Time Password (OTP) below to complete your login:</p>" +
                    "        <div style='font-size: 36px; font-weight: bold; text-align: center; margin: 20px 0;'>" + otp + "</div>" +
                    "        <hr/>" +
                    "        <p><strong>Note:</strong> In case of any technical difficulty do drop us a mail at <a href='mailto:hachtechnologies@gmail.com'>hachtechnologies@gmail.com</a></p>" +
                    "        <p>Regards,<br/>Team Hach Technologies</p>" +
                    "    </div>" +
                    "</div>";

            helper.setText(htmlContent, true);

            ClassPathResource logoImage = new ClassPathResource("images/hachlogo.png");
            helper.addInline("logoImage", logoImage);



            javaMailSender.send(message);
            System.out.println("OTP Email sent successfully!");

        } catch (MessagingException e) {
            e.printStackTrace();
            System.err.println("Error sending email: " + e.getMessage());
        }
    }




    public void sendSetPasswordEmail(String email, String newPassword) {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();

        try {
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
            helper.setTo(email);
            helper.setSubject("Reset Your Password");

            String htmlContent = "<div style=\"padding: 30px; text-align: center; font-family: Arial, sans-serif;\">" +
                    "<img src='cid:logoImage' alt='Hachion Logo' style='height: 50px; margin-bottom: 20px;'/>" +
                    "<div style=\"background-color: #0056b3; color: white; padding: 10px; font-size: 24px; font-weight: bold;\">" +
                    "Reset Your Password</div>" +
                    "<div style=\"padding: 30px;\">" +
                    "<p style=\"font-size: 16px; color: #000;\">Hello Candidate,</p>" +
                    "<p style=\"font-size: 16px; color: #000;\">" +
                    "You have requested to reset your Hachion’s login password. Kindly enter the below Password to proceed further." +
                    "</p>" +
                    "<h2 style=\"letter-spacing: 10px; font-size: 30px; color: #000;\">" + newPassword + "</h2>" +
                    "<p style=\"font-size: 16px; color: #000;\">We look forward to seeing you back on Hachion.</p>" +
                    "<br><p style=\"color: #000;\">Regards,<br><i>Team Hachion</i></p>" +
                    "<hr style=\"margin: 30px 0;\">" +
                    "<p style=\"font-size: 12px; color: #666;\">" +
                    "Want to change how you receive these emails?<br>" +
                    "You can <a href=\"#\" style=\"color: #0056b3;\">update your preferences</a> or <a href=\"#\" style=\"color: #0056b3;\">unsubscribe</a>." +
                    "</p>" +
                    "</div>" +
                    "</div>";

            helper.setText(htmlContent, true);

            ClassPathResource res = new ClassPathResource("images/hachlogo.png");
            helper.addInline("logoImage", res);
            // Attach the logo image
//            FileSystemResource res = new FileSystemResource("C:/Users/hp/uploads/images/logo.png"); // Your logo path
//            helper.addInline("logoImage", res);

            javaMailSender.send(mimeMessage);

        } catch (MessagingException e) {
            e.printStackTrace(); // handle error properly
        }
    }
}

//    public void sendSetPasswordEmail(String email, String newPassword) {
//        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
//
//        try {
//            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
//            helper.setTo(email);
//            helper.setSubject("Reset Your Password");
//
//            String htmlContent = "<div style=\"padding: 30px; text-align: center; font-family: Arial, sans-serif;\">" +
//                    "<img src='cid:logoImage' alt='Hachion Logo' style='height: 50px; margin-bottom: 20px;'/>" +
//                    "<div style=\"background-color: #0056b3; color: white; padding: 10px; font-size: 24px; font-weight: bold;\">" +
//                    "Reset Your Password</div>" +
//                    "<div style=\"padding: 30px;\">" +
//                    "<p style=\"font-size: 16px; color: #000;\">Hello Candidate,</p>" +
//                    "<p style=\"font-size: 16px; color: #000;\">" +
//                    "You have requested to reset your Hachion’s login password. Kindly enter the below Password to proceed further." +
//                    "</p>" +
//                    "<h2 style=\"letter-spacing: 10px; font-size: 30px; color: #000;\">" + newPassword + "</h2>" +
//                    "<p style=\"font-size: 16px; color: #000;\">We look forward to seeing you back on Hachion.</p>" +
//                    "<br><p style=\"color: #000;\">Regards,<br><i>Team Hachion</i></p>" +
//                    "<hr style=\"margin: 30px 0;\">" +
//                    "<p style=\"font-size: 12px; color: #666;\">" +
//                    "Want to change how you receive these emails?<br>" +
//                    "You can <a href=\"#\" style=\"color: #0056b3;\">update your preferences</a> or <a href=\"#\" style=\"color: #0056b3;\">unsubscribe</a>." +
//                    "</p>" +
//                    "</div>" +
//                    "</div>";
//
//            helper.setText(htmlContent, true);
//
//            ClassPathResource res = new ClassPathResource("images/logo.png");
//            helper.addInline("logoImage", res);
//            // Attach the logo image
////            FileSystemResource res = new FileSystemResource("C:/Users/hp/uploads/images/logo.png"); // Your logo path
////            helper.addInline("logoImage", res);
//
//            javaMailSender.send(mimeMessage);
//
//        } catch (MessagingException e) {
//            e.printStackTrace(); // handle error properly
//        }
//    }
//}

