React Example for Beginners   

This application is made up of two main pages: 
* /
* /article/:slug

***

On the home page, you can find all the articles from your database which is already configured using this structure: [node-express-realworld-example-app](https://github.com/gothinkster/node-express-realworld-example-app). 

And by clicking on each of them you may fly to the specific article page with the unique slug. 

To add any comment there will be a Write Your Comment form and you need to jot down your name and email to have it done.

***

Based on whether you set it up on your local machine or exposed to the internet, you may manipulate the BASE_URL of your endpoints, which is available in /app/utils/constants directory. And also the favicon.ico source in index.html.

***

Run `npm run build` to have it in production mode.

This application is not responsive yet, but the PWA version will be released soon.



# The Structure
I employed React Boilerplate structure with some manipulations. 
You may notice that there are two main directories in the app folder:
1. components
2. containers

The first are those which are just dummy components for the purpose of presentation and all the consuming data come from their parents' container through props. 
And the containers folder, on the other hand, holds containers that are in direct access with redux and store. 
You can dispatch any action only in containers and flow the processed data in the whole app by setting in or selecting from the store.


### Actions
To dispatch any action, you need to define it in your container folder. To store a global value using redux, you need to have a global reducer in App container and I already injected these global states in the main reducers injector located in the /app directory.


### Saga
After dispatching, saga catches your action on the fly (if you have already said it to) and it's your middleware time to handle the requests and/or dispatching further actions. 

I used the butterfly structure to handle sequential actions and side-effects. 


### Requests
I have made up a requester in the utils directory and you need to call it with the proper URL and options. 

### Selector
To access your data from the store, there is a createStructureSelector that you can map it to the props in your container. By making selectors from any scope or domains in your app, your connection to the store will listen to any changes and re-render your component in a defined lifecycle.

### Store
Every container has its own reducer and by the help of the `produce` module creates an immutable value in the store and sets it by the payload of the action.


# UI Kit
I found it convenient to use `react-bootstrap`. 

### CSS
A CSS file containing bootstrap classes is in app/assets/css directory. The font-family is Montserrat and the primary color is #3B2EB2. A global-style.css is also imported in the app.js for any global styling in the future. Besides, for customizing the style of elements I used `react-jss` hooks with a theme as an argument that is provided in the topmost level of the app means `app.js`.

### Theming
There is a `theme.js` file in utils involving colors and a standard distance that I hire for better use of margin and padding in the app. All other theming-related properties go into it. 





