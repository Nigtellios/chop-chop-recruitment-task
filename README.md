# chop-chop-recruitment-task
Recuitment task for Front-End Mid

Node.JS version: 14.17.4
Yarn version: 1.12.11
Parcel Bundler version: 1.12.4

# How to install dependencies
Go to your terminal and: <br/><br/>
```yarn install```

# Build project
```yarn build```

# Run dev version of project
```yarn dev```

# Run & Build Whole project (recommended)
```yarn start```

# Mini-docs
## Project Structure
Project is built-up on Parcel JS Bundler to speed up development process and use autoprefixers/sass autocompiler with browsersync view.

Whole project is based inside /src/ directory,
- docs -> Recruitment Task Files
- fonts -> Local fonts files
- img -> Recuitment Tasks IMG Files
- js -> Modular JS Code
- scss -> SCSS Styling
- index-html -> Our page

## JS Docs
In project there are 3 files:
- dropdown.js (dropdown functionality)
- modal.js (modal, lightbox functionality)
- navigation (not needed, but I've used it to make some very simple RWD nav menu)

In order to re-use modal.js or dropdown.js, we have to simply regenerate HTML structure based on parameters passed to these functions. In case of modal.js, if we want add more files all we have to do is create another gallery__item.
