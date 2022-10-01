
<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="Images/logos.png" alt="Logo" width="200" height="200">
  </a>

  <h3 align="center">Share Steer</h3>
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
   git clone https://github.com/ameymj/Share-Steer-Ride-Sharing-App
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

3. Source sql file into your mysql
   ```sh
   source "location of project.sql file"
   ```
4. Change Credential in JavaConfig.java
   ```sh
   Goto -> Backend/src/java/study/projects/config/JavaConfig.java
   Change username,password,Url for database connectivity in getds method
   ```
5. Get User Profile 
   ```sh
   goto-> Backend/src/java/study/projects/controller/LoginController.java
   Change username,password,Url for database connectivity in getPhotoById method

   and also change filepath at line no. 178 in LoginController and give path of your directory of FrontEnd\\src\\pages\\Profile\\images\\user.jpg 
   ```
6. Compile  & run Java Project
7. Run Front end
   ```sh
     npm start
   ```
  


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

We would like to express our sincere thanks and gratitude to IET(Institute Of Emerging Technology Pune) for letting us work on this project. we are very grateful to all teachers for their support and guidance in completing this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
