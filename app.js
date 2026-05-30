// ==========================================================================
// Anti-X App Logic & Timing Control
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // PWA サービスワーカーの登録
  registerServiceWorker();

  // 画面要素の取得
  const splashScreen = document.getElementById('splash-screen');
  const warningScreen = document.getElementById('warning-screen');
  const doneScreen = document.getElementById('done-screen');
  const blackoutScreen = document.getElementById('blackout-screen');
  
  const timerProgress = document.querySelector('.timer-progress');
  const closeBtn = document.getElementById('close-btn');

  // アニメーション定数 (ミリ秒)
  const SPLASH_DURATION = 800;      // スプラッシュ(Xロゴ)を表示する時間
  const SPLASH_EXIT_TIME = 500;     // スプラッシュが消滅するアニメーション時間
  const WARNING_DURATION = 2500;    // 警告を表示する時間

  // 初期化: プログレスバーの初期状態を設定
  if (timerProgress) {
    timerProgress.style.transform = 'scaleX(1)';
    timerProgress.style.transition = 'none';
  }

  // --- 1. アニメーションシーケンスの開始 ---
  
  // ステップ1: スプラッシュから警告画面への移行
  setTimeout(() => {
    // スプラッシュに終了アニメーションを適用
    splashScreen.classList.add('exit');

    setTimeout(() => {
      // スプラッシュを非アクティブにし、警告画面を表示
      splashScreen.classList.remove('active');
      warningScreen.classList.add('active');

      // プログレスバー（タイマー）を滑らかに縮小させる
      if (timerProgress) {
        // 次のレンダリングサイクルでトランジションを効かせるためのトリガー
        requestAnimationFrame(() => {
          timerProgress.style.transition = `transform ${WARNING_DURATION}ms linear`;
          timerProgress.style.transform = 'scaleX(0)';
        });
      }

      // ステップ2: 警告画面から退出（完了）画面への移行
      setTimeout(() => {
        warningScreen.classList.remove('active');
        doneScreen.classList.add('active');
      }, WARNING_DURATION);

    }, SPLASH_EXIT_TIME);

  }, SPLASH_DURATION);

  // --- 2. 閉じるボタンの挙動制御 ---
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      // 触覚フィードバックの代わりにボタンの縮小アニメーション後にブラックアウト
      closeBtn.style.transform = 'scale(0.95)';
      
      setTimeout(() => {
        // 画面を完全にブラックアウトして、スマホ操作を強制終了させる演出
        doneScreen.classList.remove('active');
        blackoutScreen.classList.add('active');

        // セキュリティ制限の範囲内でブラウザタブを閉じる試み
        try {
          // スクリプトで開かれたウィンドウの場合、これで閉じられる
          window.close();
          
          // PWAや一部のブラウザ向けに、新しい空ページに遷移させて履歴をクリアする試み
          setTimeout(() => {
            if (!window.closed) {
              // 閉じられなかった場合は、漆黒の画面を維持し、ホーム画面に戻るように促す
              console.log("Window could not be closed automatically due to browser security restrictions.");
            }
          }, 500);
        } catch (e) {
          console.error("Error attempting to close the window:", e);
        }

      }, 200);
    });
  }
});

/**
 * サービスワーカーを登録してオフライン起動を有効化する
 */
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((registration) => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch((err) => {
          console.log('ServiceWorker registration failed: ', err);
        });
    });
  }
}
