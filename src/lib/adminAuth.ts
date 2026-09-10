import crypto from "crypto";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

const DEFAULT_USERNAME = "admin";
const DEFAULT_PASSWORD = "ezennith@admin2026";
const COOKIE_NAME = "ez_admin_session";

function getSecretKey(): string {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "ezennith_secure_auth_key_2026_prod";
}

export function validateAdminCredentials(username: string, pass: string): boolean {
  const expectedUser = process.env.ADMIN_USERNAME || DEFAULT_USERNAME;
  const expectedPass = process.env.ADMIN_PASSWORD || DEFAULT_PASSWORD;

  return username.trim() === expectedUser.trim() && pass.trim() === expectedPass.trim();
}

/**
 * Creates an HMAC-SHA256 cryptographically signed session token.
 */
export function generateAdminSessionToken(username: string): string {
  const secret = getSecretKey();
  const timestamp = Date.now().toString();
  const signature = crypto
    .createHmac("sha256", secret)
    .update(`${username}:${timestamp}`)
    .digest("hex");

  return `${username}.${timestamp}.${signature}`;
}

/**
 * Validates session token from request cookies with HMAC-SHA256 signature verification.
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
    if (parts.length !== 3) return false;

    const [username, timestamp, signature] = parts;
    const expectedUser = process.env.ADMIN_USERNAME || DEFAULT_USERNAME;

    if (username !== expectedUser) return false;

    // Token expires after 7 days
    const tokenTime = parseInt(timestamp, 10);
    if (isNaN(tokenTime)) return false;

    const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days
    if (Date.now() - tokenTime > maxAge || Date.now() < tokenTime - 60000) {
      return false;
    }

    // Verify HMAC-SHA256 signature
    const secret = getSecretKey();
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(`${username}:${timestamp}`)
      .digest("hex");

    if (signature.length !== expectedSignature.length) {
      return false;
    }

    return crypto.timingSafeEqual(
      Buffer.from(signature, "utf-8"),
      Buffer.from(expectedSignature, "utf-8")
    );
  } catch {
    return false;
  }
}

export { COOKIE_NAME };
