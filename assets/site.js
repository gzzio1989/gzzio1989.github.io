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
    //   ・数えるのは「自分でアップロードしたファイル」のダウンロード数。
    //     GitHub が自動で付ける Source code (zip) は API に出てこないので数えられない。
    //   ・一度取れた数字は localStorage に残すので、次からは通信が失敗しても消えない。
    //   ・出せないときは理由をブラウザのコンソール(F12)に日本語で出す。
    //     「カウンターが出ない」ときは、まずそこを見れば原因がわかる。
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
      // 憶えた値は localStorage に置く(sessionStorage だとタブを閉じるたびに消えて、
      // GitHub の回数制限に当たった日は数字がまるごと消えてしまう)。
      var LOG = "[G'zzio DL] ";
      function load (repo) {
        try { return JSON.parse(localStorage.getItem('gzzio-dl-' + repo) || 'null'); }
        catch (e) { return null; }
      }
      function save (repo, n) {
        try { localStorage.setItem('gzzio-dl-' + repo, JSON.stringify({ t: Date.now(), n: n })); }
        catch (e) {}
      }

      Object.keys(byRepo).forEach(function (repo) {
        var hit = load(repo);
        // 前に取れた数字があるなら、まず先に出す。通信が失敗しても数字は消えない。
        if (hit && typeof hit.n === 'number') show(byRepo[repo], hit.n);
        // 1時間以内に取った値ならそれで十分(APIを叩かない)
        if (hit && Date.now() - hit.t < 3600e3) {
          console.log(LOG + repo + ' = ' + hit.n + '（1時間以内に取得した値）');
          return;
        }
        fetch('https://api.github.com/repos/' + repo + '/releases?per_page=100')
          .then(function (r) {
            if (!r.ok) throw new Error('GitHub から HTTP ' + r.status
                        + (r.status === 403 ? '（1時間あたりの回数制限の可能性）' : ''));
            return r.json();
          })
          .then(function (rels) {
            if (!Array.isArray(rels)) throw new Error('予期しない応答');
            if (!rels.length) { console.log(LOG + repo + ' → リリースがまだありません'); return; }
            var total = 0, files = 0;
            rels.forEach(function (rel) {
              (rel.assets || []).forEach(function (a) { files++; total += a.download_count || 0; });
            });
            // GitHub が自動で付ける「Source code (zip)」は assets に入らないので数えられない。
            // 自分でアップロードしたファイルが1つも無いリポジトリは、そもそも数えようがない。
            if (!files) {
              console.log(LOG + repo + ' → アップロードされたファイルがありません'
                        + '（GitHub 自動の Source code zip は集計対象外です）');
              return;
            }
            save(repo, total);
            show(byRepo[repo], total);
            console.log(LOG + repo + ' = ' + total + '（ファイル' + files + '個の合計）');
          })
          .catch(function (e) {
            console.log(LOG + repo + ' → 取得できませんでした: ' + e.message
                      + (hit ? '（前回の値を表示中）' : '（表示しません）'));
          });
      });
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
