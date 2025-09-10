"use server"

import sendEmail from "./email.message"

interface ContactProps{
    data:{
    firstName : string,
     lastName : string, 
     email:string,
      subject:string,
       message:string
    }
}

export default async function contactAction({data}:ContactProps) {

    await sendEmail(data)
    
}