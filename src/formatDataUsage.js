/**
 * Render a data amount for the subscriber's usage screen.
 */
function formatDataUsage(mb) {
  if (mb >= 1024) {
    return `${(mb / 1024).toFixed(1)} GB`;
  }
  return `${mb} MB`;
}

module.exports = { formatDataUsage };
