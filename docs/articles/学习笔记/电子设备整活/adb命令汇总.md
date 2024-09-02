# ADB 相关

## ADB 是什么？

`ADB`（全称`Android Debug Bridge`），安卓调试桥，是......


## ADB 安装

Google 官网：


## 连接前准备

对于一般的安卓设备（手机）来说，连接`ADB`前都需要先打开开发者选项下的`ADB 调试`。

## ADB 命令

```
# 查看adb设备
adb devices
```

```
# 用adb权限启动设备命令行
adb shell
```

```
# 从adb连接设备拉取文件到目标位置
adb pull <初始文件路径> <目标路径>
# 将文件发送到adb连接设备的目标路径
adb push <初始文件路径> <目标路径>
```

```
# 重启到recovery模式
adb reboot recovery
# 重启到fastboot模式
adb reboot fastboot
```

## Fastboot 设备驱动


## Fastboot 命令

```
fastboot devices
```

```
fastboot flashing unlock
fastboot oem unlock
```

```
# 刷入recovery镜像
fastboot flash recovery <recovery 镜像文件路径>
# 刷入boot镜像
fastboot flash boot <boot 镜像文件路径>
```

```
# 重启设备
fastboot reboot
# 重启设备至recovery模式
fastboot reboot recovery
```

