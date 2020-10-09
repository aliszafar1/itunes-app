This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Details
1. This project is displaying the albums based on letters containing in the search field, in the response of iTunes API.
2. In the home screen it will show you on the top right side two navigation options.
    - Navigation is created using React-Router Library.
3. In the Home screen it will display all the albums based on search, & user can click on star icon to add & remove an album in to the favourite list. (Using Toggling effect of Empty & Red Color Star).
4. If user add an item into favourite, it could also see all the those items into Favourite Route (/favourite-albums).
5. Suppose if user remove any album from favourite list from any screen, it would reflect out in both screen.
6. A shared header based search bar is used by which user can get albums from API response in Home Route as well as it can filter out albums based on Aritsts Name (Fullname should be entred).
7. If API response gets error so it would also be shown. (User can create mock error by entering "wrong" keyword in the end of url to file ./src/services/getArtistAlbums)
8. Two types of directories are created for React Component, one is container which communicates with Redux & has implemented logic code base. Other are situated in common folder which only show results based on its input, these are reusable. e.g. Album Details, Favourite Icon
9. If API does not respond in a "n" amount of time it can retry for "m" amount of time. Those configuration could be change in ./src/config/AppConfig. That would reflect inside ./src/store/artist/album/epic.
10. For styling flex-box approach is used.