import { useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser';
import { validateData } from '../utils/validateData'

import "./Contact.css"

const position = [42.4336, -8.64805]


export default function Contact({ scrollY }) {
    const form = useRef()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorType, setErrorType] = useState('')
    const [errorText, setErrorText] = useState('')
    const [messageOk, setMessageOk] = useState('')


    const sendEmail = async e => {
        e.preventDefault();
        const { errorTypeValidation, errorTextValidation } = validateData({ name, email, message })
        if (errorTypeValidation) {
            setErrorType(errorTypeValidation)
            setErrorText(errorTextValidation)
            return
        }

        await emailjs.sendForm('portfolio', 'template_0jq002w', form.current, 'vTQJR18fU3CVGyHNh')
            .then((result) => {
                setMessageOk('Mensaje enviado. Gracias por contactar, en breve recibirás respuesta.')
                setEmail('')
                setName('')
                setMessage('')
            }, (error) => {
                setMessageOk('Oops, parece que hubo algún error.')
            });
    }

    return (
        <article id='contact-page'>
            {scrollY + 800 >= document.getElementById('contact-page')?.offsetTop &&
                <>
                    <section className="form-container">
                        <h2>Contacto</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <label>
                                Nombre
                                <input value={name} name='name' onChange={e => {
                                    setName(e.target.value)
                                    setErrorType('')
                                }} type='text' placeholder="Nombre..." />
                                {errorType === 'name' && <p className='error-text'>{errorText}</p>}
                            </label>
                            <label>
                                Email
                                <input value={email} name='email' onChange={e => {
                                    setEmail(e.target.value)
                                    setErrorType('')
                                }} type='email' placeholder="Email..." />
                                {errorType === 'email' && <p className='error-text'>{errorText}</p>}
                            </label>
                            <label>
                                Mensaje
                                <textarea value={message} name='message' onChange={e => {
                                    setMessage(e.target.value)
                                    setErrorType('')
                                }} placeholder="Escribe tu mensaje..." />
                                {errorType === 'message' && <p className='error-text-message'>{errorText}</p>}
                            </label>
                            <p className='message-ok'>{messageOk}</p>
                            <input type='submit' value='Enviar' className='contact-button' />
                        </form>
                    </section>
                    <MapContainer center={position} zoom={10}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                {<p>David Ferández</p>}
                            </Popup>
                        </Marker>
                    </MapContainer>
                </>}
        </article>
    )
}


