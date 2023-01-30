# Tech blog project 

 ## Table of contents

  * [Description](#Description)
  * [Instillation](#Instillation)
  * [Usage](#Usage)
  * [Contributors](#Contributing)
  * [Licence](#License)
  * [Questions](#Questions)
  

## Description

The purpose of this application is to provide users with a social media blog platform specific to coding. Users can view all existing posts from other users as well as create their own account and view their profile. Individual users can generate and view their own posts from their profile as well as seeing them on the homepage once created. Additionally, users can interact with post from other users by commenting! Posts can also be viewed individually in with a large format by clicking the title.


## Initialisation
To use this application node.js must be installed: https://nodejs.org/en/download/ <br />

**The packages required are:**
 * **bcrypt**  @5.0.0
 * **connect-session-sequelize** @7.0.4 
 * **dotenv** @8.2.0 
* **express** @4.17.1 
* **express-handlebars** @5.2.0 
* **mysql2** @2.2.5 
* **sequelize** @6.3.5 

All dependencies should already be in the package.json file and installed through running ```npm i``` in the terminal.

## Usage
To use this application all dependencies must be installed. <br>

Check out the repo: https://github.com/Charl1410/coding-blog

To run the application: 

* The data base must be created by logging into mysql ```mysql -u root -p``` and running the command ```source db/schema.sql```
* Quit mysql by running the command ```quit;```
* To seed the data base run ```npm run seed```
* Finally run ```npm run start``` and navigate to your url route localhost:3001 in your to access the website locally 
* Or follow this link to access the deployed application through Heroku: https://code-blog.herokuapp.com/

## Screenshots 

![](https://github.com/Charl1410/coding-blog/blob/69372bf7e03b22ee996a730c848c6429178e240b/Screenshots/Screenshot%202023-01-24%20at%2018.19.45.png)
![](https://github.com/Charl1410/coding-blog/blob/69372bf7e03b22ee996a730c848c6429178e240b/Screenshots/Screenshot%202023-01-24%20at%2018.20.28.png)

![](https://github.com/Charl1410/coding-blog/blob/69372bf7e03b22ee996a730c848c6429178e240b/Screenshots/Screenshot%202023-01-24%20at%2018.20.35.png)

![](https://github.com/Charl1410/coding-blog/blob/69372bf7e03b22ee996a730c848c6429178e240b/Screenshots/Screenshot%202023-01-24%20at%2018.20.46.png)

## Contributors

* [Jordan Gibbs](https://github.com/gibbo3433)
* [Charlotte Griffin](https://github.com/Charl1410)
* [Ellesse Donaldson](https://github.com/ellessed) 
* [Mindaugas Narusevicius](https://github.com/MindOfDevelopment) 
* [Mohamed Elmi](https://github.com/moelmi89)

## Licensing 

This project was not licensed.
