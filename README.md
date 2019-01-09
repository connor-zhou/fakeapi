移动端模拟接口
===============

# 快速允许

+ 软件安装, 参见 [install.md](install.md)

+ 运行命令
    
    ```
    cnpm install
    gulp
    ```
    
# 常用命令
+ 运行 `gulp`

  本地访问：https://localhost:5000/fakedocs/#/api
  
+ 上传文档和api接口到远程 `gulp fakeapi`

# 测试服务器

+ 地址 fakeapi.fdjf.net `/home/wechat/www/fakeapi`
+ 启动命令:

    ```
    cd /home/wechat/www/fakeapi
    forever -w --watchDirectory ./api start  ./bin/www
    ```
    
+ 停止命令 `forever stopall`
+ 查看命令 `forever list`

# jenkins配置

+ 在jenkins服务器，先执行安装命令， 参见 [install.md](install.md)
+ 在jenkins服务器需要安装forever, `cnpm install forever -g`
+ 安装的插件 gitbucket git 
+ build trigger：Build when a change is pushed to GitBucket

+ Execute Shell:

    ```
    # 第一次执行，如果文件夹不存在，先执行安装程序
    if [ ! -d "node_modules" ]; then 
    cnpm install
    cp -f /home/jenkins/privatekey.pem ${WORKSPACE}/
    cp -f /home/jenkins/certificate.pem ${WORKSPACE}/
    fi
    # jenkins 对于daemon进程，会在编译结束的时候kill掉
    # 加一个BUILD_ID的环境变量可以避免这一点
    # 参见 https://wiki.jenkins-ci.org/display/JENKINS/ProcessTreeKiller
    export BUILD_ID=dontKillMe
    forever stop ${WORKSPACE}/bin/www
    forever --spinSleepTime 1000 --minUptime 1000 \
        -a -l /var/log/jenkins/forever.log \
        -o /var/log/jenkins/forever.out.log  \
        -e /var/log/jenkins/forever.error.log \
        start ${WORKSPACE}/bin/www
    # 生成API文档
    gulp fakedocs
    ```
