import airtable from "airtable";
import dotenv from "dotenv";
dotenv.config();

// AirTable Configuration.
const Airtable = airtable;
export const base = new Airtable({
  apiKey: "keyX6f8eUD5mMz9Ip",
  endpointUrl: "https://api.airtable.com",
}).base("appJ3eiFlMjCUBqOz");

export default Object.freeze({
  app: {
    port: 4000,
    sync_interval: 3000,
    client_url: "http://localhost:3000",
  },
  airtable: {
    api_key: "keyX6f8eUD5mMz9Ip",
    base_token: "appJ3eiFlMjCUBqOz",
    products_token: "tblVWCPhemJmHqbwy",
  },
  db: {
    uri: "mongodb+srv://user:user@alwy.uderihq.mongodb.net/data?retryWrites=true&w=majority",
  },
  token: {
    secret_access_token:
      "6ed9f14546d1955b6f050748c8125a3f8721787337050099c8c661def5841670f1503ccf39f35467fa97195e4561a88b180e9ca4b1502e2856fb74702d07b9dc",
    expires_time: "1h",
  },
  storage: {
    max_age: 30 * 24 * 30 * 30 * 1000,
    httpOnly: true,
  },
});
