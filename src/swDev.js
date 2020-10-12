export const swDev = () => {
  let swURL = `${process.env.PUBLIC_URL}/service-worker.js`;
  navigator.serviceWorker.register(swURL).then((res) => {
    console.log("response", res);
  });
};
