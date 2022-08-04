# 调试模式（Debug Mode）

## 背景
在正常情况下，项目启动后，如果修改了代码，想要查看最新的效果，需要关闭服务，然后再次启动程序，才能看到最新的程序运行效果。

在开发过程中，这无疑是比较浪费时间的。

所以Flask提供了调试模式，启用调试模式后，修改代码并保存时，程序自动重启，我们可以立即在浏览器中查看最新效果。

## 启用调试模式

~~~python
app.run(debug=True)
~~~

> The flask run command can do more than just start the development server. By enabling debug mode, **the server will automatically reload if code changes**, and will show an interactive debugger in the browser if an error occurs during a request.