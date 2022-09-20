import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import emergency from './emergency.webp'
import security from './security.webp'
import support from './support.webp'
const Contact = () => {

  function submitData()
  {
    
  }
  return (
    <div className="container">
      <h1 className="h1-responsive font-weight-bold text-center my-4">
      <i className="far fa-address-card"></i>
        Contact Us</h1>
      <div className='about'>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={support} />
            <Card.Body>
              <Card.Title>Customer Support</Card.Title>
              <Card.Text>
                At Share-Steer, we define modern customer support as the act of providing timely, empathetic help that keeps customers' needs at the forefront of every interaction.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"><a href='sharesteer@support.com'>sharesteer@support.com</a></small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={security} />
            <Card.Body>
              <Card.Title>Customer Queries</Card.Title>
              <Card.Text>
                Solve customer queries via web, email, phone, SMS, and social media all in one place.Assist customers with online mode by using better intel and less manual work.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"><a href='sharesteer@security.com'>sharesteer@security.com</a></small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={emergency} />
            <Card.Body>
              <Card.Title>Customer Emergrncy</Card.Title>
              <Card.Text>
                In an emergency situation, it is all too easy to become disoriented. But with a little bit of preparation, we can ensure that you can go through emergencies in the best possible way
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"><a href='sharesteer@emergency.com'>sharesteer@emergency.com</a></small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
      <hr />
      <br /><br />
      <section className="mb-4">
        <h2 style={{ textAlign: 'center' }}>Your Response Always Welcome</h2>
        <fieldset>
          <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
            a matter of hours to help you.</p>
          <div className="row">

            <div className="col-md-9 mb-md-0 mb-5">
              <form id="contact-form" name="contact-form" action="mail.js" method="POST">

                <div className="row">

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" id="name" className="form-control" />
                      <label>Your name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" id="email" className="form-control" />
                      <label>Your email</label>
                    </div>
                  </div>

                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input type="text" id="subject" name="subject" className="form-control" />
                      <label>Subject</label>
                    </div>
                  </div>
                </div>

                <div className="row">

                  <div className="col-md-12">

                    <div className="md-form">
                      <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                      <label>Your message</label>
                    </div>

                  </div>
                </div>

              </form>

              <div className="text-center text-md-left">
                <a className="btn btn-primary" onClick={submitData}>Send</a>
              </div>
            </div>

            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                  <a href='https://g.page/iet-pune?share'><p>Share-Steer Pvt Ltd Pune</p></a>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                  <p>+91 01 234 567 89</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                  <p>support@iet-helpline.com</p>
                </li>
              </ul>
            </div>

          </div>
        </fieldset>
      </section>
    </div>
  )
}
export default Contact;