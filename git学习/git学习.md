**设置账号**
git config --gloable user.name "username"

**设置密码**
git config --gloable user.email "useremail"

**添加项目到git**
在需要作为项目的根目录下输入
git init

**查看文件管理状态**
详细：git status
简略：git status -s 
( ？？为未被管理 )( A绿色 为新添加到暂存区 )(M 红色说明修改,没有放进暂存区 M绿色说明已经修改且放入暂存区)

**添加文件到git暂存区**（还未提交到git仓库）
git add (files name)

**将暂存区提交到git 仓库**
git commit -m "提示信息"

**撤销修改到git仓库的版本**
git checkout -- (files name)

**向暂存区一次性添加多个文件**（所有新增和修改过的）
git add .

**取消暂存区的指定（全部）文件**
git reset HEAD (要移除暂存区的文件名称)
全部文件用 git reset HEAD .

**跳过使用暂存区** 标准流程：工作——暂存——仓库   简化：工作——仓库
git commit -a -m "提示信息"

**移除文件**

1. 从仓库和工作区中同时移除对应文件
git rm -f (files name)
2.只从仓库中移除
git rm --cached (files name)

**查看提交历史**
按时间先后列出所有提交历史（最近在最上）
git log
只查看最近2条历史 减几看几条
git log -2
在一行上显示提交信息
git log -2 --pretty=oneline
在一行上展示历史信息，自定义格式
$ git log -2 --pretty=format:"%h|%an|%ar|%s"

根据ID回退之前版本
$ git reset --hard <CommitID>

在旧版中查找所有的ID
$ git reflog --pretty=oneline

**Git 忽略文件**
创建 .gitignore 里面用正则表达式表达要忽略的内容

**查看所有分支**
git branch

**创建新的分支**（仍然处于主分支）
git branch （分支名字）

**切换对应分支**(切换分支时应当回到master分支上)
git checkout （分支名字）

**创建新分支并立即到该分支上**
git checkout -b （分支名字）

**合并分支**（先回到主分支）
git merge （分支名字）
合并分支时相同文件不同内容造成冲突需要手动解决冲突再上传仓库

**删除分支(**不能处于该分支)
git branch -d （分支名字）

**本地分支推送到远程仓库**
git push -u origin (分支名):(远程仓库分支名，可不写)
之后再推送只需要git push

**查看远程仓库所有分支**
git remote show (远程仓库名字)

**跟踪分支**（从远程分支下载到本地）
git checkout (远程分支名字)
需要重命名
git checkout -b (本地分支名) (远程仓库名/远程分支名)

**拉取分支**（拉去当前分支最新代码，保持本地代码与远程代码一致）
git pull

**删除远程仓库**（指定名称）
git push origin --delete (远程分支名字)

**清空 git窗口**
clear