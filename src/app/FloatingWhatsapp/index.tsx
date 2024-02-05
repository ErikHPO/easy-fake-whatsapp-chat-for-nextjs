'use client'
import React from 'react'
import './style.css'
import { WhatsappAnimation } from './WhatsappAnimation'
import  DialogBox  from './DialogBox'
import WhatsappButtonAnimation from './WhatsappButtonAnimation'

type FloatingWhatsappProps = {
    phoneNumber: string;
    messageArray: string[];
    headerTitle: string;
}

export default function FloatingWhatsapp({phoneNumber, messageArray, headerTitle, } : FloatingWhatsappProps) {
      const [isOpen, setIsOpen] = React.useState(false)
  return (
     <div className='FloatingWhatsapp' >
         <DialogBox open={isOpen} setOpen={setIsOpen}/>
         <div onClick={() => setIsOpen(true)}>
        {/* <WhatsappAnimation /> */}
        <WhatsappButtonAnimation/>
         </div>
     </div> 
  )
}
