# Callvita Task Management Server-side

## About The Project

Callvita Task Management is a web app that allows you to add, get, edit, delete your tasks and also search your tasks for specific keywords.

## Getting Started

First you need to Clone this repo

```sh
git clone https://github.com/FadyAttia11/callvita-server.git
```

Then you need to cd to the root of the project by writing

```sh
cd callvita-server
```

then you need to install the dependencies for the App

```bash
npm install
```

after that you can start the server by writing

```bash
npm run server
```

This will run the server and you should see the message

```bash
server is listening on port 5000
```

## Backend Usage

You can use postman to do the CRUD operations on the backend DIRECTLY through the available endpoints:

### fetch all tasks:

make a GET request to

```sh
 http://localhost:5000/api/tasks/
```

this request will retrieve all the tasks on the database

### search tasks by keyword:

make a GET request to

```sh
 http://localhost:5000/api/tasks/:keyword
```

the keyword at the end of the url will be used to fetch all the tasks that has this keyword at their title or description

### create new task:

make a POST request to

```sh
 http://localhost:5000/api/tasks/
```

with a JSON body like that:

```json
{
  "title": "studying for my exam",
  "description": "studying maths for my exam tomorrow"
}
```

this request will add a new task to the database

### edit specific task:

make a PUT request to

```sh
 http://localhost:5000/api/tasks/:id
```

with a JSON body like that:

```json
{
  "title": "updating studying for the exam",
  "description": "exam delayed for one day as an update"
}
```

this request will update a specific task by it's id

### delete specific task:

make a DELETE request to

```sh
 http://localhost:5000/api/tasks/:id
```

this request will delete this specific task by it's id from the database


## Contact

Fady Attia - [@my_linkedin](https://www.linkedin.com/in/fady-attia-01) - fadyattia11@gmail.com

Project Link: [https://github.com/FadyAttia11/callvita-server](https://github.com/FadyAttia11/callvita-server)

============================================================
