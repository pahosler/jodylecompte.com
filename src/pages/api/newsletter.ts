require('dotenv').config();

import axios from 'axios';

const subscriberRoute = 'https://connect.mailerlite.com/api/subscribers';

export default async function handler(req, res) {
  try {
    const email = req.body?.email;

    if (!email) {
      throw new Error('Email is required field');
    }

    const result = await axios.post(
      subscriberRoute,
      { email },
      {
        headers: {
          Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
          'content-type': 'text/json',
        },
      }
    );

    if (result.status === 200 || result.status === 201) {
      res.status(200).json({ success: true });
    } else {
      throw new Error('An unknown error occured');
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
}
