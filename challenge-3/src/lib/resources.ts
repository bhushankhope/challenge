/**
 * Functions and tools that we've provided to you to help you
 * with the challenge.
 */

import { sleep } from "crawlee";

/**
 * A mock function to "check" if the given domain is available for purchase.
 * The answers here are just dummy values -- we're not actually checking
 * if the domain can be bought -- but treat it as if they are correct for
 * the purposes of this challenge.
 * Please don't modify this function.
 * @param domain Some domain name, like "example.com". Don't include any
 *  "www", "http", subdomains, etc.
 * @returns `true` iff the domain is "available" for purchase. Note that this
 *  function uses a mock API call; treat its answers as correct for the
 *  purposes of this challenge.
 */
export async function isDomainAvailable(domain: string): Promise<boolean> {
  // NOTE: in a real setting we'd call some domain availability API,
  // but for this challenge we'll do some mock logic to simulate an API call.
  await sleep(1000);
  return domain.toLowerCase().charCodeAt(0) % 2 === 0;
}
