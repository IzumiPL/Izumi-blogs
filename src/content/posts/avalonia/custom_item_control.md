---
title: 在Avalonia自定义ItemControl内容
published: 2026-03-08
description: 'Avalonia自定义ItemControl内容'
image: ''
tags: ["Avalonia", "UI", "CSharp", "AXAML"]
category: 'Avalonia'
draft: false 
lang: ''
pinned: false
author: Mikuas
---

### 自定义ItemControl

```axaml

<ItemsControl ItemsSource="{TemplateBinding ItemsSource}">
<ItemsControl.ItemsPanel>
// 自定义ItemControl布局
    <ItemsPanelTemplate>
    <UniformGrid
        HorizontalAlignment="Center"
        VerticalAlignment="Top"
        ColumnSpacing="8"
        Columns="3"
        RowSpacing="5"
        Rows="4"/>
    </ItemsPanelTemplate>
</ItemsControl.ItemsPanel>
<ItemsControl.ItemTemplate>
// 自定义ItemControl的每一个Item
    <DataTemplate x:DataType="models:VoiceItem"> // 指定数据模型
    <controls:VoiceItem
        // 绑定model:VoiceItem里的 Title, BackgroundImage, CharacterName
        Title="{Binding Title}"
        BackgroundImage="{Binding BackgroundImage}"
        CharacterName="{Binding CharacterName}"
        // 绑定父类的Command命令
        Command="{Binding $parent[controls:VoiceItemPanel].Command}"
        // 绑定数据为自己
        CommandParameter="{Binding}"
        DeleteCommand="{Binding $parent[controls:VoiceItemPanel].DeleteCommand}"
        MoveCommand="{Binding $parent[controls:VoiceItemPanel].MoveCommand}"
        Text="{Binding Text}"/>
    </DataTemplate>
</ItemsControl.ItemTemplate>
</ItemsControl>

```
