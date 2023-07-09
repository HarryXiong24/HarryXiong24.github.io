---
category: Git
tag:
  - Git
date: 2020-06-05
---

# Git 安装与配置

## Git 下载

由于官网在国外，网速较慢，可以查看功能部群文件找到安装包下载安装。在安装 Git 前推荐安装好 VSCode。

- [官网下载](https://git-scm.com/downloads/)

## Git 的安装

1. 点击 “next”。

   ![gitinstall1](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/zh/git/install1.png?raw=true)

2. 按照图示勾选。

   ![gitinstall2](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/zh/git/install2.png?raw=true)

3. 选择使用 VSCode 作为 git 的默认编辑器。

   ![gitinstall3](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/zh/git/install3.png?raw=true)

4. 选择第二项。

   ![gitinstall4](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/zh/git/install4.png?raw=true)

5. 选择默认选中的第一项。

   ![gitinstall5](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/zh/git/install5.png?raw=true)

6. 选择最后一项，直接检查与提交换行。

   ![gitinstall6](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/zh/git/install6.png?raw=true)

7. 选择第二项，使用 Windows 默认的控制台窗口。

   ![gitinstall7](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/zh/git/install7.png?raw=true)

8. 勾选全部特性，开始安装。

   ![gitinstall8](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/zh/git/install8.png?raw=true)

安装完成后，在开始菜单里找到 “Git” -> “Git Bash” (Mac 上叫 Git Shell)，蹦出一个类似命令行窗口的东西，就说明 Git 安装成功！

![git终端图](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/zh/git/shell.png?raw=true)

## Git 的初次配置

1. 为配置配置用户名和密码。

   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "email@example.com"
   ```

   将上方的字符串换成您自己的名字和邮箱。

2. 创建 SSH Key。打开 Shell (Windows 下打开 cmd)，创建 SSH Key:

   ```bash
   ssh-keygen -t rsa -C "youremail@example.com"
   ```

   您需要把邮件地址换成您自己的邮件地址，然后一路回车，使用默认值即可，由于这个 Key 也不是用于军事目的，所以也无需设置密码。

   如果一切顺利的话，可以在用户主目录里找到.ssh 目录，里面有 id_rsa 和 id_rsa.pub 两个文件，这两个就是 SSH Key 的秘钥对，id_rsa 是私钥，不能泄露出去，id_rsa.pub 是公钥，可以放心地告诉任何人。

3. 打开 [Github](https://github.com) 并选择 "Sign in" 注册自己的账号。

   ![Github 界面简介](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/zh/git/github.png?raw=true)

   登陆 Github 后，点击右上角头像，进入设置。

   进入 "安全设置" 下的 "SSH 公钥" 界面。

   ![Github 界面简介](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/zh/git/githubSSH.png?raw=true)

   在标题中填写公钥的备注名称，把 id_rsa.pub 文件的内容粘贴到底下的输入框中，设置一个自己可以记起的备注。
