![GeniusPage logo](https://user-images.githubusercontent.com/74881094/221405300-ee78f4d2-0bb5-4731-83e4-a8deb1d74f35.svg)

# GeniusPage
GeniusPage is an AI-powered landing page builder that helps users quickly and easily create beautiful and effective landing pages for their websites.
By leveraging the power of artificial intelligence and machine learning, GeniusPage provides a user-friendly interface that allows users to customize their pages with ease.

![screenshot of a logged in view of GeniusPage](https://user-images.githubusercontent.com/74881094/224033127-4e2aeec5-d10d-433c-b7c3-8d48f07e8e35.png)


## Features
- Create an account
- Login
- Submit a startup idea to be sent to the backend
- The backend uses machine learning to generate text for that startup
- View the generated page
- Customize the text of the page

## Not yet implemented
- Generate custom images via machine learning
- Save generated pages
- View saved pages and download their HTML and CSS

## Frontend
The frontend is made with React and Next.js, with some React-Bootstrap components. We also use [Clerk](https://clerk.dev/) for secure authentication and authorization.

## Backend
The backend is Python with the Flask web framework and a Postgres database. We use SQLAlchemy for Object Relational Mapping. We call an OpenAI API to generate the text for the landing pages, and we wanted to use StableDiffusion to generate images as well, but since this was a group project with a two-week deadline, we were unable to get that to work in time.

![a screenshot of an example generated page](https://user-images.githubusercontent.com/74881094/224033371-3bfb3784-1c7d-478d-a049-68345b6bdd73.png)



#### Credit 
This project is based on the landing page generator from Mixo: https://app.mixo.io/  
Placeholder images on generated pages by <a href="https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kelly Sikkema</a> on <a href="https://unsplash.com/s/photos/placeholder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>  
**Team:** [@ThinkerDreamer](https://github.com/ThinkerDreamer), [@EhisOm](https://github.com/EhisOm), and [@lucasdpadilha](https://github.com/lucasdspadilha)
