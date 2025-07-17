const events = (boltApp) => {
  boltApp.event('message', async ({event, client}) => {
    await client.chat.postMessage('New Message... Processing');
    });
};

export default events;