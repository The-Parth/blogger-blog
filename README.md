# Blogger blog

A simple blog built with React.js and Express.js. 




## Installation

Install using git.

```bash
  git clone https://github.com/The-Parth/blogger-blog.git
```
    
## Environment Variables

To run this project, you will only need to set one Environment Variable for MongoDB.

`ATLAS_URI` = MongoDB ATLAS_URI. You can also use any other Mongo host.

`NODE_ENV` = production // For production

### Once backend is deployed, you will be needed to provide the URL in the host.js file in the src folder. This will be used by the frontend to make requests. Do not include a slash at the end of the url.


## Deployment

### Here all commands are to be executed from root "/"

### Backend
To deploy the backend, first install all the dependencies for the backend. 

#### Build
```bash
  cd BackEnd && npm install && cd ..
```
Now deploy with 

#### Deploy
```bash
  node BackEnd/index.js
```

### Frontend

#### Build
```bash
  npm install && npm run build 
```

Now the build folder should be created. Deploy using your frontend host or for local, just run 
```bash
  npm install -g serve
  serve -s build
```








## Demo

Backend might be down at times as it is on a free host.

https://blogger-techies.netlify.app/




## Authors

- [Atharva Upare](https://www.github.com/AtharvaUpare)
- [Parth Bhanushali](https://www.github.com/The-Parth)
- [Toyash Patil](https://github.com/Toyashpatil)
- [Aastha Deshwal](https://github.com/AasthaDeshwal)



