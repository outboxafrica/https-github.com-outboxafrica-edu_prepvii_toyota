# EDU Q & A PLATFORM
This is an EDU-API for the EDU Q&A platform where people can ask questions and provide solutions.

## Tech Stack <br>
- Node.js
- Express --server handling
- JSON Web Token --Authentication
- Bcrypt -- Password hashing
- Passport -- Authentication
- mongoose --Database Management
- nodemon --automatic refreshing of the server

## Main Files: Project Structure

    |--app.js
    |--server
        |--controllers
            |--answers.js
            |--posts.js
            |--user.js
        |--helpers
            |--validation.js
        |--models
            |--answers.js
            |--questions.js
            |--user.js
        |routes
            |--answers.js
            |--questions.js
            |--users.js

## Envorinment Variables

- PORT -- `server port number`
- DB_URI -- `database URL`
- SECRET_KEY -- `Secret key for verifying the token`
- NODE_ENV -- `Specifies the Server environment (development, local, production)`

## Usage
1. `clone` this repository.
2. `cd` into project root directory.
3. run `npm install` to install all dependencies.(you must have [pre-requisites](#pre-requisites)) 
4. Run `npm start` to start the server.
5. Open up `Postman` and then test out the Endpoints.

## **Pre-requisites**

- [Node Js](https://nodejs.org/en/download/)
- [Mongo DB](https://www.mongodb.com/try/download/community)

## User CRUD Operations

## SignUp User

Signs in a single user into the Application.

|**Endpoint**|**Method**|**Params**|**Data-type**|
|---|---|---|---|
|/register|POST|None|None|

- **Request Body**

```json
{
  "name": "testuser",
  "email": "testemail@exampleuser.com",
  "password": "password"
}
```

- **Request Headers**

> None

- **Success Response:**

**Status: `200 OK`**

- **Sample Content:**

```json
{
  "Message": "User account succesfully created!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
  eyJpZCI6IjVmNTc2OTlmM2U4NjFjMDAxNzBhNTFhMSIsImlhdCI6MTU5OTU2NDE5MSwiZXhwIjoxNTk5NjUwNTkxfQ.
  Hkp5ruXBMYdJ4pYdQCIJbKfB5PU6hdss5lEXehtNGUc"
}
```
- **Error Response** 
```json
{
"status": 422,
"message": "an error occured"
}
```

## Login User

Logs in a single user in the application.

|**Endpoint**|**Method**|**Params**|**Data-type**|
|---|---|---|---|
|/login|POST|None|None|

- **Request Body**

```json
{
  "username": "testuser",
  "password": "password"
}
```
- **Request Headers**
`x-access-token: xxxxxxxxxxxxxxx`

## Home page
|**Endpoint**|**Method**|**Params**|**Data-type**|
|---|---|---|---|
|`/home`|GET|`None`|string

##Response
Hello from Toyota
    
## Ask a question

Adds a question to the database.

|**Endpoint**|**Method**|**Params**|**Data-type**|
|---|---|---|---|
|`/questions`|POST|`None`|string

## Give a response

Adds an answer to a question in the database.

|**Endpoint**|**Method**|**Params**|**Data-type**|
|---|---|---|---|
|`/questions/<questionid>/answers`|POST|`required`|string|

## Get all questions

Gets all questions from the database.

**Endpoint**|**Method**|**Params**|**Data-type**
---|---|---|---
`/questions`|GET|`None`|None

## Get all answers to a question

Gets all answers to a question in the database.

**Endpoint**|**Method**|**Params**|**Data-type**
---|---|---|---
`/questions/<questionId>/answers`|GET|`required`|None


**Endpoint**|**Method**|**Params**|**Data-type**
---|---|---|---
`/questions/<questionId>/answers/<answerId>`|PUT|`required`|string

## Contributors

- Naiga Stella
- Bato Alvin
- Nalubega Priscillah
