import ListenForEvents from "./events.js";

const handlers = (boltApp) => {
  ListenForEvents(boltApp);
};

export default handlers;
