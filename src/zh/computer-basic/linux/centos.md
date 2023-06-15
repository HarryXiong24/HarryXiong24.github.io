---
title: CentOS 教程
icon: centos
time: 2020-6-5
category: Linux
tag: Linux
---

## 管理工具

- yum (Centos 7)
- dnf (Centos 8)

## yarn

```bash
curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo

sudo yum install yarn
## OR ##
sudo dnf install yarn
```

测试是否安装成功:

```bash
yarn --version
```
