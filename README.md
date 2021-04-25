# James Valdez' Portfolio

## Making Updates

### Step 1 - STRUCTURE
Go to `/src/data/data.js` and fill your information, they are 5 objects:

**_Important Note_**: All the images must live inside the `src/images/` folder in order for Gatsby to show the images correctly.

### About Section

```javascript
export const aboutData = {
  img: "profile.jpg", // put your profile image (recommended aspect radio: square)
  paragraphOne: "",
  paragraphTwo: "",
  paragraphThree: "",
  resume: "", // if no resume, the button will not show up
};
```

### Projects Section

Put as many projects object you want inside the `array`.

```javascript
export const projectsData = [
  {
    id: nanoid(),
    title: "Title of Project",
    info: "Description of the project....",
    url: "https://www.youtube.com/embed/oL-1agX42js",
  },
  {
    id: nanoid(),
    title: "Title of Project",
    info: "Description of the project....",
    url: "https://www.youtube.com/embed/oL-1agX42js",
  },
  ...
];
```

### Contact Section

```javascript
export const contactData = {
  cta: "Let's keep in touch!",
  email: "jvvaldez98@gmail.com",
  networks: [
    {
      id: nanoid(),
      name: "linkedin",
      url: "linkedin.com",
    },
    {
      id: nanoid(),
      name: "youtube",
      url: "youtube.com",
    },
    ...
  ]
};
```

### Step 2 - STYLES

Change the color theme of the website ( choose 2 colors to create a gradient ):

Go to `src/styles/abstracts/_variables.scss` and only change the values on this classes `$main-color` and `$secondary-color` to your prefered HEX color

## Deployment

Run `npm run deploy` and you should see your website at `valdezjames.github.io`!

## Development

The development branch is called `source`. It is labeled the primary branch. The `main` branch is the hosted code-- don't touch it! It will be updated when you run the deploy command.
