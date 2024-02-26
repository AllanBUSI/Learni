import { sendEmail } from "../../function"

export const Contact = async(req, res) => {
  const user = req.body

  await sendEmail({
      to: 'busi.travail@gmail.com',
      subject: 'Une demande de contact web',
      text: 'Une demande de contact web',
      html: Template('une demande de contact', "Voici les informations : "+user.email+" <br/>"+user.name+" <br/>"+user.message)
  })

  return res.status(200).json({
      error: false,
      message: ["Une demande de contact est en cours"]
  })

}