const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const url = "https://iconhazdadjoke.com/";
  try {
    const jokeStream = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });
    const jsonJoke = await jokeStream.json();
    return {
      statusCode: 200,
      body: JSON.stringify(jsonJoke),
    };
  } catch (err) {
    return { statusCode: 402, body: err.stack };
  }
};
