const sendMail = async (req,res) => {
    try {
        res.json({msg: 'send mail controller'})
        
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
























































