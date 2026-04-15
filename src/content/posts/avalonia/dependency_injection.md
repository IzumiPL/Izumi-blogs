---
title: 在Avalonia桌面应用程序使用依赖注入
published: 2026-02-08
description: '在Avalonia桌面应用程序使用依赖注入'
image: ''
tags: ["Avalonia", "UI", "CSharp", "Dependency Injection"]
category: 'Avalonia'
draft: false 
lang: ''
pinned: false
author: Mikuas
---


### 安装NuGet包

```bash
dotnet add package Microsoft.Extensions.DependencyInjection
```

### 初始化容器

```csharp
public static ServiceProvider? ServiceProvider; { get; private set; }

public void Init()
{
    ServiceProvider = Register().BuildServiceProvider();
}

public ServiceCollection Register()
{
    var serivces = new ServiceCollection();

    // 生命周期
    // 添加单例
    serivces.AddSingleton<MainWindow>();
    services.AddSingleton<IAudioService, AudioService>();

    // 每次获取都初始化一个新实例
    serivces.AddTransient<MainWindow>();
}

```
