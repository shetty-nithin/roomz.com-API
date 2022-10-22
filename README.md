# API for roomz.com

[![LinkedIn][linkedin-shield]][linkedin-url]

<br/>

## About The Project
This is a simple hotel rooms booking app. This API can be used for the client side to get information about the hotels & to book the rooms as well as used for the admin purpose to get information about all the users/hotels/rooms/bookings etc...
<br/>

### Features : 
* Sign up / Sign in
  <br/> A user can create an account as a CUSTOMER and sign into the account to use the website. And an admin can login in to the predefined admin account.

* An user can search for the hotels based on the city/type of accomodation/ price range and book the rooms in the selected hotel for the selected date.

* An admin can perform CRUD operations on users/hotels/rooms/bookings.

### Built with : 

* [![MongoDB][MongoDB]][MongoDB-url]

* [![Express.js][Express.js]][Express-url]

* [![Node.js][Node.js]][Node-url]
<br/>
<br/>

## Installation
<br/>

1. Run the following command in the terminal to clone the repository
   ```sh
   git clone https://github.com/shetty-nithin/roomz.com-API.git
   ```

2. Go inside the root folder

3. Install NPM packages
   ```
   npm install
   ```

4. Inside the root folder create one more file with name ".env" and mention the port as below
   ```javascript
    MONGO_DB_URL = mongodb://localhost:27017/roomz
    PORT = 8080
    JWT_SECRET_KEY = "<some string>"
    ACCESS_TOKEN_TIME = 1200
   ```

5. Run the server
   ```javascript
   npm start
   ```
<br/>

## Demo

#### Customer Interface <br/><br/>
https://user-images.githubusercontent.com/62413993/197358467-b552ef60-f2ac-4b88-a70f-30f146084ad4.mp4

#### Admin Interface <br/><br/>
https://user-images.githubusercontent.com/62413993/197358282-9ab6ecb5-d062-48af-9f0b-612f81681c96.mp4





<!-- MARKDOWN LINKS -->
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members

[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues


[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=0072b1
[linkedin-url]: https://www.linkedin.com/in/shetty-nithin/

[MongoDB]: https://img.shields.io/badge/MongoDB-589636?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/

[Node.js]: https://img.shields.io/badge/Node.js-215732?style=for-the-badge&logo=nodedotjs&logoColor=61DAFB
[Node-url]: https://nodejs.org/en/

[Express.js]: https://img.shields.io/badge/Express.js-D1D3D4?style=for-the-badge&logo=express&logoColor=4FC08D
[Express-url]: https://expressjs.com/
