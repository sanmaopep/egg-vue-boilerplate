### 基础镜像(一个Nodejs镜像即可，随着你的云服务的变化而变化)
FROM node:0.10-onbuild

### 项目名称（记得替换）
ENV PROJECT_NAME eggvue
### source
COPY . /root/$PROJECT_NAME

### 安装依赖
WORKDIR /root/$PROJECT_NAME
RUN npm install -g yarn
RUN yarn install
RUN npm start

### 为什么mysql要另外开一个容器呢...
### 你每次重新构建镜像你数据不就没了呀...
### 如果你非要把mysql放在一个Docker里，参考build/Dockerfile2

### 当前应用端口
EXPOSE 7001

