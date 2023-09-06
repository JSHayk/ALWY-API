import airtable from "airtable";
import dotenv from "dotenv";
dotenv.config();

import { env } from 'process';

// AirTable Configuration.
const Airtable = airtable;
export const base = new Airtable({
  apiKey: env.AIRTABLE_API_KEY,
  endpointUrl: env.AIRTABLE_ENDPOINT_URL,
}).base(env.AIRTABLE_BASE_TOKEN);

export default Object.freeze({
  app: {
    port: env.PORT,
    sync_interval: Number(env.SYNC_INTERVAL),
    client_url: env.CLIENT_URL,
  },
  airtable: {
    api_key: env.AIRTABLE_API_KEY,
    base_token: env.AIRTABLE_BASE_TOKEN,
    products_token: env.AIRTABLE_PRODUCTS_TOKEN,
  },
  db: {
    uri: env.DB_URI,
  },
  token: {
    secret_access_token: env.SECRET_ACCESS_TOKEN,
    expires_time: env.SECRET_ACCESS_TOKEN_EXPIRES_AT,
  },
  storage: {
    max_age: env.STORAGE_MAX_AGE,
    httpOnly: true,
  },
});
