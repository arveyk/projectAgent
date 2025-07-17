const events = (boltApp) => {
  boltApp.event('message', async ({event, client}) => {
    try{ 
      const result = await client.chat.postMessage(`Hello <@${event}>New Message... Processing`);
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  });
};

export default events;
