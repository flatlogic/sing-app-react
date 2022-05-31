import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonLink from './ButtonLink';

function Page1() {
  return (
    <Container>
      <h1>Page 1</h1>
      <ButtonLink to="/page2">Go to Page 1</ButtonLink>
        <Card className={'mt-4'} style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </Container>
  );
}

export default Page1;
