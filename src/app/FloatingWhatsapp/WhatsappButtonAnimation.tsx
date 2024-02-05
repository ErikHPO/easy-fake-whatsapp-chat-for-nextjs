import React from 'react'

import whatsappIcon from './whatsapp.svg';
import Image from 'next/image';
import { AttentionSeeker, JackInTheBox } from 'react-awesome-reveal';

export default function WhatsappButtonAnimation() {
    return (
        <JackInTheBox triggerOnce
        style={{
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '90px',
            width: '90px',
            cursor: 'pointer',
            borderRadius: '50%',
            backgroundColor: '#25d366',
            padding: '10px',
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
        }}
        >
            <AttentionSeeker effect='wobble' delay={1400} >
        <div
        style={{
            position:'relative',
            display: 'flex',
            borderRadius: '50%',

        }}
        >
            <Image src={whatsappIcon} alt="WhatsApp Icon" height={80} width={80}  />
        </div>
        </AttentionSeeker>
        </JackInTheBox>
    )
}
