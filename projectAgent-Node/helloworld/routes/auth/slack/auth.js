import { json, Router } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import axios from "axios";

const authRouter = Router();

/**
 * Redirects the user to Slack's OAuth page
 * @param {*} request
 * @param {*} response
 */
const slackAuth = function (request, response) {
  const scopes = "channels:read";
  res.redirect(
    `https://slack.com/oauth/v2/authorize?client_id=${
      process.env.SLACK_CLIENT_ID
    }&user_scope=${encodeURIComponent(
      scopes,
    )}&redirect_uri=${encodeURIComponent(process.env.SLACK_REDIRECT_URI)}`,
  );
};

/**
 * Attempts to exchange temporary auth code for Slack access token
 * @param {*} request
 * @param {*} response
 */
const slackAuthCallback = async function (request, response) {
  const { code } = request.query;
  try {
    const tokenResponse = await axios.post(
      "https://slack.com/api/oauth.v2.access",
      null,
      {
        params: {
          code,
          client_id: process.env.SLACK_CLIENT_ID,
          client_secret: process.env.SLACK_CLIENT_SECRET,
          redirect_uri: process.env.SLACK_REDIRECT_URI,
        },
      },
    );

    if (tokenResponse.data.ok) {
      // Save the tokens in session or a secure place
      const accessToken = tokenResponse.data.authed_user.access_token;
      request.session.slack_access_token = accessToken;
      request.session.slack_user_id = tokenResponse.data.authed_user_id;

      // Fetch user's channels
      const channelsResponse = await axios.get(
        "https://slack.com/api/conversations.list",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      );

      if (channelsResponse.data.ok) {
        const channels = channelsResponse.data.channels
          .map((channel) => channel.name)
          .join(", ");
        res.send(
          `Authorization successful! Here are your channels: ${channels}`,
        );
      } else {
        res
          .status(500)
          .send("Error fetching channels: " + channelsResponse.data.error);
      }
    } else {
      res
        .status(500)
        .send("Error authorizing with Slack: " + tokenResponse.data.error);
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(
        "Server error when exchanging code for token or fetching channels.",
      );
  }
};

authRouter.get("/auth/slack", slackAuth(request, response));
authRouter.get("/auth/slack/callback", slackAuthCallback(request, response));

export default authRouter;
