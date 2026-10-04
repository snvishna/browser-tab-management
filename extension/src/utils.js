/**
 * Calculates the cosine similarity between two mathematical vectors.
 * @param {Float32Array|Array} vecA 
 * @param {Float32Array|Array} vecB 
 * @returns {number} Score between -1 and 1
 */
export function cosineSimilarity(vecA, vecB) {
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;
    for (let i = 0; i < vecA.length; i++) {
        dotProduct += vecA[i] * vecB[i];
        normA += vecA[i] * vecA[i];
        normB += vecB[i] * vecB[i];
    }
    if (normA === 0 || normB === 0) return 0;
    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

/**
 * Extracts the root domain from a URL string safely.
 */
export function extractDomain(urlString) {
    try {
        const url = new URL(urlString);
        return url.hostname.replace(/^www\./, '');
    } catch (e) {
        return '';
    }
}

/**
 * Checks if all space-separated words in a query exist within a target string.
 * This is used for intuitive, order-agnostic fuzzy searching.
 * @param {string} query The user's search string
 * @param {string} target The string to search inside (e.g. title + url)
 * @returns {boolean}
 */
export function fuzzyMatch(query, target) {
    if (!query) return true;
    if (!target) return false;
    
    const terms = query.toLowerCase().trim().split(/\s+/).filter(t => t.length > 0);
    const searchTarget = target.toLowerCase();
    
    return terms.every(term => searchTarget.includes(term));
}
