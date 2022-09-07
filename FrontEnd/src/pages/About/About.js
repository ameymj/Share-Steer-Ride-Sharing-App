import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './About.css'
import safe from './safe.jpeg'
import secure from './secure.jpg'
import trusted from './trusted.jpeg'

function About() {
  return (
    <div className='about'>
      <h1 style={{textAlign:'center'}}>Our Policies</h1>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={safe} />
        <Card.Body>
          <Card.Title>Travel Safe</Card.Title>
          <Card.Text>
          Yaha Bhi Kuchh Likhna Hai
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Bon Voyage and get there safe.</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={secure} />
        <Card.Body>
          <Card.Title>Ontime Boarding</Card.Title>
          <Card.Text>
          Yaha Bhi Kuchh Likhna Hai
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Time is the wisest counselor of all.<br/></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={trusted} />
        <Card.Body>
          <Card.Title>Collaboration</Card.Title>
          <Card.Text>
            Yaha Bhi Kuchh Likhna Hai
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Sharing is Caring</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  );
}

export default About;