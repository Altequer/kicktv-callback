export default function handler(req, res) {
  const client_id = process.env.KICK_CLIENT_ID;
  const redirect = process.env.KICK_REDIRECT_URI;

  const url = `https://kick.com/oauth/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect}`;
  res.redirect(url);
}