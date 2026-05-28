export default async function handler(req, res) {
  const { size } = req.query;
  const response = await fetch(`http://futuramaapi.com/api/characters/?size=${size}`);
  if (!response.ok) {
    return res.status(response.status).json({ error: 'Failed to fetch characters' });
  }
  const data = await response.json();
  res.json(data);
}
