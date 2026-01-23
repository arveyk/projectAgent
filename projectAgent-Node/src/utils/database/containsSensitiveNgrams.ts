import { PageObjectResponse } from "@notionhq/client";
import { SENSITIVE_NGRAMS } from "../../env";

/**
 * Checks if a page contains any sensitive n-grams (words or sequences of words)
 * - The check is case-insensitive and ignores whitespace
 * @param page The page to check.
 * @param ngrams The n-grams to check for. Defaults to the SENSITIVE_NGRAMS from the environment.
 * @returns True if the page contains any sensitive n-grams, false otherwise.
 */
export function containsSensitiveNgrams(page: PageObjectResponse, ngrams: string[] = SENSITIVE_NGRAMS): boolean {
  const pageNormalized = normalizeForComparison(JSON.stringify(page));
  return ngrams.some((ngram) => (
    pageNormalized.includes(normalizeForComparison(ngram))
  ));
}

/**
 * Normalizes a string for comparison by converting it to lowercase, removing all whitespace.
 * @param str The string to normalize.
 * @returns The normalized string.
 */
export function normalizeForComparison(str: string): string {
  return str.toLowerCase().replace(/\s+/g, "");
}