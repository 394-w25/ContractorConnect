<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

# Homie 

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <img src="src/lib/logo.png" width="150" height="150">

  <p align="center">
    <a href="https://contractorconnect-nu.web.app/">View Demo</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

We present you Homie. Homie connects homeowners to contractors by letting homeowners submit information about their project and see bids from contractors.

Homie starts off with a login screen, which transitions into a page where homeowners can enter info about their project. After submitting the request, they can see bids from contractors, as well as some details about each contractor such as their rating. They are also able to see the bids in a pdf format. After a homeowner selects a contractor for their project, the project becomes active. Homeowners are able to cancel a project if they’d like.



[![Product Name Screen Shot][product-screenshot]]()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![Firebase]][Firebase-url]
- [![TailwindCSS]][Tailwind-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

- **Node.js**
- **npm**
- **Firebase CLI:**
  - Install globally using:
    ```sh
    npm install -g firebase-tools
    ```

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your Firebase configuration information in `firebase.js`
   ```js
   const firebaseConfig = {
     apiKey: "ENTER YOUR API KEY",
     authDomain: "ENTER YOUR DOMAIN",
     projectId: "ENTER YOUR PROJECT ID",
     storageBucket: "ENTER YOUR STORAGE BUCKET",
     messagingSenderId: "ENTER YOUR MESSAGING SENDER ID",
     appId: "ENTER YOUR MAP ID",
     measurementId: "ENTER YOUR MEASUREMENT ID",
   };
   ```
4. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage
To start up a local version of the project, run 
```sh
npm start 
```

To use Homie, first sign in using Google in order to see past and active requests on the left hand column or submit a new project request using the new project submission form. To create a new project request, just fill in the relevant project details, upload an optional project photo, and press submit.

To see past details on any past requests or active projects, simply click on each project. If the project is not yet active, view potential Contractor Bids under the project details, and select “Find Someone” to choose a particular contractor. More information about each contractor’s bid can be found when selecting “See Full Bid” which opens a PDF with a detailed breakdown of each bid.

Once a contractor has been selected for each project, they will show in the left column under “Contractors” and you may cancel your selection in the project details page if you change your mind.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

### Contributors:

<a href="https://github.com/394-w25/ContractorConnect/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=394-w25/ContractorConnect" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

We would like to thank and acknowledgment Professor Chris Riesbeck and our product managers!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: src/lib/app-screen.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Firebase]: https://img.shields.io/badge/firebase-DD2C00?style=for-the-badge&logo=firebase&logoColor=white
[Firebase-url]: https://firebase.google.com
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC
[Tailwind-url]: https://tailwindcss.com/
