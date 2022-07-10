import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Mailer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_57q3h8f', 'template_m7lzfsq', form.current, 'ZaMKOmBGj5ZbDGycN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='contactusform login-page'>
        <div className="mb-3">
      <label className="form-label">Name</label>
      <input type="text" name="user_name" className="form-control" />
      </div>
      <div className="mb-3">
      <label className="form-label">Email</label>
      <input type="email" name="user_email" className="form-control"/>
      </div>
      <div className="mb-3">
      <label className="form-label">Contact Number</label>
      <input type="Number" name="user_contactnumber" className="form-control"/>
      </div>
      <div className="mb-3">
      <label className="form-label">Message</label>
      <textarea name="message" rows={3}/>
      </div>
      <button className='btn btn-warning mailer' type="submit" value="Send">Submit</button>
    </form>
  );
};