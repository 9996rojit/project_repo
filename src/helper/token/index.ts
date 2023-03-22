import jwt from 'jsonwebtoken';

interface IUSERDATA {
  id: string | undefined;
  email: string | undefined
}

function GenerateToken(data: IUSERDATA, secret: string, expTime: number): string {
  return jwt.sign(data, secret, { expiresIn: expTime })
}


function generateRefreshToken(data: IUSERDATA): string {
  return GenerateToken(data, process.env.SECRET_REFRESH_KEY as string, 1000 * 60 * 60)
}

function generateAccessToken(data: IUSERDATA): string {
  return GenerateToken(data, process.env.SECRET_ACCESS_KEY as string, 24 * 1000 * 60 * 60)
}



export default {
  generateRefreshToken,
  generateAccessToken

}