# REST API Example

This example shows how to implement a **REST API** using [Express.JS](https://expressjs.com/de/) and Prisma.

## How to use

Go to [https://codesandbox.io/s/github/prisma-csb/rest-example-js](https://codesandbox.io/s/github/prisma-csb/rest-example-js) to explore the project as a CodeSandbox and follow the [**setup instructions**](./SETUP.md) to connect it to your own demo database.

### CodeSandbox details

- Codesandbox URL: [https://codesandbox.io/s/github/prisma-csb/rest-example-js](https://codesandbox.io/s/github/prisma-csb/rest-example-js)
- Server endpoint: [https://n50510vopm.sse.codesandbox.io/feed](https://n50510vopm.sse.codesandbox.io/feed)
- Codesandbox ID: `n50510vopm`

## API

#### `GET`

- `/post/:id`: Fetch a single post by its `id`
- `/feed`: Fetch all _published_ posts
- `/filterPosts?searchString={searchString}`: Filter posts by `title` or `content`

#### `POST`

- `/post`: Create a new post
  - Body:
    - `title: String` (required): The title of the post
    - `content: String` (optional): The content of the post
    - `authorEmail: String` (required): The email of the user that creates the post
- `/user`: Create a new user
  - Body:
    - `email: String` (required): The email address of the user
    - `name: String` (optional): The name of the user

#### `PUT`

- `/publish/:id`: Publish a post by its `id`

#### `DELETE`
  
- `/post/:id`: Delete a post by its `id`
