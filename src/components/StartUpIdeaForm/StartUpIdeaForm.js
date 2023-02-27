import React from 'react';
import { Button, Form, FloatingLabel, Image } from 'react-bootstrap';
import styles from '@/styles/StartUpIdeaForm.module.css';

function StartUpIdeaForm({ handleGenerateSubmit }) {
  return (
    <Form
      onSubmit={
        handleGenerateSubmit
      }
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
      }}
    >
      <FloatingLabel
        controlId="floatingTextarea"
        label="Put your startup idea here!"
      >
        <Form.Control
          as="textarea"
          name="ideaTextArea"
          placeholder="Put your startup idea here!"
          style={{ height: '200px', width: '400px' }}
        />
      </FloatingLabel>
      <p>
        Need an idea? <a href="#">Here are some examples!</a>
      </p>
      <Button type="submit">
        <Image
          src="/lightbulb-white.png"
          width={30}
          height={30}
          className={styles.lightbulbIcon}
          alt="a brain/lightbulb icon for the Generate button"
        />{' '}
        Generate!
      </Button>
    </Form>
  );
}

export default StartUpIdeaForm;
