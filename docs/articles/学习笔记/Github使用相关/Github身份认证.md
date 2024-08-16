# Github 身份认证相关内容

## 前言

这几天由于要出野外，台式电脑没法用，之前的itx又被我给拆了，处境一时间有点尴尬。本想再组一个itx，想想又感觉有点亏，毕竟平时我肯定不带用这玩意的。后来就将就着在平板的termux上用proot-distro装了个Ubuntut，把Git, Nvim, Filebrowser啥的都装上，将就用着，至少要写博客是没啥问题了。虽然好像是没啥问题了，用git push命令的时候却碰到了点小意外——git要求输入用户名和密码，输入完还提示失败。

## 尝试：ssh key

凭着许久之前残存的一点记忆，我想起来不少Git配置的教程里都有提到ssh key认证的方式。于是我跟着教程生成密钥，并在Github账户设置页将公钥设置为认证key。很遗憾，虽然终端提示认证成功，push还是失败了。再次搜索，发现clone方式变了，要用`ssh`方式。那就再用ssh试试吧，clone过来发现居然没有`.git`文件夹，顿时有点懵。

再一回想，我之前在Windows上也一直都是用`git clone https://*`，没用过ssh认证方式，之前是怎么解决的呢？再说就算用ssh解决了，用着也不符合习惯。没办法，接着搜吧。最后找到Github官方的界面，一顿操作，才知道之前为啥没这么折腾。

## 解决方案

官方文档：

https://docs.github.com/zh/get-started/getting-started-with-git/caching-your-github-credentials-in-git?platform=linux

简单记录一下吧：

1. 在 https://github.com/settings/tokens/ 申请一个Token，权限看自己需求勾选（`repo`, `read:org`, `workflow`这三项是必须的），把Token复制下来。

2. 输入如下命令，依次选择额`Github.com`, `HTTPS`, `Paste an autoentication token`，最后把刚刚生成的Token粘贴上去就算完事。

```
sudo apt install gh -y
gh auth login
```

```
What account do you want to log into? GitHub.com
What is your preferred protocol for Git operations on this host? HTTPS
How would you like to authenticate GitHub CLI? Paste an authentication token
Tip: you can generate a Personal Access Token here https://github.com/settings/tokens
The minimum required scopes are 'repo', 'read:org', 'workflow'.
Paste your authentication token:
```

认证完就可以正常使用啦！

现在回想起来，貌似是因为认证方式可以二选一，其中之一是通过浏览器认证。我当时可能是在Windows上用浏览器直接登录完成认证的？现在这个系统没装图形界面，浏览器啥的就更无从谈起了（顺带吐槽一下，我之前在termux里装的Ubuntu就没法用浏览器，鼓捣半天也没解决）。
