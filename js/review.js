document.getElementById('appReviewForm').addEventListener('submit', async function(e) {
e.preventDefault();

// Paste your copied Web App macro deployment URL link here
const SCRIPT_API_URL = "https://script.google.com/macros/s/AKfycbwooYIv4FrXzWJTlh6XYOjHl6-saA4mtiRVL8SX5b9jpN-3z4KpEEjORS34yzrxb9Wr/exec";
const submitBtn = document.getElementById('submitBtn');
const statusReport = document.getElementById('statusReport');

submitBtn.disabled = true;
submitBtn.innerText = "Sending";
statusReport.className = "mt-4 hidden text-center text-xs font-semibold p-3 rounded-xl border";

const selectedRating = document.querySelector('input[name="rating"]:checked')?.value || "0";

const dataPacket = {
  template: document.getElementById('reviewTemplate').value,
  name: document.getElementById('reviewName').value,
  rating: parseInt(selectedRating),
  review: document.getElementById('reviewText').value
};

try {
  const response = await fetch(SCRIPT_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify(dataPacket)
  });

  const result = await response.json();

  if (result.status === 'success') {
    statusReport.innerText = "Sent successfully.";
    statusReport.className = "mt-4 text-center text-xs font-semibold p-3 rounded-xl border bg-emerald-50 text-emerald-600 border-emerald-200 block";
    document.getElementById('appReviewForm').reset();
  } else {
    throw new Error(result.message);
  }
} catch (err) {
  console.error("API Pipeline Fault:", err);
  statusReport.innerText = "Not sent. Try again";
  statusReport.className = "mt-4 text-center text-xs font-semibold p-3 rounded-xl border bg-rose-50 text-rose-600 border-rose-200 block";
} finally {
  submitBtn.disabled = false;
  submitBtn.innerText = "Submit Architecture Review";
}
});