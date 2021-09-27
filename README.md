# Not a todo app

# Day 0:

---

This is my design for the todo app I'm going to create:

![Screen Shot 2021-09-27 at 4.16.51 PM.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2754f643-7626-49c8-8b3a-726ac153056e/Screen_Shot_2021-09-27_at_4.16.51_PM.jpg)

A saterical take on a todo app. I designed the UI on Figma, messging around with the application. So first thing - looks like there will be 3 major Components:
UserLogin

- login input
- pswd input
- submit button

ToDoCreation

- todo input text box
- submit button - maybe can recycle from userlogin
- list of unchecked 'todos'
- checkboxes

TodoHistory

- List of already completed todos - will need to be stored.

I'm going to be using react - might even use react hooks depending on how I feel.

Going to create a user log in and password - dummy for asthetics. The primary focus is going to be the todo list itsel- the textbox, rendering of the list and the submit button. I'm going to create some fake data to run through the gamut.

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

## Running

Open the file `dist/index.html` in your browser

## Testing

To run unit tests:

```sh
npm test
```

## Credits

Made with [createapp.dev](https://createapp.dev/)
