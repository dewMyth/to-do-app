# A MERN stack based Todo Application

## How to run the application

1. Download/Clone the source code to the compuer
2. Once extracted, you will see _client_ and _backend_ folders
3. Open the _backend_ folder, and use a command line application (ex : cmd or bash etc. ) to open up the folder.(i.e your current location in the cmd/bash should be the ".../.../backend>")
4. Use the command `npm start` to run the backend server
5. Once it is up and running, you can do the same with the _frontend_ folder
6. Even for frontend use the command `npm start` to start the application
7. Go to `http://localhost:3000` from any of your browser to use the application

## How to use the application

1. Once you go to `http://localhost:3000` you will see a screen like below.

   ![Landing Signin!](/guide-images/1.png)

2. Then you can login to application using the following credentials or you can click register and create a new account.
   `username : john ` , `password : john123`

3. In the register view, you should add `username`, `password` and `confirm password` to register a user. Then it will redirect to login page again.

   ![Register!](/guide-images/2.png)

4. Then you can see todo list and create to list components in the main page. There you can create a new todo with a title and the status.

   ![Main!](/guide-images/3.png)

5. When creating to do, status icons in the toggle buttong group referred to the `Todo`, `On Going`, `Done`

   ![Main!](/guide-images/4.png)

6. Then you can see the added todo in the My Todolist under the create todo.

   ![Main!](/guide-images/5.png)

7. Using the _Recycle bin icon_ , you can delete a created to do.

8. Using the _Pen icon_, you can edit the created todo.

9. In edit screen, you can see the todo status in the highlighted toggle button. And you can change and save the todo title and status.

   ![Main!](/guide-images/6.png)

10. Finally you can click the user icon in the Navigation bar and `Logout`. Which will again redirect to the signin page.

    ![Main!](/guide-images/7.png)

## Error Handled

1. When passwords are not matched in the register screen.

   ![Main!](/guide-images/8.png)

2. When username is not existing when login,

   ![Main!](/guide-images/9.png)

3. When credentials are worng,

   ![Main!](/guide-images/10.png)

## Technologies Used

1. Backend created with express backend which is created using nodejs runtime environment. Mongoose Schema was used to connect with the database which is MongoDb.

2. Fronend application was created using React with the help of context API and react hooks.

3. To style the UI, Materil UI for React (MUI) was used as the CSS framework.

4. Apart from that several other npm libraries was used to handle minor utlities in the application

## API DOC

1. Register User (POST REQUEST)

> /api/user/register

Body

    "username" : "john",
    "password" : "john123"

Response

    "username": "john",
    "password": "U2FsdGVkX1/O5kNyGntQ+YcReZFvShhWNP3cf28WovQ=",
    "_id": "620b4e2a0493cba3d911334f",
    "createdAt": "2022-02-15T06:54:34.504Z",
    "updatedAt": "2022-02-15T06:54:34.504Z",
    "__v": 0

2. Login User (POST REQUEST)

Body

    "username" : "john",
    "password" : "john123"

Response

> /api/user/login

    "_id": "620b4e2a0493cba3d911334f",
    "username": "john",
    "createdAt": "2022-02-15T06:54:34.504Z",
    "updatedAt": "2022-02-15T06:54:34.504Z",
    "__v": 0,
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGI0ZTJhMDQ5M2NiYTNkOTExMzM0ZiIsImlhdCI6MTY0NTA4MTA1MywiZXhwIjoxNjQ1MzQwMjUzfQ.ZYVvAEB-vhu_5LX5xq0E2V7fYUbjGv3dtpkX1B8_ppY"

3.  Find User (GET REQUEST)

Response

> /api/user/find/:userId

    "_id": "620b4e2a0493cba3d911334f",
    "username": "john",
    "createdAt": "2022-02-15T06:54:34.504Z",
    "updatedAt": "2022-02-15T06:54:34.504Z",
    "__v": 0

4. View Todo (GET REQUEST)

Response

> /api/todo/create

    "title": "Do Homework 2",
    "status": "Done",
    "postedBy": "620b4e2a0493cba3d911334f",
    "_id": "620b5b6ed922e2dff1426227",
    "createdAt": "2022-02-15T07:51:10.522Z",
    "updatedAt": "2022-02-15T07:51:10.522Z",
    "__v": 0

5. Get My Todos (GET REQUEST)

Response

> /api/todo/:usedId

    [{
    	"_id": "620d09ac3a7bdcdca7ae1a21",
    	"title": "First Todo",
    	"status": "Todo",
    	"postedBy": "620b4e2a0493cba3d911334f",
    	"createdAt": "2022-02-16T14:26:52.687Z",
    	"updatedAt": "2022-02-16T14:26:52.687Z",
    	"__v": 0
    },
    {
    	"_id": "620d11bc3a7bdcdca7ae1a3d",
    	"title": "Second Todo",
    	"status": "On Going",
    	"postedBy": "620b4e2a0493cba3d911334f",
    	"createdAt": "2022-02-16T15:01:16.706Z",
    	"updatedAt": "2022-02-16T15:01:16.706Z",
    	"__v": 0
    },
    {
    	"_id": "620dcf0544d2d5309de2e1ca",
    	"title": "Third Todo",
    	"status": "Done",
    	"postedBy": "620b4e2a0493cba3d911334f",
    	"createdAt": "2022-02-17T04:28:53.439Z",
    	"updatedAt": "2022-02-17T04:28:53.439Z",
    	"__v": 0
    }]

6.  Delete a todo (DELETE REQUEST)

Response

> /api/todo/:userId/:todoId

    "message": "Todo deleted successfully!"

7. Edit todo (PUT REQUEST)

Body

    "status" : "Done"

Response

> /api/todo/:userId/:todoId

    "_id": "620b59fe18ef529c5e9b2615",
    "title": "Do Homework",
    "status": "Done",
    "postedBy": "620b4e2a0493cba3d911334f",
    "createdAt": "2022-02-15T07:45:02.429Z",
    "updatedAt": "2022-02-15T08:02:17.391Z",
    "__v": 0
