import {OAuth2Client} from 'google-auth-library'
import Apply from '../models/Apply.js';
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
            tokenId,
            email,
            name,
            picture
        })
    }catch(error){
        return res.status(400).json({message: 'Invalid token id'})
    }
};



//apply form
export const applyData = async (req,res)=>{
    const {name,email,phoneNumber,profession,role,portfolioLink,githubLink}=req.body;
    try{
        const newApply=new Apply({
            name,email,phoneNumber,profession,role,portfolioLink,githubLink
        });
    

    await newApply.save()
    res.status(201).json({message: 'Application submitted successfully'})
}catch(error){
    return res.status(400).json({message: 'Failed to submit application'})
}



}
