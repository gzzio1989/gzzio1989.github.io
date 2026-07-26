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
