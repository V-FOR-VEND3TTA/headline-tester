let votesA = 0;
let votesB = 0;

function submitVote(headline) {
  if (headline === 'A') {
    votesA++;
    document.getElementById('votesA').textContent = votesA + ' votes';
  } else if (headline === 'B') {
    votesB++;
    document.getElementById('votesB').textContent = votesB + ' votes';
  }

  updateWinningHeadline();
}

function updateWinningHeadline() {
  if (votesA > votesB) {
    document.getElementById('winningHeadline').textContent = document.getElementById('headlineA').value;
  } else if (votesB > votesA) {
    document.getElementById('winningHeadline').textContent = document.getElementById('headlineB').value;
  } else {
    document.getElementById('winningHeadline').textContent = 'None';
  }
}
