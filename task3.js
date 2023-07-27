var nodemailer=require('nodemailer');

var transport =nodemailer.createTransport({
    service:'gmail', 
    auth:{
    user:'srijaswi05@gmail.com',
    pass:'asrtzfolyatckhxk'
    }
});
var mailOptions={
    from:'srijaswi05@gmail.com',
    to:'pravin.consensus@gmail.com',
    subject:'20A21A05D4',
    text:' Hi Sir'
};
transport.sendMail(mailOptions, function(error, info){
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log('Email sent:' + info.response);
    }
});