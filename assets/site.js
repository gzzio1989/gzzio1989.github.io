/* G'zzio サイト共通スクリプト — 日英切替と出現アニメだけ。
   製品を増やしても、このファイルは触らなくて大丈夫です。 */
(function () {
  'use strict';

  // ---- 日本語 / English 切替（選択はブラウザに憶えさせる） ----
  var KEY = 'gzzio-lang';
  function apply(lang) {
    document.body.classList.toggle('lang-en', lang === 'en');
    document.documentElement.lang = (lang === 'en') ? 'en' : 'ja';
    var btns = document.querySelectorAll('.langbtn button');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-pressed', btns[i].dataset.lang === lang ? 'true' : 'false');
    }
    try { localStorage.setItem(KEY, lang); } catch (e) { /* プライベートモード等 */ }
  }

  function init() {
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (!saved) {
      // 保存が無ければブラウザの言語から推測（日本語以外は英語で開く）
      saved = /^ja/i.test(navigator.language || '') ? 'ja' : 'en';
    }
    apply(saved);

    var btns = document.querySelectorAll('.langbtn button');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () { apply(this.dataset.lang); });
    }

    // ---- ダウンロードカウンター ----
    // data-dlrepo="owner/repo" を持つ要素に、GitHub Releases の合計DL数を入れる。
    // 取得できない間(未リリース・制限・オフライン)は非表示のまま = 嘘の数字を出さない。
    // 同じリポジトリは1回だけ取得し、1時間は sessionStorage に憶えさせる。
    (function () {
      var els = document.querySelectorAll('[data-dlrepo]');
      if (!els.length || !window.fetch) return;
      var byRepo = {};
      for (var i = 0; i < els.length; i++) {
        var r = els[i].getAttribute('data-dlrepo');
        (byRepo[r] = byRepo[r] || []).push(els[i]);
      }
      function show(list, total) {
        var slow = window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches;
        for (var j = 0; j < list.length; j++) (function (el) {
          el.classList.add('on');
          var num = el.querySelector('.dl-num');
          if (!num) return;
          if (slow) { num.textContent = total.toLocaleString(); return; }
          var t0 = null, dur = 900;             // カウントアップ演出(数字は本物だけ)
          function step (t) {
            if (t0 === null) t0 = t;
            var k = Math.min(1, (t - t0) / dur);
            num.textContent = Math.round(total * (1 - Math.pow(1 - k, 3))).toLocaleString();
            if (k < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        })(list[j]);
      }
      for (var repo in byRepo) (function (repo) {
        var key = 'gzzio-dl-' + repo, hit = null;
        try { hit = JSON.parse(sessionStorage.getItem(key) || 'null'); } catch (e) {}
        if (hit && Date.now() - hit.t < 3600e3) { show(byRepo[repo], hit.n); return; }
        fetch('https://api.github.com/repos/' + repo + '/releases?per_page=100')
          .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
          .then(function (rels) {
            var total = 0;
            (rels || []).forEach(function (rel) {
              (rel.assets || []).forEach(function (a) { total += a.download_count || 0; });
            });
            if (!total) return;
            try { sessionStorage.setItem(key, JSON.stringify({ t: Date.now(), n: total })); } catch (e) {}
            show(byRepo[repo], total);
          })
          .catch(function () { /* 取れないときは静かに非表示のまま */ });
      })(repo);
    })();

    // ---- スクロールで要素をふわっと出す ----
    var targets = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      for (var k = 0; k < targets.length; k++) targets[k].classList.add('in');
      return;
    }
    // 保険: 何らかの理由で観測が走らなくても、2秒後には必ず表示する
    setTimeout(function () {
      for (var m = 0; m < targets.length; m++) targets[m].classList.add('in');
    }, 2000);

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '240px 0px 240px 0px', threshold: 0.01 });
    for (var j = 0; j < targets.length; j++) io.observe(targets[j]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
