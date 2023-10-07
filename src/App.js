import { useOnlineStatus } from './useOnlineStatus.js';


function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h2> {isOnline ? '✅ Online' : '❌ Disconnected'} </h2>
}

function SaveButton() {
  const isOnline = useOnlineStatus();
   
  function handleSaveClick() {
    console.log('✅ Progress saved.');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}


export default function App() {
  return (
    <>
      <SaveButton></SaveButton>
      <StatusBar></StatusBar>
    
    </>
  )
}





