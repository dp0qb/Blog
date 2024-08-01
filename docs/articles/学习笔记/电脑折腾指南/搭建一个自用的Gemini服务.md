# 自用Gemini搭建流程

::: danger 声明
#### ⚠️ 本文内容仅供学习交流使用，请勿用于违法用途！
<br/>
:::

由于Openai的ChatGPT和谷歌的Gemini都不对中国大陆开放，因而使用这两家的服务要依靠科学上网环境，且对代理服务器ip有一定要求。笔者本人之前就经常遇到节点被ban而无法访问的问题。好在我们可以用一些小技巧绕过这些限制——先用国外未被ban的服务器访问Gemini，然后再用其向我们提供服务。本教程将详细介绍如何搭建一个不用科学上网即可访问的Gemini服务。

## 1. 准备工作
虽然本教程旨在摆脱科学上网的限制，但搭建过程还是难免要用到相关工具。
这里推荐用Clash Verge：

https://github.com/clash-verge-rev/clash-verge-rev/releases/

该界面内有对于各个版本的具体介绍，根据自己设备的实际情况和需求下载对应版本即可。

节点（内容敏感，请自行学习如何使用）：

https://freenode.openrunner.net/uploads/20240612-clash.yaml

如节点不可用，进入节点编辑界面将链接中的日期改成前一天的日期（当天的节点不一定已经更新了），然后更新订阅即可。
选择一个美国的节点，开启系统代理。

## 2. 申请谷歌Gemini服务api key
接下来我们可以申请Gemini的api key了：https://aistudio.google.com/app/apikey


## 3. 部署Github项目
首先注册一个Github账号：

https://github.com

进入网站后点击右上角"Sign up"，用邮箱注册即可。此过程较为简单，不在此赘述。
接下来访问此项目：

https://github.com/babaohuang/GeminiProChat

点击"fork"按钮，在Repository name中可以任意起名（保持默认即可），然后点击"Create fork"，即可创建一个fork。

![](./asserts/imgs_gemini/fork.png)

![](./asserts/imgs_gemini/createFork.png)

创建完fork后，我们可以在自己的仓库看到 GeminiProChat 项目了。
我们利用Vercel部署该项目，该网站提供免费的国外服务器，且操作简单，完美满足我们的需求。
Vercel网址：https://vercel.com/login
用Github账号授权登录vercel，可以很方便地导入Github上的项目。

![](./asserts/imgs_gemini/loginVercel.png)

在Vercel首页点击"Add New..."下的"Project"，将跳转到导入Git仓库界面。

![](./asserts/imgs_gemini/addNewProject.png)

在该界面找到我们刚刚fork过来的项目，点击"import"即可导入。

![](./asserts/imgs_gemini/importProject.png)

在Environment Variables中，填入Key："GEMINI_API_KEY",Value："此处填入刚刚申请的api key"，点击"Add"按钮，最后点击"Deploy"。

![](./asserts/imgs_gemini/deployProject.png)

耐心等待部署，一般一分钟左右即可完成。看到如下界面即说明部署成功，此时点击"Continue to Dashboard"按钮跳转到控制面板。

![](./asserts/imgs_gemini/Dashboard.png)

此时Vercel已经为我们分配了一个链接，点击这个链接或"Visit"按钮即可访问Gemini了。不过现在这个链接还不能直接在国内访问。我们需要自己准备一个国内能够访问的域名，使其正确解析这个网址才行。

![](./asserts/imgs_gemini/deployment.png)

## 4. 购买域名
国内在阿里云和腾讯云登平台购买域名均可，笔者是在阿里云购买的：https://www.aliyun.com/
![](./asserts/imgs_gemini/getDomin.png)

![](./asserts/imgs_gemini/searchDomin.png)



## 5. 设置域名解析
我们使用CloudFlare托管域名，并设置域名解析。

