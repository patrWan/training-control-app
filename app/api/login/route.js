import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

export async function GET(request) {
  return Response.json({hola : 'hola'})
}

export async function POST(request) {

  const {username, password} = await request.json();

  console.log(username);

  const stmt = getRequestContext().DB.prepare('SELECT * FROM Users WHERE UserName = ? AND UserPassword = ?').bind(username, password);

  const {results} = await stmt.all();

  return Response.json(results);
}
