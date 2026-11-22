/** Default outbound timeout so hung upstreams cannot wedge the Next.js process. */
export const DEFAULT_FETCH_TIMEOUT_MS = 12_000;

export function timeoutSignal(
  ms = DEFAULT_FETCH_TIMEOUT_MS,
): AbortSignal {
  return AbortSignal.timeout(ms);
}
