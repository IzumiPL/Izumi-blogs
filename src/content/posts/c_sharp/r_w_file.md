---
title: 使用C#读取,写入文件
published: 2025-10-15
description: '文件读取写入'
image: ''
tags: ["CSharp", "File"] 
category: 'CSharp'
draft: false 
lang: ''
pinned: false
author: Mikuas
---

### 通过StreamReader读取文件
```csharp
// See https://aka.ms/new-console-template for more information

using System;
using System.IO;
using System.Text;

namespace ConsoleTest;

class Program

{
    public static void Main(string[] args)
    {
        string path = @"C:\write.py";
        
        // 通过StreamReader读取文本文件
        using (StreamReader reader = new StreamReader(
                   path, // 文件路径
                   Encoding.UTF8        // 编码格式
                   ))
        {
            while (!reader.EndOfStream)
            {
                Console.WriteLine(reader.ReadLine());
                // Console.WriteLine(reader.ReadLineAsync());
                // Console.WriteLine(reader.ReadToEnd());
            }
        }
    }
}

```

### 通过StreamWriter写入文件
```csharp
// 通过StreamWrite写入
using (StreamWriter sw = new StreamWriter(
            Path.Combine(path, "sw.txt"),
            false, // 追加
            System.Text.Encoding.UTF8
        ))
{
    sw.Write("Hello\nWorld!\nHello\nCSharp\n");
    sw.WriteLine("Hello World!\n");
}
```

### 通过FileStream读取文件字节流
```csharp
// 通过FileStream读取任意文件字节流
using (var file = new FileStream(
            path,
            FileMode.Open, // 模式
            FileAccess.Read
            ))
{
    byte[] buffer = new byte[file.Length];
    
    // 读取内容到缓冲区
    int bytesRead = file.Read(buffer, 0, buffer.Length);

    foreach (byte b in buffer)
    {
        Console.WriteLine(b);
    }

    Console.WriteLine(bytesRead);
}
```

### 通过字节流写入文件
```csharp
// 通过字节流写入文件
using (var file = new FileStream(@"C:\Projects\C#\ConsoleTest\ConsoleTest\test.txt",
            FileMode.Append,
            FileAccess.Write
            ))
{
    string tem = "Hello World\nNew Line\nHello CSharp\n";
    byte[] data = Encoding.UTF8.GetBytes(tem);
    
    file.Write(data, 0, data.Length);
}
return;

```

### 通过File读取,写入文件
```csharp
string path = @"C:\Projects\C#\ConsoleTest\ConsoleTest\test.txt";

// 通过File读取,写入文件
var content = File.ReadAllText(path);

Console.WriteLine(content);

// 读取每一行
var lines = File.ReadAllLines(path);
foreach (var line in lines)
{
    Console.WriteLine(line);
}

// 写入文件
File.WriteAllText(path, "Hello World\nNew Line\nHello CSharp\n");
```