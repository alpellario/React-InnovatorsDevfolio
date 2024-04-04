import './ContactView.css';
import React, { useState, useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { PuffLoader } from 'react-spinners';

const instance = axios.create({
  baseURL: '',
  withCredentials: true,
  credentials: 'include',
});

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  message: Yup.string().required('Message is required'),
});

const ContactView = () => {
  const [isThankYou, setIsThankYou] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const textareaRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setIsLoading(true);
      setError('');

      const headers = { 'Content-Type': 'application/json' };

      setSubmitting(true);
      await instance
        .post('/sendMessage', JSON.stringify(values), { headers })
        .then(response => {
          console.log(response);
          setIsThankYou(true);
          setTimeout(() => {
            setIsThankYou(false);
            resetForm();
          }, 3000);
          return response;
        })
        .catch(err => {
          // if (err.response.status === 422) {
          //   alert('Invalid email format.');
          // }
          setError('(Invalid email format*)');
        })
        .finally(() => {
          setSubmitting(false);
          setIsLoading(false);
        });
      // try {
      //   setSubmitting(true);
      //   const response = await fetch('http://localhost:3001/sendMessage', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(values),
      //   });

      //   if (!response.ok) {
      //     if (response.status === 422) {
      //       throw new Error(`Invalid email format`);
      //     }
      //   }

      //   setSubmitting(false);
      //   setIsThankYou(true);
      //   setTimeout(() => {
      //     setIsThankYou(false);
      //     resetForm();
      //   }, 3000);
      // } catch (error) {
      //   alert(`${error.message}`);
      //   setSubmitting(false);
      // }
    },
  });

  useEffect(() => {
    // Automatically adjust the textarea height to fit the content, up to the maximum height (200px)
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const newHeight = Math.min(textareaRef.current.scrollHeight, 150);
      textareaRef.current.style.height = `${newHeight}px`;

      // Show the scrollbar only when content exceeds 200px
      if (newHeight === 200) {
        textareaRef.current.style.overflowY = 'scroll';
      } else {
        textareaRef.current.style.overflowY = 'hidden';
      }
    }
  }, [formik.values.message]);

  const handleSendMessage = () => {};

  return (
    <div className="contact">
      <div className={`contact__text-1 ${isThankYou ? 'unvisible' : ''}`}>
        If you like this, please let me know
      </div>
      <div className={`contact__text-2 ${isThankYou ? 'unvisible' : ''}`}>
        and
      </div>
      <div
        className={`contact__text-3 header-contact`}
        onClick={handleSendMessage}
      >
        <div className={`contact-state-2 ${isThankYou ? 'thank-you' : ''}`}>
          THANK YOU!
        </div>
        <div className={`contact-state-1 ${isThankYou ? 'thank-you' : ''}`}>
          SAY HELLO,
        </div>
      </div>
      <div className="contact__input-container">
        <div className={`contact__text-4`}>dear</div>
        <form className="contact__form" onSubmit={formik.handleSubmit}>
          <div className="contact__form-input contact__form-name">
            {' '}
            <input
              className={` ${isThankYou ? 'no-border' : ''}`}
              id="name"
              type="text"
              placeholder="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              required
              onInvalid={e => {
                e.target.setCustomValidity('Please share your name with me.');
              }}
              onInput={e => {
                e.target.setCustomValidity('');
              }}
            />
          </div>
          <div className="contact__form-input contact__form-email">
            <input
              className={` ${isThankYou ? 'unvisible' : ''}`}
              id="email"
              type="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              required
              onInvalid={e => {
                e.target.setCustomValidity('Please share your email with me.');
              }}
              onInput={e => {
                e.target.setCustomValidity('');
              }}
            />
          </div>
          <div className="contact__form-input contact__form-message">
            <textarea
              className={`${isThankYou ? 'unvisible' : ''}`}
              ref={textareaRef}
              id="message"
              placeholder="Message"
              value={formik.values.message}
              onChange={formik.handleChange}
              rows={1}
              required
              onInvalid={e => {
                e.target.setCustomValidity('At least you can say hello.');
              }}
              onInput={e => {
                e.target.setCustomValidity('');
              }}
            />
          </div>
          {isLoading ? <PuffLoader color="white" className="spinner" /> : ''}
          {error ? <div className="errorMessage">{error}</div> : ''}
          <button
            className={`contact__form-send-button ${
              formik.isSubmitting ? 'contact__form-send-button--off' : ''
            } ${isThankYou ? 'unvisible' : ''}`}
            type="submit"
            disabled={formik.isSubmitting}
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactView;
