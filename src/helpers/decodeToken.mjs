import { jwtDecode, InvalidTokenError } from 'jwt-decode';

// Preserve jsonwebtoken.decode's null result for malformed input.
export default function decodeToken(token) {
  // Match the JWS structure/header checks used by jsonwebtoken.decode.
  if (typeof token !== 'string' || !/^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]*$/.test(token)) {
    return null;
  }
  try {
    if (!jwtDecode(token, { header: true })) {
      return null;
    }
    return jwtDecode(token);
  } catch (error) {
    if (error instanceof InvalidTokenError) {
      return null;
    }
    throw error;
  }
}
