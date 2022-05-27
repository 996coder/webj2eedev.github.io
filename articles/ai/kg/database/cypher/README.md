# Cypher

## 1. What is Cypher?

Cypher is a declarative graph query language that allows for expressive and efficient querying, updating and administering of the graph. It is designed to be suitable for both developers and operations professionals. Cypher is designed to be simple, yet powerful; highly complicated database queries can be easily expressed, enabling you to focus on your domain, instead of getting lost in database access.

::: tip 参考
* [The Neo4j Cypher Manual](https://neo4j.com/docs/cypher-manual/current/)
:::


~~~cypher
match(n) detach delete n

match (x:WORD_SCENE), (y:WORD) where x.scene='植物' and y.word='mango' create (x)-[r:WORD_CONTAINS]->(y) return *
~~~