
# Pooling-System-API
A simple project to Create a Polling System API where anyone can create questions with options and also add votes to it

## Live Api: https://polling-system-api-production-6b0c.up.railway.app/

## Features

- Create a question (you can add as many questions as you want)
- Add options to a question
- Add a vote to an option of question
- Delete a question → (optional: A question can’t be deleted if one of it’s options has votes)
- Delete an option → (optional: An option can’t be deleted if it has even one vote given to it)
- View a question with it’s options and all the votes given to it


## Technologies Used

- Node.js
- Express.js
- MongoDB 


## How to use

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


Clone the project

```bash
  git clone https://github.com/Debajyoti-Shit/Polling-System-API
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

# How to use PostMan
1. Open PostMan
2. Enter The Url into the postMan with the required Method and data to pass with the request
3. Then just Note The Change in your database.

## Api url Routes for local:  
1. http://localhost:8000/questions/create (To create the questions)
2. http://localhost:8000/questions/:id/options/create (To create the options of a particular questions)
3. http://localhost:8000/options/:id/add_vote (To add a vote for a Particular Option)
4. http://localhost:8000/questions/:id (To get the details about the particular question)
5. http://localhost:8000/questions/62ff5f8d8989690a30403f31/delete (To delete a Particular Question)
6. http://localhost:8000/options/62ff61c492d525ac764ec787/delete (To delete a particular option)

## Api url Routes for live Api url:(https://polling-system-api-production-6b0c.up.railway.app/) 

1. https://polling-system-api-production-6b0c.up.railway.app/questions/create (To create the questions)
2. https://polling-system-api-production-6b0c.up.railway.app/questions/:id/options/create (To create the options of a particular questions)
3. https://polling-system-api-production-6b0c.up.railway.app/options/:id/add_vote (To add a vote for a Particular Option)
4. https://polling-system-api-production-6b0c.up.railway.app/questions/:id (To get the details about the particular question)
5. https://polling-system-api-production-6b0c.up.railway.app/questions/62ff5f8d8989690a30403f31/delete (To delete a Particular Question)
6. https://polling-system-api-production-6b0c.up.railway.app/options/62ff61c492d525ac764ec787/delete (To delete a particular option)


## Note
1. A question can’t be deleted if one of it’s options has votes
2. An option can’t be deleted if it has even one vote given to it




## Directory Structure and flow of The Code
This code follows MVC pattern and hence everything is differentiated and well managed:

      Pooling-System-API
        |------config
        |         |--- moongose.js
        |             
        |------ controllers
        |         |--- optionControllers.js
        |         |--- questionControllers.js
        |
        |------ models
        |         |--- OptionsModel.js
        |         |--- questionsModel.js
        |          
        |------ routers
        |         |--- index.js
        |------ .env
        |------ .gitignore
        |------ index.js
        |------ package.json
        |------ package-lock.json
        └------ README.md


## Authors

- [Debajyoti Shit](https://github.com/Debajyoti-Shit/)

