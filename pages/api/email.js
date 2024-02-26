import { sendEmail } from "../../function"

const Contact = async(req, res) => {
  const user = req.body

  console.log(user)

  await sendEmail({
      to: 'learni-formation@outlook.com',
      subject: 'Une demande de contact web',
      text: 'Une demande de contact web',
      html: user?.email+" <br/>"+user?.name+" <br/>"+user?.message
  })

  return res.status(200).json({
      error: false,
      message: ["Une demande de contact est en cours"]
  })

}

export default Contact;