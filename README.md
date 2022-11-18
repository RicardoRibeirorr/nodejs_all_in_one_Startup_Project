<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Node.js MVC - Startup Project</h3>

  <p align="center">
    User + Authentification + Posts
    <br />
    <br />
    <a href="#how-to-install">How To Install</a>
    ·
    <a href="#hot-to-use">How To Use</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
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
    <li>
      <a href="#getting-started">Making Your Own Stuff</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

I've came from a Laravel background, here everything is easy to do and to understand. But i've came to a point where i needed to create a backend Node.js server that includes user authentification and some other stuff, and i could never figure out how to get started, what framework to use and how it works!

If you're filling like me or just want to get started easy with you project, then you're in the right place.
With this startup-project, you have a ready-to-go project that includes users, authentification (login; register; token generation and management), and even posts to make you started on relationships and the systems architecture.

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more stuff in the "examples" folder in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue.

Thanks to all the people have contributed to expanding this template!

Use the `Node.js MVC - Startup Project` to get started.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [![Nodejs][https://nodejs.org/]][nodejs-url]
- [![Expressjs][https://expressjs.com/]][nodejs-url]
- [![Sequelize][https://sequelize.org/]][sequelize-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

Download the folder or git clone the project.

- Clone the repo

  ```sh
  git clone xxxxxxxxxxxxxxxx
  ```

- Update npm

  ```sh
  npm install npm@latest -g
  ```

- Download your local server, and make sure it works
  - Wampp
  - Xampp

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Install NPM packages
   ```sh
   npm install
   ```
2. Create a database on your local server (Xampp, Wammp, ...)

3. Rename your ".env_example" file in your project root folder to ".env", and fill the necessary configurations:

   ```conf
    # Application
    APP_KEY=                         #(Required) Visit: https://ricardoribeirorr.github.io/app_key_generator

    # Database
    DB_CONNECTION=mysql              #(Required) local server (xammp, wampp, ...)
    DB_HOST=localhost                #(Required) local server (xammp, wampp, ...)
    DB_PORT=3308                     #(Required) local server (xammp, wampp, ...)
    DB_DATABASE=my_database          #(Required) local server (xammp, wampp, ...)
    DB_USERNAME=admin                #(Required) local server (xammp, wampp, ...)
    DB_PASSWORD=admin                #(Required) local server (xammp, wampp, ...)
   ```

4. Seed your project (i.e. create initial data) you can add your own next to the existing ones in `app/database/seeders`

   ```sh
   npm run seed
   ```

   Wait until the operation is finished with success to see if the connection with your database it's ok.

5. Serve your application

   ```sh
   npm run start
   ```

6. Serve your application
   ```sh
   npm run start
   ```
7. Check aplication in your browser `http://localhost:8080`
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Wheres what you need to know about MVC and how to use this projects.
This area is divided in steps that you should perform in this order as best-practices.

1. Migrations `app/database/migrations`
   Migrations are your new database tables. There is no need for creating those time expensive tables on your local server, now what you can do, it's just with some easy lines of code, create your tables easy and deploy to the database even faster.(<a href="https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/">Check more in Sequelize docs</a>)

2. Models `app/models`
   Models are the face of your tables, it's where you define the relationships between tables and the functions they should perform in their own data like filters, conversions, and so on.(<a href="https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/">Check more in Sequelize docs</a>)

3. Seeds `app/database/seeders`
   Use seeds for when there is initial data that you want to add to your database whenever you refresh/clear it. This may include admin users, basic company information, roles, etc...
   Or you can use it to store testing data while you're working in development mode, and avoid creating the same user over and over again... just an example!(<a href="https://sequelize.org/docs/v6/core-concepts/model-instances/">Check more in Sequelize docs</a>)

4. Controllers `app/controllers`
   Controllers it's where you perform the logic of your requests using your models data. Meaning, if you make a request to you server to create a post, it's in your `post.controller.js` that all the logic will be created, and this includes verifying if your logged in, if you have permission to create a post, it's the length of data passed right, are the type of data right.(<a href="https://expressjs.com/en/guide/routing.html")

5. Routes `app/routes`
   Routes are the links of your application. There are a veryaty of methods you can use (GET;POST;DELETE;...) . This is where you call your controllers to create the data to retreave or use the data you're getting. (<a href="">Check more in ExpressJS docs</a>)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
  - [ ] Chinese
  - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Ricardo Ribeiro - [@RicardoRibeiro](https://www.linkedin.com/in/ricardo-ribeiro-5a788712b/)

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Pages](https://pages.github.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
