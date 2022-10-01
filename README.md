
<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="Images/logos.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Share Steer</h3>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
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
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
Share-Steer is the online marketplace for carpooling. 
Its website connects drivers and passengers willing to travel together between cities and shares the cost of the journey. 
In This Application A dashboard will present for passengers Who want to travel as well as drivers who are fond of a companion to travel with them. 
Authentication of all users is based on the verification with the system at the time of registration. 
Passengers will be able to book their rides from a portal updated by drivers and maintained by the system, Rides listing will be provided based on their category, fare, distance, and vehicle types, they can cancel the booking before the commencement of the journey, they can get booking history, the rating system is also available for the particular driver they have travelled with. 
The driver will be able to add new rides to the ride log, update ride details which have been already posted, able to approve or reject a request for booking rides from the catalogue by passengers, and get previous ride history also.
A Real-Time Route Tracking system is provided for both users.  
Any anonymous User will be able to view different Rides available for booking. Any User will be able to select rides available based on categories and can promote further after registration only. 
To facilitate, perfect ride users are available with feedback and a rating system which will ultimately aim to choose a perfect companion for the journey.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

Software required to run our project are listed below:

1. JDK 1.8.0_311

2. Node v16.16.0

3. mysql 8.0.29

### Installation

_To deploy Application follow the below instruction_

1. Clone the repository
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

3. Source sql file into your mysql
   ```sh
   source "location of project.sql file"
   ```
3. Change Credential in JavaConfig.java
   ```sh
   Goto -> Backend/src/java/study/projects/config/JavaConfig.java
   Change username,password,Url for database connectivity in getds method
   ```
4. Get User Profile 
   ```sh
   goto-> Backend/src/java/study/projects/controller/LoginController.java
   Change username,password,Url for database connectivity in getPhotoById method

   and also change filepath at line no. 178 in LoginController and give path of your directory of FrontEnd\\src\\pages\\Profile\\images\\user.jpg 
   ```
5.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Our Project is helpful to having featurs like post ride,search ride,book ride and travel with your booked vehicle.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Tushar Sthul (tusharsthul121@gmail.com)

Amey Joshi ()

Mahesh Shinde ()

Naman Saxena ()

Swapnil Kalange ()

Prajakta Mutyalwar ()

Project Link: [https://github.com/ameymj/Share-Steer-Ride-Sharing-App](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/ameymj/Share-Steer-Ride-Sharing-App/graphs/contributors
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
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white


[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com  -->