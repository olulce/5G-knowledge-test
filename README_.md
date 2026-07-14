# 5G NR 測驗 — PWA 部署說明

這個資料夾已經是一個完整的 PWA（Progressive Web App）。同事只要用 iPhone 的 **Safari** 打開你分享的網址，點「加入主畫面」，就會在桌面出現一個像原生 App 的圖示，全螢幕開啟、離線也能用。

## 你需要做的事：找一個地方「放」這個資料夾

這五個檔案（`index.html`、`manifest.json`、`sw.js`、`icon-*.png`）必須放在同一個資料夾、透過網址存取，PWA 才會生效（直接雙擊 index.html 用 file:// 開啟不會有「加入主畫面」全螢幕效果，也無法離線）。

你人在 Windows，不需要架伺服器，以下三個方式都是免費、幾分鐘可以搞定：

### 方法一：GitHub Pages（推薦，永久免費、有正式網址）
1. 到 github.com 註冊帳號（如果還沒有）
2. 建立一個新的 public repository，例如叫 `5g-nr-quiz`
3. 把這個資料夾裡的所有檔案上傳上去（GitHub 網頁上有「Add file → Upload files」，直接拖曳即可，不需要用指令）
4. 到 repository 的 Settings → Pages，Source 選 `main` branch，儲存
5. 等 1-2 分鐘，會拿到一個網址，長得像：
   `https://你的帳號.github.io/5g-nr-quiz/`
6. 把這個網址傳給同事即可

### 方法二：Netlify Drop（最快，不用帳號也能先試）
1. 打開 https://app.netlify.com/drop
2. 直接把整個資料夾拖曳到網頁上
3. 幾秒鐘後會拿到一個網址（例如 `random-name-123.netlify.app`）
4. 把網址傳給同事即可
（如果要固定網址、之後更新內容，建議註冊一個免費帳號）

### 方法三：Cloudflare Pages
跟方法一類似，到 pages.cloudflare.com 用同樣方式上傳資料夾即可，也是永久免費。

## 同事怎麼加到主畫面（iPhone）

1. 用 **Safari**（不能用 Chrome 或其他瀏覽器，iOS 只有 Safari 能加到主畫面並支援離線快取）打開你給的網址
2. 點下方的「分享」圖示（方框加箭頭）
3. 往下捲，點「加入主畫面」
4. 確認名稱後點「新增」
5. 桌面上會出現「5G NR 測驗」的圖示，點開就是全螢幕、沒有網址列的獨立 App 體驗

## 之後要更新題庫怎麼辦？

只要覆蓋掉伺服器上的 `index.html`（題庫就在裡面）重新上傳即可。因為裝了 Service Worker，同事的 iPhone 可能要重新整理兩次（或關掉再重開 App）才會抓到最新版本——這是 PWA 離線快取的正常行為，不是壞掉。

## 檔案清單
- `index.html` — 測驗本體（含 169 題題庫）
- `manifest.json` — 告訴 iOS 這是一個可安裝的 App，設定名稱、圖示、啟動模式
- `sw.js` — Service Worker，負責離線快取
- `icon-152/167/180/192/512.png` — 不同解析度的 App 圖示（iOS 各種情境會用到不同尺寸）
- `icon.svg` — 圖示原始檔（示波器波形，呼應測驗介面的暗色主題），之後想換圖示可以從這裡改
