# 怎么改密码

使用`mysqladmin`工具

~~~shell
mysqladmin -u root -p password mypasswd 
~~~

输入这个命令后，需要输入root的原密码，然后root的密码将改为mypasswd。