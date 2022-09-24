import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './About.css'
import safe from './safe.jpg'
import secure from './security.jpg'
import trusted from './trusted.jpeg'

function About() {
  return (
    
    <div className='about'>
      <h1 style={{textAlign:'center'}}>
      <i className="fas fa-taxi"></i>
              What is Share-Steer</h1>
      <h3>Share your empty car seats and reduce your travelling costs. 
      meet new people every day in on your route, grow your network and make your rides interesting
      </h3>
      
      <h5>
      We all like going together. 
      Share-Steer will help you to connect with other professionals who are traveling on the same route
      and same time. Share-Steer helps  to start sharing the ride instead of traveling alone. 
      Best sit to discover, connect, route match, coordinate and cost-share.
      Share-Steer makes carpooling convnient, safe, 
      comfortable and affordable for the urban commuters
      </h5>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={safe} />
        <Card.Body>
          <Card.Title>Travel Safe</Card.Title>
          <Card.Text>
            Check the profiles of your co travellers.
            We verify profile and also check reviews and ratings.
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
          Reviews and ratings according to puncutality of co-traveller.
          Its better to be soon than a minute late.
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
            Real time ride sharing app.
            Car Sharing reduces trafic.
            also reduces the fuel cost.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Sharing is Caring</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <br/>
    <h5>
    By having more people using one vehicle, carpooling reduces each person's travel costs such as: fuel costs, tolls, and the stress of driving. Carpooling is also a more environmentally friendly and sustainable way to travel as sharing journeys reduces air pollution, carbon emissions, traffic congestion on the roads, and the need for parking spaces. Authorities often encourage carpooling, especially during periods of high pollution or high fuel prices. Car sharing is a good way to use up the full seating capacity of a car, which would otherwise remain unused if it were just the driver using the car.
    </h5>
    </div>
 
  );
}

export default About;

