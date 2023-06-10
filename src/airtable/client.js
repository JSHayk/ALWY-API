import airtable from "../lib/airtable.js";
import invalidArguments from "../helpers/invalidArguments.js";

export default {
  async getTableByName(token) {
    invalidArguments([token]);
    try {
      const table = airtable.getTableByToken(token);
      if (table) {
        return await table.select().firstPage();
      }
    } catch (err) {
      console.error(err);
    }
  },
};
