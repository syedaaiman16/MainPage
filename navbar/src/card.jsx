import Card from 'react-bootstrap/Card';

function BodyShorthandExample() {
    const a = [
        {
            title: "card",
            body: "xtz" ,         
        },
    ]
  return (
    <Card>
      <Card.Body>
        <Card.Title>{a[0].title}</Card.Title>
        <Card.Text>{a[0].body}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BodyShorthandExample;