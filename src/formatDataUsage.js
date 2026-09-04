/**
 * Render a data amount for the subscriber's usage screen.
 */
function formatDataUsage(mb) {
  // "20480 MB" is unreadable on the usage screen; switch to GB past 1 GB.
  if (mb >= 1024) {
    return `${(mb / 1024).toFixed(1)} GB`;
  }
  return `${mb} MB`;
}

module.exports = { formatDataUsage };
