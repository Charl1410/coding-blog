# Tech blog project 

 ## Table of contents

  * [Description](#Description)
  * [Instillation](#Instillation)
  * [Usage](#Usage)
  * [Contributors](#Contributing)
  * [Licence](#License)
  * [Questions](#Questions)
  

## Description

The purpose of this application is to provide users with a social media blog platform specific to coding. Users can view all existing posts from other users as well as create their own account and view their profile. Individual users can generate and view their own posts from their profile as well as seeing them on the homepage. Additionally, users can interact with post from other users by commenting!


## Account Creation
To start using the application, you will first need to create an account. Click on the "Sign Up" button on the login page and fill out the registration form with your email and password. 

Once verified, you can now log in to the application.

## Creating a New Post

Once logged in, you will be able to access the "New Post" page by clicking on the "Create Post" button on the top navigation bar. On this page, you can enter a title and body for your post. You can also preview your post before submitting it.

## Viewing and Interacting with Posts

To view the posts created by other users, click on the "Home" button on the top navigation bar. This will take you to the home page where you can see a list of all the most recent posts.

Once on a post, you can interact with it by commenting or liking it. You can also share the post on other social media platforms by clicking on the corresponding button.

## Managing Your Posts

You can view and manage your own posts by clicking on the "My Posts" button on the top navigation bar. On this page, you can see a list of all the posts you have created and can edit or delete them.
Profile

You can access your profile by clicking on the "Profile" button on the top navigation bar. This will show you your personal information and a list of your posts.

## Profile

You can access your profile by clicking on the "Profile" button on the top navigation bar. This will show you your personal information and a list of your post


## Initialisation
To use this application node.js must be installed: https://nodejs.org/en/download/ <br />

** The packages required are: **
 * **bcrypt**  @5.0.0
 * **connect-session-sequelize** @7.0.4 
 * **dotenv** @8.2.0 
* **express** @4.17.1 
* **express-handlebars** @5.2.0 
* **mysql2** @2.2.5 
* **sequelize** @6.3.5 

All dependencies should alreadt be in the package.json file and installed through running ```npm i``` in the terminal.

## Usage
To use this application all dependencies must be installed. 

To run the application: 

* The data base must be created by logging into mysql ```mysql -u root -p``` and running the command ```source db/schema.sql```
* Quit mysql by running the command ```quit;```
* To seed the data base run ```npm run seed```
* Finally run ```npm run start``` and navigate to your url route localhost:3001 in your to access the website locally 

## Screenshots 

To Be Added

# Future Development 



## Contributors

* [Jordan Gibbs](https://github.com/gibbo3433)
* [Charlotte Griffin](https://github.com/Charl1410)
* [Ellesse Donaldson](https://github.com/ellessed) 
* [Mindaugas Narusevicius](https://github.com/MindOfDevelopment) 
* [Mohamed Elmi](https://github.com/moelmi89)

## Licensing 

This project was not licensed.
