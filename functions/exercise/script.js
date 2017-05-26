((document) => {
  // Select all the list items on the page and convert to array
  const totalSeconds = Array.from(document.querySelectorAll('li'))

    // Filter for only the elements that contain the word 'flexbox'
    .filter(e => e.textContent.includes('Flexbox'))

    // map down to a list of time strings
    .map(f => f.dataset.time)

    // map to an array of seconds
    .map(f => ((times = f.split(':').map(t => parseFloat(t))) => (times[0] * 60) + times[1])())

    // reduce to get total
    .reduce((total, curr) => total + curr, 0);

  console.log(totalSeconds);
})(window.document);
