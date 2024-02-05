import React, { useEffect, useRef, useState } from 'react';
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Slide, Zoom } from 'react-awesome-reveal';

export default function ReceivedMessageDisplay({ messageArray }: { messageArray: string[] }) {
    const [animationComplete, setAnimationComplete] = useState(false);
    console.log('messageArray', messageArray);

    useEffect(() => {
        if (animationComplete) {
            changeHeaderText('Whatsapp Loumar', 1990);
        }
    }, [animationComplete]);

    return (
        <div className='DialogBox_body'>
            <Zoom
                direction='up'
                cascade
                damping={1}
                delay={500}
                onVisibilityChange={(inView: boolean, entry: IntersectionObserverEntry) => {
                    console.log('inView', inView);
                    console.log('entry', entry);
                    changeHeaderText('Digitando...', entry.time);
                }
            }
            >
                {messageArray.map((message, index) => (
                    <p key={`wpp-received-message${index}`} className='wpp-received-message'>
                        {message}
                    </p>
                ))}
            </Zoom>
        </div>
    );
}

 function changeHeaderText(text: string, delay: number) {
    // get the element with id 'DialogBox_header'
    const header = document.getElementById('DialogBox_header');
    // if the element exists
    if (header) {
        // save the old text value
        const oldText = header.getElementsByTagName('h3')[0].innerText;
        console.log('oldText is: ', oldText);
        // change the text of the h3 element inside the header to the new text
        header.getElementsByTagName('h3')[0].innerText = text;
        // after 1 second, change the text back to the old value
        setTimeout(() => {
            header.getElementsByTagName('h3')[0].innerText = 'Loumar Turismo';
            console.log('current text is: ', header.getElementsByTagName('h3')[0].innerText);
        }, 1000+delay);
    }
}