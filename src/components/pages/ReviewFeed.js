import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Card, Image } from "semantic-ui-react";

export default function ReviewFeed() {
  const [reviews, setReviws] = useState([]);

  useEffect(() => {
    const info = async () => {
      const res = await axios.get("http://localhost:3001/api/reviews/feed");
      console.log(res.data);
      setReviws(res.data);
    };
    info();
  }, []);
  return (
    <div>
      <h1>Review Feed</h1>
      {reviews.map((r) => (
        <div>
          <Card>
            <Card.Content>
              <Card.Header>Shop Name: {r.name}</Card.Header>
              <Card.Meta>Shop Location: {r.location}</Card.Meta>
              <Card.Description>Review: {r.review}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Update
                </Button>
                <Button basic color="red">
                  Delete
                </Button>
              </div>
            </Card.Content>
          </Card>
        </div>
      ))}
    </div>
  );
}
