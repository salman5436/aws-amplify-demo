import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';


import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);

function App( { isPassedToWithAutenticator, signOut, user }) {
  if (!isPassedToWithAutenticator) {
    throw new Error(`isPassedToWithAuthenticator was not provided`)
  }

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