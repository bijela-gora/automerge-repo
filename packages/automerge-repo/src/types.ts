/**
 * A branded string representing a URL for a document
 *
 * @remarks
 * An automerge URL has the form `automerge:<base58check encoded string>`; for example,
 * `automerge:4NMNnkMhL8jXrdJ9jamS58PAVdXu`
 *
 */
export type AutomergeUrl = string & { __documentUrl: true } // for opening / linking

/**
 * The base58check-encoded UUID of a document. This is the string following the `automerge:` protocol
 * prefix in an AutomergeUrl. Typically you should use a {@link AutomergeUrl} instead.
 */
export type DocumentId = string & { __documentId: true } // for logging

/**
 * The unencoded UUID of a document. Typically you should use a {@link AutomergeUrl} instead.
 */
export type BinaryDocumentId = Uint8Array & { __binaryDocumentId: true } // for storing / syncing

/** A branded type for peer IDs */
export type PeerId = string & { __peerId: true }

/** A randomly generated string created when the {@link Repo} starts up */
export type SessionId = string & { __SessionId: true }
