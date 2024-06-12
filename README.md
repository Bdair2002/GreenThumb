<br />
<div align="center">
  <a href="https://github.com/Bdair2002/GreenThumb">
    <img src="public/img/logo-img.png" alt="Logo">
  </a>

  <h3 align="center">GreenThumb</h3>

  <p align="center">
Empowering Urban Gardening and Sustainable Living
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/Bdair2002/GreenThumb/issues/new">Report Bug</a>
  </p>
</div>


## GitHub Repository Information :small_blue_diamond:

- **Size:** ![Size](https://img.shields.io/github/repo-size/your-username/your-repository) &nbsp; :file_folder:
- **Files:** ![Files](https://img.shields.io/github/directory-file-count/your-username/your-repository) &nbsp; :open_file_folder:
- **NPM Version:** ![NPM Version](https://img.shields.io/npm/v/package-name) &nbsp; :package:
- **Last Commit:** ![Last Commit](https://img.shields.io/github/last-commit/your-username/your-repository/branch-name) &nbsp; :date:
- **Open Issues:** ![Open Issues](https://img.shields.io/github/issues/your-username/your-repository) &nbsp; :warning:
- **Contributors:** ![Contributors](https://img.shields.io/github/contributors/your-username/your-repository) &nbsp; :busts_in_silhouette:
- **All Releases:** ![All Releases](https://img.shields.io/github/downloads/your-username/your-repository/total) &nbsp; :inbox_tray:

### Note

- Replace `your-username/your-repository` with your actual GitHub username and repository name.
- Replace `branch-name` with the branch name for the last commit badge.
- Replace `package-name` with the name of your npm package for the NPM version badge.

These badges provide real-time information about your GitHub repository's status, making it easier for users and collaborators to quickly assess key metrics.

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#About-The-Project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project :information_source:
<strong>GreenThumb</strong> is a collaborative project for the Advanced Software Engineering course at Spring 2024, led by Dr. Amjad AbuHassan. Our mission is to empower urban gardening and promote sustainable living through a robust backend API platform. The project is designed to facilitate community-driven food production, knowledge sharing, and resource optimization among urban gardeners and enthusiasts.

## Core Features :sparkles:

1. **Community Gardens Directory**
   - Lists community gardens with details like locations, available plots, and growing conditions.
   - Helps users find and join local gardening initiatives.

2. **Crop Planning and Tracking**
   - Enables users to plan and monitor gardening activities.
   - Includes features for crop rotations, planting schedules, and harvest records.

3. **Knowledge Sharing**
   - A library of gardening guides, tutorials, and best practices.
   - Content contributed by experienced gardeners and organizations.

4. **Resource Exchange**
   - Platform for exchanging or sharing gardening resources (tools, seeds, compost, surplus produce).
   - Aims to reduce waste and promote sustainability.

5. **Volunteer Coordination**
   - Facilitates the organization of volunteers for garden maintenance, events, and workshops.
   - Enhances community collaboration.

6. **Local Partnership Integration**
   - Connects with local nurseries, farms, and organizations.
   - Promotes products, services, and events relevant to urban gardening.
### Built With :hammer_and_wrench:

* [![Node.js][Node.js]][Nodejs-url]
* [![Sequelize][Sequelize]][Sequelize-url]
* [![Express][Express.js]][Express-url]
* [![Pug][Pug]][Pug-url]
* [![Docker][Docker]][Docker-url]

[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Nodejs-url]: https://nodejs.org/
[Sequelize]: https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white
[Sequelize-url]: https://sequelize.org/
[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[Pug]: https://img.shields.io/badge/Pug-A86454?style=for-the-badge&logo=pug&logoColor=white
[Pug-url]: https://pugjs.org/
[Docker]: https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/




<!-- GETTING STARTED -->
## Getting Started :rocket:

Follow these steps to install this project with NPM.

## Installation Steps

Follow these steps to set up the project on your local machine:

1. **Clone the repository**

    ```bash
    git clone https://github.com/Bdair2002/GreenThumb.git
    cd GreenThumb
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up the database**

    There are two ways of running the database, you can either install MySQL server, or install docker and let it handle everything for you. but first you will have to configure it [here](#Docker-Setup).
    If you use MySQL, then create a database and name it **green_thumb**, then Sequelizer will handle all the required connections.

4. **Set up .env**
    
    Create a `.env` file in the root directory of the project. Add the following environment variables to it:

    - **MYSQL_ROOT_PASSWORD**: Password for the MySQL root user.
    - **PORT**: Port number for your application (e.g., 3000).
    - **JWT_SECRET**: Secret key for JWT (JSON Web Token) encryption.
    - **JWT_EXPIRES_IN**: Expiration time for JWT tokens.
    - **JWT_COOKIE_EXPIRES_IN_DAYS**: Expiration time for JWT cookies.
    - **EMAIL_USERNAME**: Username for the email service.
    - **EMAIL_PASSWORD**: Password for the email service.
    - **EMAIL_HOST**: SMTP host for sending emails.
    - **EMAIL_PORT**: SMTP port number.
    
    These environment variables are used throughout the application to configure various settings. Ensure the `.env` file is not committed to version control for security reasons. You can use tools like `dotenv` to load these variables into your Node.js application during development.



4. **Run the application**

    ```bash
    npm startbu
    ```

## Additional Scripts

- **Build javascript bundle**

    ```bash
    npm run build:js
    ```
## Docker Setup

If you prefer to use Docker, follow these steps:

1. **Build the Docker image**

    
    ```bash
    cd database
    docker build -t mysql_db .
    ```

2. **Run the Docker container**
    
    We created a short-hand script to run the database for you. All you have to do is write the folllowing
    ```bash
    npm run database
 
    ```
    if you are using MAC, write the following
    ```bash
    npm run databaseMAC
 
    ```


## External APIs Used

### Weather API

- **Provider:** [Open Weather Map](https://openweathermap.org/)
- **Description:** Used to fetch current weather conditions and forecasts.

### Soil API

- **Provider:** [Soilgrids](https://rest.isric.org/)
- **Description:** Provides soil data such as composition, pH levels, and fertility.

### Climate API

- **Provider:** [Tomorrow Climate API ](https://www.tomorrow.io/)
- **Description:** Retrieves climate data including temperature trends, rainfall patterns, etc.

### Search Plants API

- **Provider:** [Trefle](https://trefle.io/)
- **Description:** API used for searching and retrieving information about various plant species.

### Maps API

- **Provider:** [MapBox](https://www.mapbox.com/)
- **Description:** Provides mapping and geographical data services for location-based functionalities.

### Send Email API

- **Provider:** [Node Mailer](https://nodemailer.com/)
- **Description:** API used for sending transactional emails such as account notifications, password resets, etc.

### Note

Please refer to each provider's documentation (replace `#` with actual links) for detailed usage instructions, rate limits, and any additional terms of service.

<!-- USAGE EXAMPLES -->
## Usage :bulb:

### Authentication

Before using the API endpoints, you need to authenticate using JWT (JSON Web Token).

#### Register User

- **Endpoint:** `POST /GreenThumb/v1/users/signup`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    "username": "username",
    "firstname": "first_name",
    "lastname": "last_name",
    "email": "email@example.com",
    "password": "12345",
    "passwordconfirm": "12345"
    "role":"admin" // this is optional and the default is 'user'
  }
- **Response:**
  ```json
  {
    "status": "success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE4MjIxOTgxLCJleHAiOjE3MTgzMDgzODF9.agu0aehWqIMA_DGzvAbYGOXZEmG_k_N64hnwT_cUuLQ",
    "data": {
        "user": {
            "role": "user",
            "id": 1,
            "username": "username",
            "firstname": "first_name",
            "lastname": "last_name",
            "email": "email@example.com",
            "updatedAt": "2024-06-12T19:53:00.850Z",
            "createdAt": "2024-06-12T19:53:00.850Z",
            "passwordChangedAt": 1718221980086
        }
    }
  }


#### Login User

- **Endpoint:** `POST /GreenThumb/v1/users/login`
- **Description:** Login to an existing account.
- **Request Body:**
  ```json
  {
    "email": "email@example.com",
    "password": "12345"
  }
  
- **Response:**
  ```json
  {
    "status": "success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE4MjIyMTI4LCJleHAiOjE3MTgzMDg1Mjh9.hbaTwn2jufAvAV-V2OVjabjimdmXmFj2-0l2tv6Zg-c",
    "data": {
        "user": {
            "id": 1,
            "username": "username",
            "firstname": "first_name",
            "lastname": "last_name",
            "email": "email@example.com",
            "role": "user",
            "Event_ID": null,
            "createdAt": "2024-06-12T19:53:00.000Z",
            "updatedAt": "2024-06-12T19:53:00.000Z",
            "EventID": null
        }
    }
  }
  
## Resources
RESTFUL APIs are implemented to fetch and manipulate different resources. 

#### Gardens

- **Endpoint:** `POST /GreenThumb/v1/gardens/`
- **Description:** Create a new garden.
- **Request Body:**
   ```json
  {
    "Name":"AnNajah Garden",
    "Location":"nablus",
    "Plots":3,
    "Sunlight":true,
    "SoilType":"red",
    "WaterSource":"Rivers",
    "Latitude":"35.25444",
    "Longitude":"32.22111"
  }
- **Response:**

    
    ```json
  {
    "id": 1,
    "Name": "AnNajah Garden",
    "owner_id": 1,
    "Location": "nablus",
    "PlotsNumber": 3,
    "Sunlight": true,
    "SoilType": "red",
    "WaterSource": "Rivers",
    "Latitude": "35.25444",
    "Longitude": "32.22111",
    "updatedAt": "2024-06-12T20:01:21.060Z",
    "createdAt": "2024-06-12T20:01:21.060Z"
  }
        
For detailed documentation including all endpoints, request/response formats, authentication methods, and examples, please visit the [API Documentation](https://documenter.getpostman.com/view/33337253/2sA3XMkPe3?fbclid=IwZXh0bgNhZW0CMTAAAR3lR19blQIVYgKJI62HaUitbg4382XKthwo2K-gBSTqMQXD321zr9ABcI0_aem_AV3dYWkQrodehC34xgD5aBAod9m4g7fQRmO-j0C4IfGqfVLgSFDEYsKP5pDhVf2GaiBaPXpmCNtYnrJSGZL1pyzZ) page.


## GUI Design :desktop_computer:

### Welcome Page

![Welcome](public/img/welcome_page.png)

### Login Page

![Login Page](public/img/login_page.png)

### Signup Page

![Signup Page](public/img/signup_page.png)

### Gardens Page

![Gardens Page](public/img/gardens_page.png)

### Map Page

![Map Page](public/img/map_page.png)


### Note

These screenshots are indicative and may not represent the final design. For a more interactive experience, please visit the live application or demo environment.

<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)
