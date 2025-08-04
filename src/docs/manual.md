<p align="center">
  <a href=""><img src="/CGS_TP010411_010b.png"></a>
</p>

<div align="center">

# ティピィ Tippy Bot

_🧸 ねぇレイ、今日はどんなほんをさがしにきたの？ 🧸_

</div>

## 简介

🧸 Tippy Bot 是一个由 Shiona 开发的，具有查歌、查分等各种音游相关功能的机器人，由 Shiona 开发维护。官方交流群 `664630338`

> [!IMPORTANT] 重要
>
> - 以下所有指令均需要 **@提比** 后才能使用
> - `<>`表示的为 **可选参数** ，可根据需求填写
> - `[]`表示的为 **必选参数** ，必须填写才能使用
> - 在群聊或频道中键入 `/` 或手动 `@TippyBot` 即可快速唤起 bot 菜单，回车确认

## 目录

[[toc]]

## 基础指令

### 绑定账号

- 说明：查看绑定的查分器账号及相关说明
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="tip" text="频道私信" />
- 指令：`@提比不想睡觉` `/绑定账号`

> [!TIP] 提示
> 提比目前支持绑定`水鱼(Diving-Fish)`和`落雪(落雪咖啡屋)`作为`舞萌DX`和`中二节奏`的数据源\
> [点击前往 Diving-Fish 舞萌 DX | 中二节奏查分器](https://www.diving-fish.com/maimaidx/prober/)\
> [点击前往 落雪咖啡屋 maimai DX 查分器](https://maimai.lxns.net/)

::: details 点击显示详情
`/绑定账号` 会显示当前绑定的账号信息、偏好数据源及具体绑定账号的方法\
`/解绑水鱼` 会解除与`Diving-Fish`查分器账号的绑定\
`/解绑落雪` 会解除与`落雪咖啡屋`查分器账号的绑定
:::

### 设置数据源

- 说明：指定提比查询`舞萌DX` `中二节奏`玩家成绩时使用的数据源
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="tip" text="频道私信" />
- 指令：`@提比不想睡觉` `/[舞萌|中二]数据源` `[水鱼|落雪]`
- 用法示例：`@提比不想睡觉` `/舞萌数据源 水鱼 `

::: details 点击显示详情
`舞萌DX` 默认数据源为`Diving-Fish`\
`中二节奏` 默认数据源为`落雪咖啡屋`\
解除任何账号的绑定都会重置数据源到默认值
:::

### 今日运势

- 说明：查看今日运势及推荐歌曲
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="tip" text="频道私信" />
- 指令：`@提比不想睡觉` `/jrys`

### 提比帮我选

- 说明：提比会在你提供的选项中为你选择一个
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="tip" text="频道私信" />
- 指令：`@提比不想睡觉` `/roll` `<选项1>` `<选项2>` `...`
- 用法示例：`@提比不想睡觉` `/roll 打游戏 看电影 `

::: details 点击显示详情
若不给出任何选项，则返回一个 100 以内的随机数\
若仅给出一个整数，则返回 1~该整数范围内的一个随机整数
:::

### Vtuber 推荐

- 说明：提比会为你推荐一位 Vtuber
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="tip" text="频道私信" />
- 指令：`@提比不想睡觉` `看什么v`

## 小游戏相关

### Wordle

- 说明：开始一局 Wordle 小游戏
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="info" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="info" text="频道私信" />
- 指令：`@提比不想睡觉` `/wordle`

> [!IMPORTANT] 重要
> 提交答案需要 `@提比不想睡觉` 并输入"#"后拼写你的答案

### 猜单词

- 说明：开始一局猜单词小游戏
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="info" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="info" text="频道私信" />
- 指令：`@提比不想睡觉` `/guess` `<难度>`
- 用法示例：`@提比不想睡觉` `/guess 困难`

> [!IMPORTANT] 重要
>
> - 提交答案需要 `@提比不想睡觉` 并输入"#"后拼写你的答案
> - 如果不输入难度即可查看支持的难度列表

### 猜歌

- 说明：开始一局猜音游曲小游戏
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="info" text="QQ私聊" /> <Badge type="info" text="QQ频道" /> <Badge type="info" text="频道私信" />
- 指令：`@提比不想睡觉` `/guesssong` `<分类>`
- 用法示例：`@提比不想睡觉` `/guesssong maimai`

> [!IMPORTANT] 重要
>
> - 提交答案需要 `@提比不想睡觉` 并输入"#"后拼写你的答案
> - 如果不输入分类即可查看支持的分类列表

## 舞萌 DX 相关

### 舞萌 B50 / B40 / AP50

- 说明：查询您的 _舞萌 DX_ Best 50/Best 40/ALL PERFECT 50 成绩图
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="tip" text="频道私信" />
- 指令：`@提比不想睡觉` `/maib50`
- 指令：`@提比不想睡觉` `/maib40`
- 指令：`@提比不想睡觉` `/maiap50`

### 舞萌单曲成绩查询

- 说明：根据歌名的一部分、歌曲别名或 ID 快速查询所有 _舞萌_ 谱面成绩
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="tip" text="频道私信" />
- 指令：`@提比不想睡觉` `/score` `<部分歌名、别名或ID>`
- 用法示例：`@提比不想睡觉` `/score landscape`
- 用法示例：`@提比不想睡觉` `/score 三妖精`
- 用法示例：`@提比不想睡觉` `/score m11451`

### 舞萌成绩列表

- 说明：根据条件筛选 _舞萌_ 谱面成绩
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="tip" text="频道私信" />
- 指令：`@提比不想睡觉` `/scorelist` `<条件>`
- 用法示例：`@提比不想睡觉` `/scorelist lv14`
- 用法示例：`@提比不想睡觉` `/scorelist ap 2`

::: details 点击显示详情
不带任何参数地输入 `/scorelist` 可以查看所有支持的条件
:::

### 舞萌定数表

- 说明：查询 舞萌 DX 谱面定数表
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="tip" text="频道私信" />
- 指令：`@提比不想睡觉` `/舞萌定数表` `<日服>` `[难度]`
- 用法示例：`@提比不想睡觉` `/舞萌定数表 14+`

### 舞萌乐曲推荐

- 说明：随机为您推荐 _舞萌 DX_ 乐曲
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="tip" text="频道私信" />
- 指令：`@提比不想睡觉` `/mai什么` `<推分>`
- 用法示例：`@提比不想睡觉` `/mai什么`
- 用法示例：`@提比不想睡觉` `/mai什么推分`

### 舞萌段位表

- 说明：查询 _舞萌 DX_ 段位认定达成条件及自己的完成率
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="tip" text="频道私信" />
- 指令：`@提比不想睡觉` `/段位表` `<版本(默认国服当前版本)>[段位]`
- 用法示例：`@提比不想睡觉` `/段位表 真七段`
- 用法示例：`@提比不想睡觉` `/段位表 uni十段`

### 舞萌随机段位

- 说明：模拟一场 _舞萌 DX_ 段位认定中指定的随机段位模式
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="tip" text="频道私信" />
- 指令：`@提比不想睡觉` `/随机段位` `[段位]`
- 用法示例：`@提比不想睡觉` `/随机段位 expert上级`
- 用法示例：`@提比不想睡觉` `/随机段位 expert超上级`

### 舞萌随机成绩

- 说明：随机显示您的 _舞萌 DX_ 歌曲成绩
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="info" text="频道私信" />
- 指令：`@提比不想睡觉` `/sjcj` `<牛逼/丢人>` `<10>`
- 用法示例：`@提比不想睡觉` `/sjcj`
- 用法示例：`@提比不想睡觉` `/sjcj 牛逼 10`
- 用法示例：`@提比不想睡觉` `/sjcj 丢人`

### 舞萌区域查询

- 说明：根据关键词检索 _舞萌 DX_ 区域 ID
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="info" text="频道私信" />
- 指令：`@提比不想睡觉` `/asearch` `[关键词]`
- 用法示例：`@提比不想睡觉` `/asearch 咻哇`
- 用法示例：`@提比不想睡觉` `/asearch 天界区域`

### 舞萌区域详情

- 说明：根据区域 ID 查看区域奖励
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="info" text="频道私信" />
- 指令：`@提比不想睡觉` `/ainfo` `[区域ID]`
- 用法示例：`@提比不想睡觉` `/ainfo m150006`
- 用法示例：`@提比不想睡觉` `/ainfo m250003`

### 舞萌牌子进度查询

- 说明：查询指定版本 _舞萌 DX_ 成绩牌子获取进度
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="info" text="频道私信" />
- 指令：`@提比不想睡觉` `[牌子]进度`
- 用法示例：`@提比不想睡觉` `舞将进度`
- 用法示例：`@提比不想睡觉` `星舞舞进度`

### 舞萌称号查询

- 说明：根据关键词检索 _舞萌 DX_ 称号
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="info" text="频道私信" />
- 指令：`@提比不想睡觉` `/tsearch` `[关键词]`
- 用法示例：`@提比不想睡觉` `/tsearch muse`

### 舞萌服务器状态查询

- 说明：查看舞萌 DX 服务器当前是否正常
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="tip" text="频道私信" />
- 指令：`@提比不想睡觉` `/mai ping`

> [!TIP] 提示
> 此外，[查歌](#查歌)、[别名查歌](#别名查歌)、[歌曲详情](#歌曲详情)、[底分趋势](#底分趋势) 也适用于舞萌 DX

## 中二节奏相关

### 中二 B30

- 说明：查询您的 _中二节奏_ Best 30 成绩图
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="tip" text="频道私信" />
- 指令：`@提比不想睡觉` `/chub30 <查分器用户名>`
- 用法示例：`@提比不想睡觉` `/chub30`
- 用法示例：`@提比不想睡觉` `/chub30 maxscore`

### 中二单曲成绩查询

- 说明：根据歌名的一部分、歌曲别名或 ID 快速查询所有 _中二节奏_ 谱面成绩
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="tip" text="频道私信" />
- 指令：`@提比不想睡觉` `/cscore [部分歌名、别名或ID]`
- 用法示例：`@提比不想睡觉` `/cscore ptt`
- 用法示例：`@提比不想睡觉` `/cscore z317`

### 中二成绩列表 <Badge type="warning" text="测试版" />

- 说明：根据条件筛选 _中二_ 谱面成绩
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="tip" text="频道私信" />
- 指令：`@提比不想睡觉` `/cscorelist [条件]`
- 用法示例：`@提比不想睡觉` `/cscorelist aj`
- 用法示例：`@提比不想睡觉` `/cscorelist catastrophy`

::: details 点击显示详情
不带任何参数地输入 `/cscorelist` 可以查看所有支持的条件
:::

### 中二定数表

- 说明：查询 _中二节奏_ 谱面定数表
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="tip" text="频道私信" />
- 指令：`@提比不想睡觉` `/中二定数表 <日服>[难度]`
- 用法示例：`@提比不想睡觉` `/中二定数表 14+`

### 中二乐曲推荐

- 说明：随机为您推荐 _中二节奏_ 乐曲
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="tip" text="频道私信" />
- 指令：`@提比不想睡觉` `/秋什么`

> [!TIP] 提示
> 此外，[查歌](#查歌)、[别名查歌](#别名查歌)、[歌曲详情](#歌曲详情)、[底分趋势](#底分趋势) 也适用于中二节奏

## 音游相关查询

### 查歌

- 说明：根据关键词检索音游歌曲 ID
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="info" text="频道私信" />
- 指令：`@提比不想睡觉` `/search [关键词]`
- 用法示例：`@提比不想睡觉` `/search amazing`
- 用法示例：`@提比不想睡觉` `/search 林檎`

### 别名查歌

- 说明：根据歌曲别名检索音游歌曲 ID
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="info" text="频道私信" />
- 指令：`@提比不想睡觉` `[别名]是什么歌`
- 用法示例：`@提比不想睡觉` `如月车站是什么歌`

### 歌曲详情

- 说明：根据歌曲 ID 查看歌曲详情
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="info" text="频道私信" />
- 指令：`@提比不想睡觉` `/id [乐曲ID]`
- 用法示例：`@提比不想睡觉` `/id m834`
- 用法示例：`@提比不想睡觉` `/id u11458`

### 底分趋势

- 说明：显示您的 _舞萌|中二_ 底分随时间变化趋势图
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="tip" text="频道私信" />
- 指令：`@提比不想睡觉` `/trend <中二>`
- 用法示例：`@提比不想睡觉` `/trend`
- 用法示例：`@提比不想睡觉` `/trend 中二`

### 太鼓之达人歌曲快查 <Badge type="warning" text="测试版" />

- 说明：根据歌名的一部分快速查询歌曲信息和在曲目列表的位置
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="tip" text="频道私信" />
- 指令：`@提比不想睡觉` `/tk [部分歌名]`
- 用法示例：`@提比不想睡觉` `/tk idol`
- 用法示例：`@提比不想睡觉` `/tk 凛`

### BanG Dream 乐曲推荐

- 说明：随机为您推荐 _BanG Dream_ 乐曲
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="tip" text="频道私信" />
- 指令：`@提比不想睡觉` `/邦什么`

### Project Sekai 乐曲推荐

- 说明：随机为您推荐 _Project Sekai_ 乐曲
- 可用场景：<Badge type="tip" text="QQ群" /> <Badge type="tip" text="QQ私聊" /> <Badge type="tip" text="QQ频道" /> <Badge type="tip" text="频道私信" />
- 指令：`@提比不想睡觉` `/烤什么`
