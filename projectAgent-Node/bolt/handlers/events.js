const ListenForEvents = (boltApp) => {
  boltApp.event('message', async ({event, client, logger}) => {
    try{
      logger.info("event info", event);
      const result = await client.chat.postMessage({
        channel: event.channel,
	text: `Hello <@${event.user}>New Message... Processing`,
      });
      logger.info("Event result from Logger", result);
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  });
};

export default ListenForEvents;
