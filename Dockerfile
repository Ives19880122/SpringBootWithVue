# vueApp
FROM node:lts AS vueAppBuilder
WORKDIR /vue
COPY client_vue .
RUN npm install
RUN npm run build

# download dependencies
FROM maven:3.9.1-sapmachine-11 AS mavenBuider
WORKDIR /usr/src/demo
COPY server/pom.xml .
RUN mvn -B dependency:go-offline

# 複製打包Vue App到static
COPY server .
COPY --from=vueAppBuilder /vue/dist /usr/src/demo/src/main/resources/static
# build to jar
RUN mvn package

# java app
FROM openjdk:11
WORKDIR /app
COPY --from=mavenBuider /usr/src/demo/target/demo-0.0.1-SNAPSHOT.jar .

# 暴露端口與啟動時執行jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/demo-0.0.1-SNAPSHOT.jar"]