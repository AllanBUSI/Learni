import nodemailer from 'nodemailer'


export const sendEmailAtt = async(obj) => {

    console.log('============== Email init ===============')
    
    const CONNECT_NODEMAILER = {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
        host: process.env.NODEMAILER_HOST,
        port: process.env.NODEMAILER_PORT,
        secure: process.env.NODEMAILER_SECU
    }
    
    let transporter = nodemailer.createTransport({
        host: CONNECT_NODEMAILER.host,
        port: CONNECT_NODEMAILER.port,
        secure: CONNECT_NODEMAILER.secure, // true for 465, false for other ports
        auth: {
            user: CONNECT_NODEMAILER.user, // generated ethereal user
            pass: CONNECT_NODEMAILER.pass, // generated ethereal password
        },
    });

    
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: process.env.NODEMAILER_USER, // sender address
        to: obj.to, // list of receivers
        subject: obj.subject, // Subject line
        text: obj.text, // plain text body
        html: obj.html, // html body,
        attachments: [
            {
                filename: obj.name,
                contentType: 'application/pdf', // <- You also can specify type of the document
                path: obj.path
            }
        ]
    });
    
    console.log('============== Email envoyés ===============')
    
    return true
}


export const sendEmail = async(obj) => {

    console.log('============== Email init ===============')
    
    const CONNECT_NODEMAILER = {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
        host: process.env.NODEMAILER_HOST,
        port: process.env.NODEMAILER_PORT,
        secure: process.env.NODEMAILER_SECU
    }
    
    let transporter = nodemailer.createTransport({
        host: CONNECT_NODEMAILER.host,
        port: CONNECT_NODEMAILER.port,
        secure: CONNECT_NODEMAILER.secure, // true for 465, false for other ports
        auth: {
            user: CONNECT_NODEMAILER.user, // generated ethereal user
            pass: CONNECT_NODEMAILER.pass, // generated ethereal password
        },
    });
    
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: process.env.NODEMAILER_USER, // sender address
        to: obj.to, // list of receivers
        subject: obj.subject, // Subject line
        text: obj.text, // plain text body
        html: obj.html, // html body,
    });
    
    console.log('============== Email envoyés ===============')
    
    return true
}

