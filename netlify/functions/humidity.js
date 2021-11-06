"use strict";

const axios = require("axios").default;

exports.handler = async function (event, context) {
  const response = await axios.get(
    `https://api.mackerelio.com/api/v0/tsdb/latest?hostId=${process.env.HOST_ID}&name=custom.OfficeEnv.humidity`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
        "X-Api-Key": process.env.API_KEY,
      },
    }
  );
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
    },
    body: JSON.stringify(response.data),
  };
};
