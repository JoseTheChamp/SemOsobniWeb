var lastWidth=5000;
$(document).ready(function(){
    //získá data z form a zavolá poslání emailu
    document.getElementById("contact-form").addEventListener("submit", (e)=>{
        e.preventDefault();
        alert("Trying to send email1111.");
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let subject = document.getElementById("subject").value;
        let text = document.getElementById("text").value;
        
        sendEmail(name,email,subject,text);
        
        document.getElementById("contact-form").reset();
    });
    //Nastavuje scrolovací class na navbar
    $(window).scroll(function(){
        if(this.scrollY > 10){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    });
});

function sendEmail(name,email,subject,text){
    Email.send({
        Host : "smtp.gmail.com",
        Username : 'josef.knotekk@gmail.com',
        Password : "dcyrawqobdasbrjt",
        To : 'josef.knotekk@gmail.com',
        From : 'josef.knotekk@gmail.com',
        Subject : "Contact from website.  From: " + email + ", about: " + subject,
        Body : "Name: "+ name + "<br/>Email: " + email + "<br/>Subject: " + subject + "<br/>Message: " + text
    }).then(
      message => alert(message)
    );
}

$('#download-cv').on('click', function () {
    $.ajax({
        url: 'Resources/README.pdf',
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = 'CV-Josef Knotek.pdf';
            document.body.append(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        }
    });
});