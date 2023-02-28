import React from 'react';
import { Button, Form, FloatingLabel, Image } from 'react-bootstrap';
import styles from '@/styles/StartUpIdeaForm.module.css';
import Link from 'next/link';

const randomIdeas = [
  'A meal delivery service that sources all of its ingredients from local farms and markets.',
  'A mobile app that connects local volunteer organizations with people looking to volunteer in their community.',
  'A fashion brand that designs and sells sustainable and ethical clothing made from organic and recycled materials.',
  'A health and wellness platform that uses AI to personalize nutrition and fitness plans for individuals based on their DNA.',
  'A virtual interior design service that uses VR technology to help clients visualize and design their living spaces.',
  'An e-commerce store that specializes in customizable and sustainable furniture made from reclaimed materials.',
  'A platform that connects freelance creatives with companies looking for creative talent for short-term projects.',
  'An education startup that creates interactive and engaging online courses on topics ranging from coding to personal finance.',
  'A pet-tech startup that creates innovative and interactive toys and products for pets to improve their health and wellbeing.',
  'A social network platform that connects people with similar interests in niche hobbies or activities.',
  'A sustainable packaging company that produces biodegradable and compostable packaging for businesses.',
  'An online marketplace that connects farmers with consumers, allowing people to buy fresh produce directly from the source.',
  'A healthcare startup that uses machine learning to analyze and predict potential health risks and recommend preventative measures.',
  'A fitness app that gamifies workouts and rewards users for hitting their fitness goals.',
  'A delivery service that uses drones to deliver packages to hard-to-reach locations or remote areas.',
  'A language learning app that uses AI and chatbots to personalize language instruction and conversation practice.',
  'A mental health platform that connects individuals with licensed therapists and provides resources for mental health support and self-care.',
  'An e-commerce store that specializes in sustainable and ethical beauty products made from natural and organic ingredients.',
  'A smart home technology company that creates products that optimize energy efficiency and reduce energy waste.',
  'A startup that creates educational games and toys for children that promote STEM education and critical thinking skills.',
];

function insertRandomIdea(randomIdeaList, setIdeaValue) {
  const idea =
    randomIdeaList[Math.floor(Math.random() * randomIdeas.length)];

  setIdeaValue(idea);
}

function StartUpIdeaForm({ handleGenerateSubmit }) {
  const [ideaValue, setIdeaValue] = React.useState('');

  return (
    <Form
      onSubmit={handleGenerateSubmit}
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
          value={ideaValue}
          onChange={(e) => setIdeaValue(e.target.value)}
          placeholder="Put your startup idea here!"
          style={{ height: '200px', width: '400px' }}
        />
      </FloatingLabel>
      <p>
        Need an idea?{' '}
        <Link
          href="#"
          onClick={() => insertRandomIdea(randomIdeas, setIdeaValue)}
        >
          Here are some examples!
        </Link>
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
