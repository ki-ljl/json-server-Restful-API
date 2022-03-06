# json-server-Restful-API
web作业：利用json-server搭建一个提供数据访问接口的Restful API服务器。

Json-Server 是一个 Node 模块，运行 Express 服务器，你可以指定一个 json 文件作为 api 的数据源。要想在电脑上运行Json-Server，需得先安装node.js。
# 1. 安装node.js
打开官网下载链接:[官网链接](https://nodejs.org/en/download/)
我这里下载的是node-v6.9.2-x64.msi,如下图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200511225837559.png#pic_center)

下载完成后，双击“node-v6.9.2-x64.msi”，开始安装Node.js，一路点击next即可。


# 2. 安装全局json-server
在cmd输入**npm  install  -g  json-server**即可。

# 3. 初始化项目
先创建一个文件夹json-server，并将该文件夹加入到vscode工作区。终端输入npm init初始化项目，初始化后会发现多了一个文件夹node_modules。

# 4. 新建一个json文件data.json

```cpp
{
  "info": [
    {
      "name": "嘿嘿嘿",
      "id": "120181080119",
      "age": "800",
      "gender": "男",
      "occupation": "学生"
    },
    {
      "name": "张三",
      "id": "544515115515",
      "age": "22",
      "gender": "男",
      "occupation": "学生"
    },
    {
      "name": "李四",
      "id": "120181478965",
      "age": "17",
      "gender": "男",
      "occupation": "学生"
    },
    {
      "name": "dfdc",
      "id": "120181080119",
      "age": "17",
      "gender": "男",
      "occupation": "学生"
    },
    {
      "name": "aaa",
      "id": "120181080111",
      "age": "17",
      "gender": "女",
      "occupation": "学生"
    },
    {
      "name": "ccc",
      "id": "120171072586",
      "age": "23",
      "gender": "女",
      "occupation": "学生"
    },
    {
      "name": "王三",
      "id": "157426333",
      "age": "44",
      "gender": "男",
      "occupation": "老师"
    },
    {
      "name": "无良",
      "id": "120165874521",
      "age": "21",
      "gender": "男",
      "occupation": "学生"
    },
    {
      "name": "马后炮",
      "id": "589625417",
      "age": "56",
      "gender": "男",
      "occupation": "老师"
    },
    {
      "name": "韩韩",
      "id": "11478956",
      "age": "44",
      "gender": "男",
      "occupation": "教师"
    },
    {
      "name": "张风风",
      "id": "120171070475",
      "age": "19",
      "gender": "女",
      "occupation": "学生"
    },
    {
      "name": "kyrie",
      "id": "120181077777",
      "age": "17",
      "gender": "男",
      "occupation": "学生"
    },
    {
      "name": "mike",
      "id": "120181050147",
      "age": "18",
      "gender": "男",
      "occupation": "学生"
    },
    {
      "name": "lucy",
      "id": "120181010111",
      "age": "18",
      "gender": "女",
      "occupation": "学生"
    },
    {
      "name": "cddd",
      "id": "147856321",
      "age": "45",
      "gender": "女",
      "occupation": "老师"
    },
    {
      "name": "哈士奇",
      "id": "1201485962",
      "age": "22",
      "gender": "女",
      "occupation": "学生"
    },
    {
      "name": "Cyril_KI",
      "id": "1254698741",
      "age": "14",
      "gender": "男",
      "occupation": "学生"
    }
  ]
}
```

# 5. 运行json文件
终端输入`json-server --watch data.json --port 3004`指定端口运行该json文件，效果如下所示：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200511230639368.png#pic_center)
第六，建立html文件以及js文件
增加数据界面如下所示：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200511231225516.png#pic_center)
输入想要添加的信息即可实现增加数据，后面三个界面不再一一列举。

**注意：往table中添加json信息时，我们往往需要一个变量来存储往table中添加的tr以及td标签，此时这个变量一定要初始化为var html=""而不能是var html;使用后者时会在table第一行出现undefined。**

具体见：
[table动态添加数据异常](https://blog.csdn.net/Cyril_KI/article/details/105946582)
