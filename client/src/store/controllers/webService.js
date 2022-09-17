const axios = require("axios");

async function launchGet(url) {
  return axios.get(url);
}

export async function launchRequest(url, data = null) {
  try {
    var response = data ? await launchGet(url, data) : await launchGet(url);

    return response;
  } catch (e) {
    throw e;
  }
}
