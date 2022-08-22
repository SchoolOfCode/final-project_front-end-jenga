import Axios from "axios";

//Generate the userID
export function getUserId(user) {
  //console.log(user);
  return user.split("|")[1];
}

//Get everything from the database
export async function getLocation() {
  console.log("Inside Axios");
  Axios.get(
    "https://pacific-journey-78384.herokuapp.com/https://8a50g75era.execute-api.eu-west-2.amazonaws.com/prod/location"
  ).then((response) => {
    console.log(response.data.payload);
    console.log(response.data);
  });
}

//Get everything from the database by user
export function getLocationByUser(user) {
  const userId = getUserId(user.sub);
  //console.log(userId);
  return Axios.get(
    `https://8a50g75era.execute-api.eu-west-2.amazonaws.com/prod/location/${userId}`
  );
}

//Delete a fav place by locationId
export async function deleteLocation(locationId) {
  Axios.delete(
    `https://8a50g75era.execute-api.eu-west-2.amazonaws.com/prod/location/${locationId}`
  ).then((response) => {
    console.log(response);
  });
}

//Post request to save the searched location
export async function putLocationByUser(user, coords, searchTerm, imageUrl) {
  const userId = getUserId(user.sub);
  Axios.post(
    "https://8a50g75era.execute-api.eu-west-2.amazonaws.com/prod/location/",
    {
      userId: userId,
      locationId: Date.now().toString(),
      latitude: coords.lat,
      longitude: coords.lng,
      locationName: searchTerm,
      locationImage: imageUrl,
    }
  ).then((response) => {
    console.log(response);
  });
}
