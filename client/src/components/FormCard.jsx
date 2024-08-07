import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

function FormCard() {
  return (
    <Card style={{ width: "30rem" }}>
      <Card.Body>
        <Card.Title>URL Scraper</Card.Title>
        <Card.Text>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Please input a URL:</Form.Label>
              <Form.Control type="email" placeholder="Enter URL" />
              <Form.Text className="text-muted">
                //any exceptions to url
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>What would you like to return?</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FormCard;
