# James Valdez' Portfolio

## Making Updates

### Content

Go to `/src/data/data.js` and fill your information:

**_Important Note_**: All the images must live inside the `src/images/` folder.

### About Section

```javascript
export const aboutData = {
  img: "profile.jpg", // recommended aspect radio: square
  paragraphOne: "",
  paragraphTwo: "",
  paragraphThree: "",
  resume: "google.com", // if no resume, the button will not show up
};
```

### Projects Section

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

## Deployment

Run `npm run deploy` and you should see your website at `valdezjames.github.io`!

## Development

The development branch is called `source`. It is labeled the primary branch. The `main` branch is the hosted code-- don't touch it! It will be updated when you run the deploy command.
