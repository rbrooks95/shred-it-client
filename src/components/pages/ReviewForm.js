import { Form, TextArea, Button, Message, Container } from "semantic-ui-react";

export default function ReviewForm(props) {
  return (
    <div>
      <Container className="form-border" textAlign="center">
        <Form onSubmit={props.handleSubmit}>
          <Form.Field>
            <label htmlFor={props.name}>Shop Name</label>
            <input
              id={props.name}
              placeholder="Name"
              onChange={props.handleChange}
              value={props.formState.name}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor={props.location}>Location</label>
            <input
              id={props.location}
              placeholder="Location"
              onChange={props.handleChange}
              value={props.formState.location}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor={props.review}>Review</label>
            <TextArea
              id={props.review}
              placeholder="Your Review"
              style={{ minHeight: 100 }}
              onChange={props.handleChange}
              value={props.formState.review}
            />
          </Form.Field>
          <Message
            success
            header="Form Completed"
            content="You're all signed up for the newsletter"
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </div>
  );
}
