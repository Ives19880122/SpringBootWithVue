# 練習SpringBoot與Vue混用

## docker
- 建立一個映像檔 spring-vue
```shell
docker image build -t spring-vue:v1 . 
```
- 啟動docker container
```shell
# --name 容器名稱, -p 綁定的端口 左外部/右容器內部, 最後為使用的image
docker run -d --name spring-vue -p 8080:8080 spring-vue:v1
```

## 啟動SpringBoot後
- URL localhost:8080/app/home
- 點擊連結跳轉至vue頁面
  - page1
  - page2
  - page3

## 注意事項
1. css會受到publicPath影響，不設定直接打static
2. Vue router要設定base以方便mapping瀏覽器列的URL Path
3. Spring Boot Controller直接提供 forward:/index.html, 會自動找到static的頁面
4. 部署路徑調整至Dockerfile內,注意開啟的port與spring port要相同