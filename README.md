# Diego Escobar's Senior Project - Goggle Drove, A Google Drive Clone

## Some Background

This is my senior project that I presented 5/14/22 at ECHS's Senior Project Display Day.

I came up with the idea of creating this project 2 months ago from Display Day. Because I was working with web development at the time, I was thinking, "Hey, why not create a website from scratch."
I knew I wanted to work with a storage system so I made that the core of my idea and began looking for a starting place.

I first started following a YouTube tutorial by Sonny Sangha to create a SnapChat clone. And from here, I learned how to use many of the components I use in my project: React and creating Hooks and Components, React Router, Materials UI. I also experimented with Google's Firebase API and learned how to upload things to their cloud storage.

However, I knew I wanted to have my project locally hosted to save the files on a local storage system which I could upgrade in the future, so I then started to relearn Express to host the storage server and looked into Axios to serve files to React, the webpage.

## The Different Parts of the Project

### React

I first use React to create the several components of the webpage:
- Main Components
  - Header
    - This is the component responsible for the Header, obviously. It contains the logo and the credit box that is located at the top of the page. It also includes the menu button to open a modified Sidebar when you open this on a mobile device.
  - Sidebar
    - This is the Sidebar component. It holds the FileUpload component and the different tabs to navigate between your Drove and the Features tab, just to show React Router actually working. Also, the tabs are highlighted differently depending on what page you are on. When you open the website on a mobile device, this Sidebar is hidden as to make space to show more files and the Menu button is shown instead.
- File-related Components
  - FileIcons
    - This is the component responsible for creating icons for each file on the storage server and displaying them on the webpage. It first requests the file using Axios to Express via /files, then it takes the list of files from it and creates an icon for each index in the array.
  - FilePreview
    - This is the component that shows the file that you clicked on as an overlay. It has a back button that has a function which closes the overlay, a download button, and when you click on the backdrop, it also has a function that closes the overlay.
  - FileUpload
    - This is the component that upload files to the storage server. It first takes the file and appends it into form data, then it POST that data to /upload, which is then received by Express. Finally, the page is reloaded after React gets a good response and the changes are then shown to the user.
- Tabs
  - Features
  * There are also tabs in the sidebar that go to different pages, demonstrating React Router's ability to route to different pages on the website such as "website.com/home" and "website.com/features".

### Express

Upload functionality is used with the POST request sent by Axios to '/upload' which is then received by Express, which then writes the file to the storage.
Download functionality is used with the GET request sent by Axios to '/files:fileName', :fileName being a variable which has the file name, which is then received by Express, which then takes the file name, retrieves the file, and send the requested file (res.send(requestedFile)) back to React, which is then downloaded by the user's device.

### Axios

I used Axios to serve the files to React in order to display the icons for each file in the storage server as well as allow users to see the file by double clicking on the icons.

### Styling

**MUI** is used for the file icons and React determines which icon to use depending on the file extension of the file, getting the name from Express.
I also implemented **responsive CSS** last minute because I realized most people aren't going to be carrying their chromebooks around looking at the displays, and it's more convenient for those to take out their phone instead and try it out.
What I did was first decided on a specific width, in this case 600px, to determine when the webpage should change to a mobile layout.
Next, I added a menu button that would be used to open the sidebar on mobile devices
Then I added CSS to hide the menu icon when the screen is larger than 600px, but then show it when less than 600px, allowing users to use the menu button and the sidebar
(talk about min max width used to determine if sidebar appears or not, depending on their device)

## Some Issues Along the Way and My Final Project

Man, I wish I connected my project to github a long time ago, but I had difficulties adding the node_modules folder to .gitignore because they would take forever to upload to Github, but it kinda sucks I wasn't able to track my progress and see a history of commits over time... eh oh well.

I stayed up the night before until 3am finishing it up so that it can be used by other people.
I also had trouble with networking and other devices connecting to it on different networks, so I brought a whole router from my home so that others can connect to the webpage.
However, I then realized that my internet firewall configuration was set to 'Public', meaning that it was blocking others on the same network from connecting to my laptop... So, I got on the Public wifi, got that issue fixed, and finally got people to view the webpage on their phones via the school wifi.

I also spent wayyyy more time than I should've trying to make the webpage look as close to Google Drive as possible, with flexboxes and grid layouts and divs and css and classNames literally everything CSS-related going wrong 80% of the time, but I got there in the end and I'm super glad at how it turned out.

But all said and done, this is my project and I'm so proud of what I've learned and created, and hope I inspired at least one person to pursue a passion into technology.

This is my project, a Local Network Storage System, a clone of Google Drive I call, Goggle Drove.

# Installation

Prerequisite
- This project assumes you already have NodeJS installed on you computer
- If not, you can download it [here](https://nodejs.org/en/download/)

1. Clone this repo into your project folder
   - There should now be two folders in that folder called "client" and "server"
   ![image](https://user-images.githubusercontent.com/97565066/168460418-d38eac43-e58a-4aed-9402-3488eeef6041.png)
     - ignore the other files, those are for connecting it to my github account :P
2. Install NodeJS in both folders
   - Open Terminal in each folder and use the following command: "npm init -y"
   ![image](https://user-images.githubusercontent.com/97565066/168670495-877064f6-3b50-4061-aeec-97468b5a80aa.png)
3. Install Packages in both folders
   - Open Terminal in "/client" and install the following packages using the command: "npm i (package name)"
   - Alternatively, you can use: "npm i react react-redux react-router-dom axios @mui/material @mui/icons-material @emotion/styled @emotion/react", to install all the packages in one command
     - react
     - react-dom
     - react-redux
     - react-router-dom
     - react-scripts
     - axios
     - @mui/material
     - @mui/icons-material
     - @emotion/styled
     - @emotion/react
   - Open Terminal in "/server" and install the following packages using the command: "npm i (package name)"
   - Alternatively, you can use: "npm i express express-fileupload", to install all the packages in one command
     - express
     - express-fileupload
   ![image](https://user-images.githubusercontent.com/97565066/168735003-04abe178-f46f-4858-aa1f-f9ca64a073d9.png)
4. Start up the server and the client
   - With the open Terminal in "/server", use the command: "npm start"
     - I recommend starting the server first so you don't get an error with the client trying to retrieve information from an offline server
   - With the open Terminal in "/client", use the command: "npm start"
   ![image](https://user-images.githubusercontent.com/97565066/168735067-d2d9c14a-c3bb-4480-974d-0d18e19b24ff.png)
5. Navigate to the webpage
   -  In the open Terminal in "/client", you should see an IP address in the output  
   ![image](https://user-images.githubusercontent.com/97565066/168457781-196f272d-c839-4578-82b7-63f5d0ab0bda.png)
   - Copy that address and paste it into a web browser
  
From there, you should be taken to the homepage of the project!
![image](https://user-images.githubusercontent.com/97565066/168460233-d21195fc-116b-41ae-bc6d-059fb71450d6.png)

# Final Words
  
I'm making this repo public because I want you to see how many different components come together to create this project. And I also want you to experiment with it for yourself, changing elements and making it your own.
  
But ye, hope you enjoy my project and happy coding!
