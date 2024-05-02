# README
因為 [DMHY新番資源索引](https://share.dmhy.org/) 一直不更新，所以透過AI撰寫了一個油猴插件<br><br>
在製作過程中發現有人先做好了一個版本。但其效果我覺得沒有到我想要的，所以還是製作了一個自己的版本<br>
基本上都是透過ChatGPT、cohere大型語言模組完成油猴插件，再做細部修正<br>

## 安裝
- [Tampermonkey 篡改猴](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) 或 [Tampermonkey BETA 篡改猴測試版](https://chrome.google.com/webstore/detail/tampermonkey-beta/gcalenpjmijncebpfijmoaglllgpjagf)
- 將我的[插件/使用者腳本]導入，即可
  - [GitHub 無須更新版](https://raw.githubusercontent.com/rinsaika/dmhy-/main/DMHY-ShinnBannGumi_Index.js)
    >GitHub版：將索引用外部連結的方式讀取，好處是使用者不再需要一直頻繁更新油猴插件
  - [GreasyFork 須要更新版](https://greasyfork.org/zh-TW/scripts/493955-dmhy%E6%96%B0%E7%95%AA%E8%B3%87%E6%BA%90%E7%B4%A2%E5%BC%95-%E4%BF%AE%E6%AD%A3)
    >GreasyFork版：因GreasyFork不提供外部動態連結，所以我每次更新索引，使用者都必須更新一次。<br>
    >建議將[油猴]-[設定]-[腳本更新]功能打開<br>
    >好處是使用者可以更自由靈活更改自己需要的連結，可以進去編輯
    
## 效果
原本的樣子
![](https://github.com/rinsaika/dmhy-/blob/main/%E5%8E%9F%E6%9C%AC.png)

更新之後
![](https://github.com/rinsaika/dmhy-/blob/main/%E6%9B%B4%E6%96%B0%E5%BE%8C.png)


來源
* 番组放送 https://bgmlist.com/
  * 用來確認每日放送動畫
* ACG Secrets.HK https://acgsecrets.hk/bangumi/
  * 用來確認翻譯名字
  
## 已知問題
* 由於各動畫組取名、翻譯問題，可能導致索引的搜尋功能失敗
* 新番索引為 <b><i>我本人手動更新</i></b> 還在用就會持續更新，沒在用會不更新了吧
