const hostApi = process.env.NODE_ENV === "development" ? "http://b74dcef5.ngrok.io" : "https://sing-app-node.herokuapp.com";
const portApi = process.env.NODE_ENV === "development" ? "" : "";
const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}`;

export default {
  hostApi,
  portApi,
  baseURLApi
};