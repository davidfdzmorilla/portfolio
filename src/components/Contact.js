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


    const  sendEmail = async e => {
        e.preventDefault();
        const { errorTypeValidation, errorTextValidation } = validateData({ name, email, message })
        if (errorTypeValidation) {
            setErrorType(errorTypeValidation)
            setErrorText(errorTextValidation)
            document.getElementsByName(errorTypeValidation).focus()
            return
        }

        console.log(form)

        await emailjs.sendForm('portfolio', 'template_0jq002w', form.current, 'vTQJR18fU3CVGyHNh')
            .then((result) => {
                console.log('ok', result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <article id='contact-page'>
            {scrollY + 100 >= document.getElementById('contact-page')?.offsetTop &&
            <>
                <section className="form-container">
                    <h2>Contacto</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <label>
                        Nombre
                        <input name='name' onChange={e => {
                            setName(e.target.value)
                            setErrorType('')
                        }} type='text' placeholder="Nombre..." />
                        {errorType === 'name' && <p className='error-text'>{errorText}</p>}
                    </label>
                    <label>
                        Email
                        <input name='email' onChange={e => {
                            setEmail(e.target.value)
                            setErrorType('')
                        }} type='email' placeholder="Email..." />
                        {errorType === 'email' && <p className='error-text'>{errorText}</p>}
                    </label>
                    <label>
                        Mensaje
                        <textarea name='message' onChange={e => {
                            setMessage(e.target.value)
                            setErrorType('')
                        }} placeholder="Escribe tu mensaje..." />
                        {errorType === 'message' && <p className='error-text'>{errorText}</p>}
                    </label>
                    <div></div>
                    <input type='submit' value='Enviar' className='contact-button'/>
                </form>
            </section>
            <MapContainer center={position} zoom={12}>
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


