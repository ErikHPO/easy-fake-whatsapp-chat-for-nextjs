'use client'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import sendButton from './send.svg'
import ReceivedMessageDisplay from './ReceivedMessage';
import { Fade } from 'react-awesome-reveal';

export default function DialogBox({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const textareaRef = useRef('');
    const handleTextAreaChange = (e : any) => {
        textareaRef.current = e.target.value;
      }
    const newLocal = (
        <textarea
            className='text-input'
            placeholder='Digite sua mensagem'
            defaultValue={textareaRef.current}
            onChange={handleTextAreaChange}
            style={{
                resize: 'none',
                border: 'none',
                outline: 'none',
                padding: '10px',
                borderRadius: '5px',
                backgroundColor: '#F4F4F4',
                marginBottom: '10px',
            }}
            autoFocus // Add autoFocus to automatically focus on the textarea
        />
    );

    if (open) return (
        <Fade direction='right' triggerOnce>
            <div className='DialogBox'>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'absolute',
                        bottom: '20px',
                        right: '50px',
                        width: '290px',
                        backgroundColor: '#E5DDD5',
                        borderRadius: '5px',
                    }}
                >
                    <div id='DialogBox_header'>
                        <h3 className='text'>Whatsapp Loumar</h3>
                        <button
                            className='close-button'
                            onClick={() => setOpen(false)}
                        >
                            &times;
                        </button>
                    </div>
                    <ReceivedMessageDisplay
                        messageArray={[
                            'Olá, como posso te ajudar?',
                            'Isso é só um teste Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dicta fugit itaque neque beatae iure nobis a cupiditate aut, praesentium cumque ipsam commodi illum temporibus nulla animi suscipit, incidunt eius.',
                            'Isso é só um teste Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dicta fugit itaque neque beatae iure nobis a cupiditate aut, praesentium cumque ipsam commodi illum temporibus nulla animi suscipit, incidunt eius.',
                            // 'Isso é só um teste Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dicta fugit itaque neque beatae iure nobis a cupiditate aut, praesentium cumque ipsam commodi illum temporibus nulla animi suscipit, incidunt eius.'
                        ]}
                    />
                    <div className='DialogBox_footer'>
                        {newLocal}
                        <button
                            className='send-button'
                            about='enviar mensagem'
                            onClick={() => {
                                console.log('Mensagem enviada:', textareaRef.current);
                                window.open(`https://api.whatsapp.com/send?phone=5585984480000&text=${textareaRef.current}`);
                                // setMessage('');
                                setOpen(false);
                            }}
                        >
                            <Image
                                src={sendButton}
                                alt='send'
                                width={25}
                                height={25}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </Fade>
    )
    return null
}
