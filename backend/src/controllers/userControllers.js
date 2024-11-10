import {OAuth2Client} from 'google-auth-library'

const user=new OAuth2Client(process.env.GOOGLE_CLIENT_ID)


export const googleAuth = async (req, res) => {
    const {tokenId} =req.body

    if(!tokenId){
        return res.status(400).json({message: 'Missing token id'})
    }
    try{
        const ticket = await user.verifyIdToken({
            idToken:tokenId,
            audience:process.env.GOOGLE_CLIENT_ID,
        })

        const {email, name, picture} = ticket.getPayload()
        res.status(200).json({
            email,
            name,
            picture
        })
    }catch(error){
        return res.status(400).json({message: 'Invalid token id'})
    }
};