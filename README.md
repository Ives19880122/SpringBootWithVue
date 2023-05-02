# 練習SpringBoot與Vue混用

## 啟動SpringBoot前請安裝前端專案
```
cd client_vue
npm run install
npm run build
```

## 啟動SpringBoot
- URL localhost:8080/app/home
- 點擊連結跳轉至vue頁面
  - page1
  - page2
  - page3

## 注意事項
1. css會受到publicPath影響，不設定直接打static
2. Vue router要設定base以方便mapping瀏覽器列的URL Path
3. Spring Boot Controller直接提供 forward:/index.html, 會自動找到static的頁面