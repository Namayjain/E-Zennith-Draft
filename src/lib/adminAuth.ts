import { cookies } from "next/headers";
import { NextRequest } from "next/server";

const DEFAULT_USERNAME = "admin";
const DEFAULT_PASSWORD = "ezennith@admin2026";
const COOKIE_NAME = "ez_admin_session";

function getSecretKey(): string {
  return process.env.ADMIN_SESSION_SECRET || "ezennith_fallback_secret_key_2026";
}

export function validateAdminCredentials(username: string, pass: string): boolean {
  const expectedUser = process.env.ADMIN_USERNAME || DEFAULT_USERNAME;
  const expectedPass = process.env.ADMIN_PASSWORD || DEFAULT_PASSWORD;

  return username.trim() === expectedUser.trim() && pass.trim() === expectedPass.trim();
}

/**
 * Creates a deterministic token payload based on username, secret, and timestamp.
 */
export function generateAdminSessionToken(username: string): string {
  const secret = getSecretKey();
  const timestamp = Date.now().toString();
  const raw = `${username}:${timestamp}:${secret}`;
  
  // Base64 encode the combined payload
  if (typeof Buffer !== "undefined") {
    const encoded = Buffer.from(raw).toString("base64url");
    return `${username}.${timestamp}.${encoded.substring(0, 32)}`;
  }
  return `${username}.${timestamp}.auth_valid`;
}

/**
 * Validates session token from request cookies.
 */
export async function isAuthenticatedAdmin(req?: NextRequest): Promise<boolean> {
  try {
    let token = "";
    if (req) {
      token = req.cookies.get(COOKIE_NAME)?.value || "";
    } else {
      const cookieStore = await cookies();
      token = cookieStore.get(COOKIE_NAME)?.value || "";
    }

    if (!token) return false;

    const parts = token.split(".");
    if (parts.length < 3) return false;

    const [username, timestamp] = parts;
    const expectedUser = process.env.ADMIN_USERNAME || DEFAULT_USERNAME;

    if (username !== expectedUser) return false;

    // Token expires after 7 days
    const tokenTime = parseInt(timestamp, 10);
    if (isNaN(tokenTime)) return false;

    const maxAge = 7 * 24 * 60 * 60 * 1000;
    if (Date.now() - tokenTime > maxAge) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

export { COOKIE_NAME };
