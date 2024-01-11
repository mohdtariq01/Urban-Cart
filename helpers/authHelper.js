import bcrypt from "bcrypt"

export const hashpassword = async (password)=>{
    try{
        const saltRound = 10; //kitne round tak decrypt krna hai
        const hashedPassword = await bcrypt.hash(password, saltRound)
        return hashedPassword;
    }catch(error){
        console.log("Error in password hashing", error)
    }
}

export const comparePassword = async (password, hashpassword) => {
    return bcrypt.compare(password, hashpassword);
}