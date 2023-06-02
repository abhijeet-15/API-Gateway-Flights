This is a base node js project template, which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recommendations. Feel free to change anything.

`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make separate tests folder)

Lets take a look inside the src folder

 - `config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up dotenv so that we can use the environment variables anywhere in a cleaner fashion, this is done in the server-config.js. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.

 - `routes` -> In the routes folder, we register a route and the corresponding middlewares and controllers to it.

 - `middlewares` -> They are just going to intercept the incoming requests where we can write our validators, authenticators etc.

 - `controllers` -> They are kind of last middlewares as post them you call your business layer to execute business logic. In controllers, we just receive the incoming requests and data and then pass it to the business layer and once business layer returns an output, we structure the API response in controllers and sent the output.

 - `repositories` -> this folder contains all the logic using which we interact the DB by writing queries. All the raw or ORM queries reside here.

 - `services` -> contains the business logic and interacts with repositories for data from the database.

 - `utils` -> contains helper methods, error classes etc.


### Set up the project

 - Download this template from GitHub and open it in your favourite text editor.
 - Go inside the folder path and execute the following command:
  ```
    npm install
  ```
 - In the root directory, create a `env` file and add the following environment variables
   ```
        PORT=<port number of your choice>
   ```
   ex :
   ```
        PORT=3000
   ```
   - go inside the `src` folder and execute the following command:
    ```
        npx sequelize init

    ```

 - Inside the `src/config` folder create a file named `config.json` and write the following code:

 ```
    {
  "development": {
    "username": "root",
    "password": "password",
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "password",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "password",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
 ```

 - If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc

 - If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

 - To run the server execute

  ```
  npx run dev
  ```

