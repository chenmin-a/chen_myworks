请仔细看这个文件！！！

# chen_myworks
1.克隆仓库.
  选择你要存放仓库的位置 例如： D盘  直接在D盘空白处点击鼠标右键 然后选择 Git bash here
  
 $ git clone git@github.com:chenmin-a/chen_myworks.git(这里是仓库地址）
 
2.克隆完毕 创建key
 $ ssh-keygen
如果已经存在key 就不用再创建，直接按照下面步骤走：

	key文件一般存放在(/c/Users/Administrator/.ssh/...）
    id_rsa.pub 文件
  
	打开该文件将里面内容整体复制，然后打开github并添加到右上角头像 ——>  Settings ——> SSH and GPG keys ——> New SSH key

3.配置sourceTree

  左上角 克隆/新建 → 添加工作副本 
  
  这里的【工作副本路径】就是上述第一步克隆仓库后生成的仓库文件夹 然后点击确定即可

4.git 分支工作

	（1） 双击master分支 切换到当前主分支（master分支是仓库主分支，分为本地master和远程master），在本地master上点击上方导航栏的【分支】按钮；新建属于自己的开发分支 例如：chenmin 点击确定后自动切换到新建的分支上去，这个分支是基于master新建的分支，所以这个分支上的文件都是master分支上最新的；




启服务:
http-server

浏览器直接打开端口 127.0.0.1:8080
