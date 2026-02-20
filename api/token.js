export default async function handler(req, res) {
  const { code } = req.query;

  const response = await fetch("https://kick.com/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code,
      grant_type: "authorization_code",
      redirect_uri: "https://altequer.github.io/kicktv-callback"
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}
