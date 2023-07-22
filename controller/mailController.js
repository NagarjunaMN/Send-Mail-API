const mailConfig = require('../middleware/mail_config')

const sendMail = async (req,res) => {
    try {
        const {to, subject,content} = req.body
        const response = await mailConfig(to,subject,content)
        return res.status(200).json({msg:"mail sent successfully",response})

    } catch (error) {
        return res.status(500).json({msg: error.message})
        // 500 -> internal server error
    }
}

const notFound = async (req,res) => {
    try {
        return res.status(200).json({msg : 'Requested route not found'})
    } catch (error) {
    return res.status(500).json({msg : error.message})
    }
}

module.exports = {sendMail, notFound}
























































