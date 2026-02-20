export default async function handler(req, res) {
  const code = req.query.code;

  const tokenRes = await fetch('https://kick.com/oauth/token', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      grant_type:'authorization_code',
      code,
      client_id:process.env.KICK_CLIENT_ID,
      client_secret:process.env.KICK_CLIENT_SECRET,
      redirect_uri:process.env.KICK_REDIRECT_URI
    })
  });

  const token = await tokenRes.json();

  res.setHeader('Set-Cookie', `token=${token.access_token}; Path=/; HttpOnly`);
  res.redirect('/');
}