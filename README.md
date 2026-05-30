# Anti-X ⚠️

> **For those who lose track of time scrolling on X (Twitter):**  
> **Place a fake X icon on your home screen.**  
> **When you can't resist the temptation and click it, you get scolded: "Kora Kora!" (Hey, stop that!).**

**「Ｘで時間を溶かしてしまう人のために、偽Ｘアイコンをホーム画面に配置。誘惑に耐え切れずアイコンをクリックすると、こらこらと怒られます。」**

---

「スマホを開くと、ついつい無意識にXのアイコンをタップして何時間も過ごしてしまう……」  
そんな現代人のための、**ユーモアとテックの力で解決するスマホ中毒防止PWA（Progressive Web App）アプリ**です。

---

## 🚀 デモ・インストールURL (Demo & Install)

お使いのスマートフォンのブラウザ（Safari / Chrome）で以下のアドレスを開き、**「ホーム画面に追加」** または **「アプリをインストール」** を行ってください。

👉 **[https://tomigin.github.io/anti-x-app/](https://tomigin.github.io/anti-x-app/)**

*※HTTPS対応のため、Android Chrome等でもバッジ（Chromeマーク）なしの完璧なアプリアイコンとしてホーム画面にインストールできます。*

---

## ✨ アプリの特徴 (Features)

1. **脳を騙す「本物そっくり」の起動スプラッシュ (Fake Splash Screen)**
   * アイコンだけでなく、起動した瞬間も本物のXアプリと全く同じ漆黒の画面に白いロゴマークが表示されます。脳に「Xを開いた」と錯覚させます。
2. **愛のある警告アニメーション (Playful Warning)**
   * 起動から0.8秒後、ロゴが滑らかに回転消滅し、**「こらこら、Xばかり見ていてはダメよ！」**というユーモラスな警告が浮かび上がります。
3. **深呼吸を促す「禅」の完了画面 (Zen Mode)**
   * 警告後、画面は滑らかに暗転し、ゆっくりと呼吸するような美しいグラデーション発光とともに「深呼吸して目の前の作業に戻りましょう」と優しく促します。
4. **強制ブラックアウト (Blackout Effect)**
   * 「作業に戻る」ボタンをタップすると画面が完全な漆黒（ブラックアウト）になり、余計なデジタル刺激を脳に与えずスマホを物理的に閉じるサポートをします。
5. **爆速オフライン起動 (Offline Support)**
   * サービスワーカー（Service Worker）によるキャッシュ機構を搭載。ネット環境がなくても、タップした瞬間に（1ミリ秒で）警告が起動します。

---

## 🛠️ 技術スタック (Tech Stack)

* **Frontend**: HTML5, CSS3 (Custom transitions/keyframes), JavaScript (Vanilla ES6)
* **PWA**: Web App Manifest (`manifest.json`), Service Worker (`sw.js`)
* **Hosting**: GitHub Pages

---

## 📝 開発の背景 (Background)
「スマホを触る ➔ 無意識にXを開く ➔ 時間が溶ける」という悪循環を断ち切るため、ホーム画面の「本物のX」をこの「偽物のX（Anti-X）」に置き換えることで、無意識の悪習慣をユーモラスにハックすることを目指して開発されました。
