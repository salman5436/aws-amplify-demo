// import React, { useState, useEffect } from 'react';
// import { listSongs } from './graphql/queries';
// import Amplify, { API, graphqlOperation } from 'aws-amplify';

// const [songs, setSongs ] = useState([])

// const fetchSongs = async () => {
//     try {
//         const songData = await API.graphql(graphqlOperation(listSongs));
//         const songList = songData.data.listSongs.items;
//         console.log('song list', songList);
//         setSongs(songList)
//     } catch (error) {
//         console.log('error on fetching songs', error);
//     }
// }

// //Now we want this function to be called once when the component renders,
// // but not every time that it re-renders. 
// //To do this we use useEffect but make sure to add a second parameter of [] so that it only gets triggered once.

// useEffect(() => {
//     fetchSongs()
// }, []);