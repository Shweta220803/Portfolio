import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <>
    <div className="container-fluid mt-5">
      <div className="row">
        <h1 className=' sec-heading text-center'>Contact</h1>
        <div className="col-md-6">
          <h2 className='contact-title'>Let's talk to me!</h2>
          <p className='cont-p'>I am looking for internship in MERN Stack.If you want to give me the opportunity, so feel free to contact me.</p>
          <ul>
            <li> Email: shwetaguraru99@gmail.com</li>
            <li>Phone: +1234567890</li>
            <li>Address: 123 Street, Dehradun, India</li>
          </ul>
        </div>

        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder='example: john' required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder='exmple@gmail.com' required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder='message'></textarea>
            </div>
            <button type="submit" className="btn btn-primary sub-btn1">Submit</button>
          </form>
        </div>
      </div>
    </div>



      
    </>
  )
}

export default Contact




