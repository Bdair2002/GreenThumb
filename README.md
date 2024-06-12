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
## About The Project
<strong>GreenThumb</strong> is a collaborative project for the Advanced Software Engineering course at Spring 2024, led by Dr. Amjad AbuHassan. Our mission is to empower urban gardening and promote sustainable living through a robust backend API platform. The project is designed to facilitate community-driven food production, knowledge sharing, and resource optimization among urban gardeners and enthusiasts.

## Core Features

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
### Built With

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


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

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
    npm start
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


<!-- USAGE EXAMPLES -->
## Usage


_For more examples, please refer to the [Documentation](https://example.com)_



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
]
