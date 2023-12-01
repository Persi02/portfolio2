import { TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import Button from '../../General/button/Button';
interface Iuser {
    name?: string,
    email?: string,
    message?: string,
    subject?: string
}

function Form() {
    const [user, setUser] = useState<Iuser>({});
    const [email_i, setEmail] = useState("");
    const [name_i, setName] = useState("");
    const [subject_i, setSubjet] = useState("");
    const [message_i, setMessage] = useState("");
    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser(
            {
                ...user,
                [name]: value
            }
        )
        setName(value)
    }
    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser(
            {
                ...user,
                [name]: value
            }
        )
        setEmail(value)
    }
    const handleChangeSubject = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser(
            {
                ...user,
                [name]: value
            }
        )
        setSubjet(value)
    }
    const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser(
            {
                ...user,
                [name]: value
            }
        )
        setMessage(value)
    }
    const serviceId: string = 'service_6xw6uo8'
    const templateId: string = 'template_5p1tudh'
    const publicKey: string = '6pMN3V5chFWqYFJTd'

    const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
            ...user
        }

    }


    const login = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (!user.email || !user.name || !user.subject || !user.message) {
            toast.error("veullez remplir tous les champs")
        }
        else {
            try {
                await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);

                setUser({})
                setEmail('')
                setMessage('')
                setName('')
                setSubjet('')

                toast.success("Envoyé")
                window.scrollTo(0, 0)

            } catch (error) {
                toast.error("server error")
                console.error(error)
            }
        }

    }


    return (
        <form action="" className='form_contact'>
            <TextField label="Your Name" variant="standard" onChange={handleChangeName} name='name' fullWidth value={name_i} />
            <TextField label="Your Email" variant="standard" onChange={handleChangeEmail} name='email' fullWidth value={email_i} />
            <TextField label="Your Subject" variant="standard" fullWidth name='subject' onChange={handleChangeSubject} value={subject_i} />
            <TextField
                label="Your message"
                multiline
                rows={5}
                variant="standard"
                fullWidth name='message' onChange={handleChangeMessage} value={message_i}
            />
            <div className='wrap-button-form'>
                <Button postUser={login} text='Send' className='btn-xl' />
            </div>
        </form>
    )
}

export default Form