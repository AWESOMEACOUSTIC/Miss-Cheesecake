export function logInfo(message, meta = {}) {
  console.log('[INFO]', message, Object.keys(meta).length ? meta : '');
}

export function logError(message, meta = {}) {
  console.error('[ERROR]', message, Object.keys(meta).length ? meta : '');
}
