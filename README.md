# Page layout Lorem Ipsum

## Content:
   - [Main tasks](#completed-main-tasks)
   - [Additional tasks](#additional-tasks)
   - [Languages and tools](#languages-and-tools)
   - [Reports](#reports)
     - [Open Graph](#open-graph)
     - [Validity check on BEM](#validity check-on-BEM)
     - [Actual site performance](#actual-site-performance)
   - [Local development](#local-development)

Layout:

[![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/file/2b7UqUrTs4R8JQoYutlKTu/Test?node-id=0-1)

   - Website link: https://migalov.github.io/loremipsum/
   - Alternative link: https://loremipsum-kmg82h5g0-migalov1.vercel.app

[![https://migalov.github.io/loremipsum/](./src/favicons/android-chrome-192x192.png)](https://migalov.github.io/loremipsum/)

## Main tasks completed:

- The site has been adapted for mobile devices with a width of at least 320px and tablets.
- The layout followed the BEM methodology.
- Mobile First strategy used
- Most blocks are built on Flex and Grid
- Styles are written using the SASS preprocessor in the SCSS dialect
- The number of items and form fields in the “Checkout” block is provided
- Cross-browser compatible.
- The site header is fixed at the top of the page
- The assembly uploads WebP images to the folder with the site, which significantly reduces page loading time
- Published in Github Pages (the plugin [gh-pages](https://www.npmjs.com/package/gh-pages) helps a lot)


### Additional tasks
- After scrolling, the header and logo are slightly reduced in size
- The menu item "Checkout" directly leads to the corresponding block, taking into account the size of the header.
- After a little scrolling, a button appears, when clicked, the user will smoothly return to the top of the page
- Animation was set for the site elements (the [AOS](https://michalsnik.github.io/aos/) library was used)
- The order submission form is capable of sending data (the data goes to the account in [Formspree](https://formspree.io/) (alas, with the attached file, the service refuses to accept the file along with the form data and the file itself :worried:))

---
---

# Languages and tools
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)![Gulp](https://img.shields.io/badge/GULP-%23CF4647.svg?style=for-the-badge&logo=gulp&logoColor=white)


# Reports
## Open Graph

![Open Graph](./demo_materials/metatags.png)


## Actual site performance
|Mobile version|Desktop version|
|----------------|------------------------------|
|![Open Graph](./demo_materials/mobile-version-report-min.jpg)|![Open Graph](./demo_materials/desktop-version-report-min.jpg)|

## Validity check on BEM
- [Link to validator](https://involta.ru/tools/validator-html/?name=https://migalov.github.io/loremipsum/)

[![Watch the video](./demo_materials/preview-video-bem.png)](https://youtu.be/htrCWQ2-Nlo)

## Submitting data via form
[![Watch the video](./demo_materials/preview-video-formspree.png)](https://youtu.be/SOtpGcjsEmc)

---
---

# Local development
To install the assembly with the site you need to install on your computer:

[![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![Gulp](https://img.shields.io/badge/GULP-%23CF4647.svg?style=for-the-badge&logo=gulp&logoColor=white)](https://gulpjs.com/docs/en/getting-started/quick-start)
[![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)](https://yarnpkg.com/)

Open the command line and download the plugins (the list of used plugins can be found in the file [**package.json**](/package.json))
```sh
yarn
```


## Start development mode:

```sh
yarn start
```

## Building the project

```sh
yarn build
```

## Deploy the assembled project
```sh
yarn deploy
```
