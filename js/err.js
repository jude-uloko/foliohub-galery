// Parse the URL to see what kind of error occurred
const urlParams = new URLSearchParams(window.location.search);
const errorType = urlParams.get('code');

const iconEl = document.getElementById('error-icon');
const titleEl = document.getElementById('error-title');
const descEl = document.getElementById('error-desc');

if (errorType === '404') {
  iconEl.textContent = '🔍';
  titleEl.textContent = 'Template Not Found (404)';
  descEl.textContent = 'The requested design template layout could not be found. The production deployment link might be broken or still building on Vercel.';
} else if (errorType === '500') {
  iconEl.textContent = '💥';
  titleEl.textContent = 'Server Error (500)';
  descEl.textContent = 'The server hosting this portfolio template encountered an internal error. Please choose an alternative design while the build recovers.';
} else if (errorType === 'timeout') {
  iconEl.textContent = '⏳';
  titleEl.textContent = 'Connection Timeout';
  descEl.textContent = 'The network connection timed out before the template could load completely. This usually happens on slow networks or cold server boots.';
} else if (errorType === 'offline') {
  iconEl.textContent = '📡';
  titleEl.textContent = 'Network Unreachable';
  descEl.textContent = 'Unable to establish a link to the remote Vercel domain. Please check your internet connectivity or firewall rules.';
}