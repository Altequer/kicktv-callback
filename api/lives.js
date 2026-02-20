export default async function handler(req, res) {
  const r = await fetch('https://kick.com/api/v2/livestreams');
  const j = await r.json();
  res.json({ data: j.data });
}