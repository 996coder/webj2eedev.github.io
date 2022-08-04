# requirements.txt

## 什么是 requirements.txt

requirements.txt 记录了当前程序的所有依赖包及其精确版本号。

用于未来在新的python环境中，重新构建项目运行所需要的环境依赖。

作用类似 Node.js 体系下的 package-lock.json

## 怎么使用 requirements.txt

~~~python
pip install -r requirements.txt 
~~~

## 怎么生成 requirements.txt

### pipreqs

使用 pipreqs 可以自动检索到当前项目下的所有组件及其版本，并生成 requirements.txt 文件。相比直接用pip freeze 命令，能直接隔离其它项目的包生成。

安装：
~~~python
pip install pipreqs
~~~

生成：
~~~python
pipreqs ./ --encoding=utf8
~~~

### pip freeze（不推荐）

这个方法会将你整个Python环境的包全把生成出来，如果你使用的不是虚拟环境，你会发现生成的 requirements.txt 中包含很多你并不需要的包。

~~~python
pip freeze > requirements.txt
~~~