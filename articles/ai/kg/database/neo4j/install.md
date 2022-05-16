# 安装 Neo4j

基于 Docker 安装 Neo4j 就很简单了

~~~shell
docker run \
    --publish=7474:7474 --publish=7687:7687 \
    --volume=$HOME/neo4j/data:/data \
    -d \
    neo4j
~~~

1. 访问地址 `http://localhost:7474`。
2. 绑定端口 `7474` 和 `7687`，分别供 HTTP 和 Bolt 协议使用。
3. 映射数据 `/data`，用于持久化数据。
4. 默认使用 `neo4j/neo4j`，登录 Neo4j。

![](/images/kg/database/neo4j/install/install.png)

![](/images/kg/database/neo4j/install/login.png)