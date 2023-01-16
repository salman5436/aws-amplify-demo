import { Amplify, API, graphqlOperation }from 'aws-amplify';
import awsExports from './aws-exports';


import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import React, { useState, useEffect } from 'react';
import { listSongs } from './graphql/queries';


Amplify.configure(awsExports);




function App( { isPassedToWithAutenticator, signOut, user }) {
  
  const [songs, setSongs ] = useState([])


  if (!isPassedToWithAutenticator) {
    throw new Error(`isPassedToWithAuthenticator was not provided`)
  }


  const fetchSongs = async () => {
    try {
        const songData = await API.graphql(graphqlOperation(listSongs));
        const songList = songData.data.listSongs.items;
        console.log('song list', songList);
        setSongs(songList)
    } catch (error) {
        console.log('error on fetching songs', error);
    }
  }
  
  //Now we want this function to be called once when the component renders,
  // but not every time that it re-renders. 
  //To do this we use useEffect but make sure to add a second parameter of [] so that it only gets triggered once.
  
  useEffect(() => {
    fetchSongs()
  }, []);




  return (
    <header className="App-header">
      <h1>Hello {user.username}</h1>
      <h2>My App Content</h2>
      <button onClick={signOut}>Sign Out</button>
    </header>
  );
}

export default withAuthenticator(App);


export async function getStaticProps() {
  return {
    props: {
      isPassedToWithAutenticator: true,
    }
  }
}
