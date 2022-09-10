import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import emergency from './emergency.webp'
import security from './security.webp'
import support from './support.webp'
const Contact = () => {
  return (
    <div className="container">
          <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
      <div className='about'>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={support} />
        <Card.Body>
          <Card.Title>Customer Support</Card.Title>
          <Card.Text>
          Reach out to us:
          Email-sharesteer@support.com
          Telephone-02187 223456
          We are available 24/7
          Live Support!
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
          Do you facing problems? we are here
          Email your queries at sharesteer@queries.com
          or contact us at 02134 786756
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><a href='sharesteer@security.com'>sharesteer@security.com</a></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={emergency} />
        <Card.Body>
          <Card.Title>Customer Emergency</Card.Title>
          <Card.Text>
            For emergency inquiry
            Contact at sharesteer@emergnecy.com
            or give missed call to 1800-1234-6755
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted"><a href='sharesteer@emergency.com'>sharesteer@emergency.com</a></small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
    <hr/>
    <br/><br/>
<section class="mb-4">
  <h2 style={{textAlign:'center'}}>Your Response Always Welcome</h2>
  <fieldset>
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>
    <div class="row">

        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.js" method="POST">

                <div class="row">

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"/>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"/>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>

                <div class="row">

                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>

            </form>

            <div class="text-center text-md-left">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
        </div>

        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                   <a href='https://g.page/iet-pune?share'><p>Share-Steer Pvt Ltd Pune</p></a> 
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+91 01 234 567 89</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
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