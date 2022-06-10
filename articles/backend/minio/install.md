# 安装

~~~shell
$ sudo docker run -d \
    -p 9000:9000  \
    -p 9001:9001 \
    --name webj2eedev-minio \
    -v ~/minio/data:/data \
    -e "MINIO_ROOT_USER=webj2eedev" \
    -e "MINIO_ROOT_PASSWORD=webj2eedev" \
    quay.io/minio/minio server /data --console-address ":9001"
~~~


::: tip 参考

* [MinIO Docker Quickstart Guide](https://docs.min.io/docs/minio-docker-quickstart-guide)