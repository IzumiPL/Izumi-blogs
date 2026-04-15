---
title: 在Avalonia添加动画效果
published: 2025-10-15
description: '给控件添加动画效果'
image: ''
tags: ["Avalonia", "CSharp", "Animation"] 
category: 'Avalonia'
draft: false 
lang: ''
pinned: false
author: Mikuas
---

### 添加背景颜色过渡动画

```axaml

<Setter Property="Transitions">
    <Transitions>
    // BrushTransition
    <BrushTransition 
    Property="Background" // 背景颜色属性, 是Brush都可以用BrushTransition
    Duration="0:0:0.5"  // 动画时长
    />
    </Transitions>
</Setter>

```

### 添加圆角过渡动画

```axaml
<Setter Property="Transitions">
    <Transitions>
    // TickenssTransition 
    <ThicknessTransition 
    Property="CornerRadius" // 圆角属性, 是Thickness都可以用ThicknessTransition
    Duration="0:0:0.5"  // 动画时长
    />
    </Transitions>
</Setter>

```


### 添加Size动画

```axaml
<Setter Property="Transitions">
    <Transitions>
    // DoubleTransition 
    <DoubleTransition 
    Property="Width" // 大小属性, 是Double都可以用DoubleTransition
    Duration="0:0:0.5"  // 动画时长
    />
    </Transitions>
</Setter>
```

### 添加变换动画

```axaml
<Setter Property="RenderTransformOrigin" value="50%, 50%"> // 设置变换原点, 50% 50% 为中心
<Setter Property="Transitions">
    <Transitions>
        <TransformOperationsTransition
            Property="RenderTransform"
            Duration="0:0:0.5"  // 动画时长
        />
    </Transitions>
</Setter>

<Setter Property="RenderTransform" Value="scale(0.7, 1)"/>
```