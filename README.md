# React Native－Uber-Eats-Clone

## 這是什麼？

這是用 React Native 來製作的簡易版 Uber Eats，主要的功能有：

- 輸入位置查詢餐廳
- 查看餐廳的評分、閱覽數量、價格
- 查看菜單（靜態資料）
- 購物車功能
- 下訂單功能

## 實際操作畫面

<video style="border-radius: 10px;" height="500" src="./demo.mov" autoplay="true" muted="false" loop="true"></video>

## 使用的技術

- React Native（Expo）
- Redux（購物車）
- Navigation-stack & Navigation-tab（導航功能）
- yelp（餐廳 API）
- Google-places-autocomplete（搜尋地址 API）
- Firebase（下訂單）
- lottie（動畫效果）

## 使用方式

請先確保你有 React Native 的開發環境（Expo & 裝置模擬器），並把此專案 clone 到本地端。

###  安裝 dependencies

```bash
npm install
```

### 自行添加 Key 的相關檔案

串接 API 和 Firebase 需要提供對應的 key，因此這部分請自行到 yelp、google cloud platform 和 Firebase 做申請。

總之請建立兩個檔案，並填入以下內容：

1\. constants.js

```js
export const API_END_POINT = 'https://api.yelp.com/v3/businesses';
export const API_KEY = 'your_api_key';
export const GOOGLE_KEY = 'your_google_api_key';
```

2\. firebase.js

```js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_auth_domain",
  projectId: "your_project_id",
  storageBucket: "your_storage_bucket",
  messagingSenderId: "your_messaging_sender_id",
  appId: "your_app_id"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

### 運行專案

```bash
expo start
```

啟動後可以根據個人需求選擇要運行在 IOS、Android 或實體裝置上。




