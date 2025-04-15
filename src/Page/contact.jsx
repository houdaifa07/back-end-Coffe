import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'


export function Contacte() {
    return (
        <div className='contacte   '>
            <div className="row infocontacte  ">
                <h4 className=' pt-5 text-center font-bold  '>If you have any questions don't hesitate to contact us.</h4>
                <div className=' col  p-5  mb-5 text-white  '>
                    <h2 className=' font-bold  text- mb-5 text-white'>Contact Information</h2>
                    <div className='d-flex items-center mb-2'>
                        <FaMapMarkerAlt className='m-1' />
                        <p style={{ textShadow: '6px 6px 4px black' }}>123  Marrakech Morocco</p>
                    </div>
                    <div className='d-flex items-center mb-2 '>
                        <FaPhone className=' m-1' />
                        <p style={{ textShadow: '6px 6px 4px black' }}>+212 123 456 7890</p>
                    </div>
                    <div className='d-flex items-center mb-2'>
                        <FaPhone className=' m-1' />
                        <p style={{ textShadow: '6px 6px 4px black' }}>+212 987 654 3210</p>
                    </div>
                    <div className='d-flex items-center mb-5'>
                        <FaEnvelope className='m-1' />
                        <p style={{ textShadow: '6px 6px 4px black' }}>info@ofppt.com</p>
                    </div>
                </div>
                <form className='col  text-white p-5  '>
                    <div className='mb-4'>
                        <label className="m-4 " style={{ textShadow: '6px 6px 4px black' }} htmlFor='name'>
                            Name
                        </label>
                        <input
                            className=' border rounded w-full py-2 px-3  focus:outline-none '
                            id='name'
                            type='text'
                            placeholder='Your Name'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className="m-4" style={{ textShadow: '6px 6px 4px black' }}>Email
                        </label>
                        <input
                            className='border rounded  py-2 px-3  focus:outline-none'
                            type='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='m-4' style={{ textShadow: '6px 6px 4px black' }} htmlFor='message'>
                            Message
                        </label>
                        <textarea
                            className=' border rounded  py-2 px-3   '
                            id='message'
                            rows='3'
                            placeholder='Your Message'
                        ></textarea>
                    </div>
                    <div className='flex items-center justify-between'>
                        <button
                            style={{ textShadow: '6px 6px 4px black' }}
                            className="btn-shop"
                            type='submit'
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}