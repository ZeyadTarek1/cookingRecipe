# cookingRecipe

-   Deployed at https://cooking-recipe-mern.herokuapp.com

## Table of Contents

-   [Description](#description)
-   [Instructions](#instructions)
-   [Prerequisites](#prerequisites)
-   [Download](#download)
-   [Install](#install)
-   [Run](#run-stack)
-   [Dependencies](#dependencies)

## Description

-   This is a simple website where you can view, save, update and delete your recipes.
-   This website has a view where you can add a recipe, see all recipes, and see a detailed single recipe.
-   This project uses Mongoose, Express, React and Node.

# Instructions

-   To add a recipe, use the "create recipe" button in the home page or use the link in the nav bar.
-   To view the details of a recipe, click on the image of any recipe in the home page.

# Future Plans

-   Add a user login and verifcation system.
-   Add more functionality to the recipe cards.
-   Add a more permanent file storage solution for image uploads.

# Usage (run fullstack app on your machine)

## Prerequisites

-   [Node](https://nodejs.org/en/download/)

## Download

````terminal
$ git clone https://github.com/ZeyadTarek1/cookingRecipe.git

# Install

## Install client dependencies (PORT: 3000)

```terminal
$ cd client
$ npm i
````

## Install server dependencies (PORT: 5000)

```terminal
$ npm i
```

## Run-Stack

```terminal
$ npm run dev
```

# Dependencies

| Client-side               | Server-side          |
| ------------------------- | -------------------- |
| typescript: ~4.1.5        | concurrently: ^7.1.0 |
| react-bootstrap: ^2.3.0   | nodemon: ^2.0.15     |
| react-redux: ^7.2.8       | cors: ^2.8.5         |
| react: ^18.0.0            | dotenv: 16.0.0       |
| react-dom: ^18.0.0        | express: ^4.17.3     |
| styled-components: ^5.3.5 | mongoose: ^6.3.1"    |
| react-scripts: ^5.0.1     | multer: ^1.4.4"      |
