# Nacos 安装

## 是什么？

Nacos 是阿里巴巴推出的开源项目，这是一个更易于构建云原生应用的动态服务发现、配置管理和服务管理平台。

## 安装

~~~shell
sudo docker run --name webj2eedev-nacos \
    -e MODE=standalone -p 8848:8848 -d \ 
    nacos/nacos-server:2.0.2
~~~

镜像启动后，即可通过浏览器进行访问：
* [http://localhost:8848/nacos](http://localhost:8848/nacos)
  * 默认账号、密码: nacos/nacos


![](/images/backend/microservice/nacos/install/nacos_home.png)


::: tip 参考

* [Nacos官网](https://nacos.io/zh-cn/index.html)