https://thelittlemitak.github.io/portfolio/

17/08/2023: Hello, world! After making some recent clean ups here and there I decided to leave this project in the past as a legacy (with all its errors and potencial improvements; believe me, I am aware of them) and start new portfolio projects.
<br>

05/11/2023: Today it's a very sad day! For financial reasons, moremore.me will stop existing... From now on, the website will be available only through pages at https://thelittlemitak.github.io/portfolio/

I trusted this project a lot but, after some time looking for a job (160 applications sent so far), I came to realize that the market is too competent for a single React project, so I want to get back to work and put in practice all the new things I learnt since I finished with this project (NextJS, NodeJS, TypeScript and other less important and easy to use libraries that are everywhere!).
<br>

I am very happy and proud of this project. Believe it or not, I had no feedback at all since I wrote my first line of code (more than a year ago) until a week ago. And in case you didn't know, this is not a follow-along project. Everything came from my ideas, incl. the tools inside of it, design, texts etc. And without teacher or mentor. After recieving this extremely constructive feedback, instead of proceeding with changes, I just removed the node_modules (how noob!), create a .gitignore file, update the README and leave it as it is. I want to get back and see everything I accomplished on my own as a reminder that we all have a place to start! And if this project is not enough to land a job, it's understandable; there's so much to learn...
<br>

I actually miss the days that I just coded and coded for hours without worrying... I will send less and better applications so I have time for the new projects! I am in Germany and an application is not a single CV->send; it takes time and more documentation and there are so many offers that they can take your day out.
<br>

If you read this far, thank you for checking in and I see you in the next project!
<br>

Lots of love,
<br>
Jose
<br>

PS: The project is still heavier than it should be because it seems that some commits have changes on the ESLint Cache of the node_modules... Please be patient; it's just a few MB's more!!!

# MoreMoreMe - Portfolio website

Hi! I'm Jose, and this is the project folder of [my portfolio website](https://thelittlemitak.github.io/portfolio/). If you have any general questions about the project or me, you may find the answers in the about section of the website. Here, we will focus on examining the architecture of this one and the purpose of its pages. But first:

## Quick disclaimer about the commits:
If you go back to the first commit you will see the project half done, but without React. This repo was created when I decided to start using React and moved all the content of a vanilla JS website to a React project. If I find the vanilla one, I will upload it too, for legacy (still, it's like half of this one).

## How to open the project on your computer:

1. Install Node.js: download and install Node.js from the [official website](https://nodejs.org) following the installation instructions for your operating system.

2. Clone the repository: navigate to the directory where you want to clone the repository and run the following command in your terminal:

```
$ git clone git@github.com:thelittlemitak/portfolio.git
```

3. Navigate into the downloaded repository folder
```
$ cd portfolio
```

4. Install dependencies by running the following command in your terminal:

```
$ npm install
```

5. Start the development server: once the folder is downloaded, you can run the following command in order to run the React project locally (it should appear on http://localhost:3000):

```
$ npm start
```

## Flowchart

```mermaid

graph TD;
    Homepage-->Login-modal;
    Homepage<-->About;
    Login-modal-->To-do;
    To-do<-->Motivator;
    To-do<-->Forum;
    To-do<-->Warmer;
```

<br>
Since this is a portfolio, my main goal was putting into practice as many tools as possible under one large project. Every page of the website has a different purpose:

<br>

## Homepage

On the homepage, I aimed to incorporate the most common web components to maximize my CSS practice. I included elements such as a carousel, cards, tables, testimonials and various lists. Additionally, I followed design rules and best practices, including considerations for contrast, white spaces, and color choices. I want to highlight that the graphic on the left side of the hero section was created by me using Affinity Designer.

Please note that while I mentioned certain features in the introduction, you may not find all of them implemented in the subsequent pages. My main focus was to create a realistic-looking homepage, so I included more tools than what is actually present. The intention was to showcase my design and development skills by creating a comprehensive and visually appealing homepage.

## About

On this page, you will also find various common components. However, the main purpose of this page is to provide explanations about the website itself and to provide a brief overview of myself. It serves as an introduction to provide visitors with information about the purpose and content of the website, as well as to offer some insights into my background and experience.

## To-do/Motivator/Forum/Warmer

In these tools, I focused on implementing the majority of the website's functionality, primarily through modifiable tables. I believe that handling state, side effects, and data transfer between components, particularly in CRUD (Create, Read, Update, Delete) elements such as the modifiable tables, forms the core of working with React. These tools allowed me to practice and demonstrate my ability to effectively manage data and interactivity within a React application.

## Responsiveness

The website has been designed to be responsive across various screen sizes, ranging from 1080p resolution to small mobile phones. To ensure optimal results on different devices, I utilized resources like https://caniuse.com/ and sought feedback from friends and family, particularly regarding various phone operating systems. Even though this website represents a fictional company, I wanted to simulate and address potential bugs and errors that can occur across different operating systems. By doing so, I aimed to gain experience in handling a wide range of issues and provide the best possible user experience on all devices.

<br>

Thank you for taking the time to review my project!
I appreciate your interest and hope you found it informative.

Best regards,

<br>

Jose
