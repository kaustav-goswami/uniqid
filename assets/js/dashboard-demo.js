(function () {
  'use strict';

  var tbody = document.getElementById('visitor-rows');
  if (!tbody) return;

  var statHuman = document.getElementById('stat-human');
  var statBot = document.getElementById('stat-bot');
  var statTotal = document.getElementById('stat-total');

  var ips = [
    '192.168.42.17', '10.0.0.88', '172.16.3.21', '203.0.113.45',
    '198.51.100.12', '10.12.0.7', '192.0.2.99', '10.255.1.33'
  ];

  var agents = [
    'Chrome/124 · macOS', 'Firefox/125 · Linux', 'Safari/17 · iOS',
    'curl/8.4.0', 'HeadlessChrome/124', 'Python-requests/2.31',
    'Chrome/124 · Windows', 'bot/1.0 (+http://spam.example)'
  ];

  var humanCount = 847;
  var botCount = 23;
  var totalCount = 870;

  function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function randomScore() {
    var r = Math.random();
    if (r < 0.15) return +(0.72 + Math.random() * 0.27).toFixed(3);
    if (r < 0.25) return +(0.45 + Math.random() * 0.25).toFixed(3);
    return +(Math.random() * 0.35).toFixed(3);
  }

  function verdictFromScore(score) {
    if (score >= 0.7) return { label: 'BOT', cls: 'bot' };
    if (score >= 0.4) return { label: 'REVIEW', cls: 'unknown' };
    return { label: 'HUMAN', cls: 'human' };
  }

  function formatTime() {
    var now = new Date();
    return now.toTimeString().slice(0, 8);
  }

  function animateStat(el, from, to) {
    if (!el) return;
    var start = performance.now();
    var duration = 600;

    function tick(now) {
      var t = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      var val = Math.round(from + (to - from) * eased);
      el.textContent = val.toLocaleString();
      if (t < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  function createRow() {
    var score = randomScore();
    var verdict = verdictFromScore(score);
    var pct = Math.round(score * 100);

    var tr = document.createElement('tr');
    tr.className = 'new-row';
    tr.innerHTML =
      '<td>' + formatTime() + '</td>' +
      '<td>' + randomItem(ips) + '</td>' +
      '<td>' + randomItem(agents) + '</td>' +
      '<td>' +
        '<div class="score-bar-wrap">' +
          '<div class="score-bar"><div class="score-bar-fill ' + verdict.cls + '" style="width:0%"></div></div>' +
          '<span class="score-value">' + score.toFixed(3) + '</span>' +
        '</div>' +
      '</td>' +
      '<td><span class="verdict-badge ' + verdict.cls + '">' + verdict.label + '</span></td>';

    var fill = tr.querySelector('.score-bar-fill');
    requestAnimationFrame(function () {
      fill.style.width = pct + '%';
    });

    return { row: tr, verdict: verdict };
  }

  function addVisitor() {
    var result = createRow();
    tbody.insertBefore(result.row, tbody.firstChild);

    if (result.verdict.cls === 'bot') {
      botCount++;
      animateStat(statBot, botCount - 1, botCount);
    } else if (result.verdict.cls === 'human') {
      humanCount++;
      animateStat(statHuman, humanCount - 1, humanCount);
    }

    totalCount++;
    animateStat(statTotal, totalCount - 1, totalCount);

    var rows = tbody.querySelectorAll('tr');
    if (rows.length > 8) {
      rows[rows.length - 1].remove();
    }

    setTimeout(function () {
      result.row.classList.remove('new-row');
    }, 500);
  }

  if (statHuman) statHuman.textContent = humanCount.toLocaleString();
  if (statBot) statBot.textContent = botCount.toLocaleString();
  if (statTotal) statTotal.textContent = totalCount.toLocaleString();

  for (var i = 0; i < 5; i++) {
    var seed = createRow();
    tbody.appendChild(seed.row);
    seed.row.classList.remove('new-row');
    var seedFill = seed.row.querySelector('.score-bar-fill');
    var seedPct = Math.round(parseFloat(seed.row.querySelector('.score-value').textContent) * 100);
    seedFill.style.width = seedPct + '%';
  }

  setInterval(addVisitor, 2200);
  setTimeout(addVisitor, 800);
})();
