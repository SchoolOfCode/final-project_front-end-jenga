
/*
- Some kind of navbar at the top (not fully decided on what it looks like).
- We dont need to worry about it yet, just need to know it will be there.

- Worth looking at useContext for the searchTerm prop !!!!!!!!!!!

- Top half is an image.
    - On top of that image will be the text of the location and a save button.
    - Within the same div store the text and the button.
    - For the image we need to call the Unsplash api.
        - To do this we need to get an access key an store it in a .env variable. We also need to take in a prop that will represent the 'searchTerm' that a user has put into the search box on the landing page.
        - The request URL will follow this structure: "https://api.unsplash.com/search/photos?query=<SEARCH TERM GOES HERE>&orientation=landscape&client_id=<ACCESS KEY GOES HERE>"

- Bottom half of the page is the map and the summary information for the 'searchTerm'
    - On this page we can create a div for the bottom half of the page that will store the two components for the information and for the map. This will allow us to use flexbox and organise the position easier.
    - We get the map information from the google api and again use the searchTerm prop to call it. 
    - To do this we will render a <GoogleMap /> Component and pass down the searched prop like so <GoogleMap searchTerm={searchTerm} /> (won't be necessary if using useContext). We will then need to style the google map component to make go to the bottom right of the page.
    - We will also render a <LocationSummary /> component that can call the government api using the searchTerm (again useContext?) and display the returned summary.
    
- The return structure from this file will look something like this:

<div make this flex - align items column>
    <div top of page>
    Image, Location name and save button
    </div>
    
    <div bottom of the page. flex box justifyContent: space between>
    <GoogleMap />
    <LocationSummary />
    </div>
</div>

*/
