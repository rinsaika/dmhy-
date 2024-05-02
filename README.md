# 說明
因為 [動漫花園 DMHY新番資源索引](https://share.dmhy.org/) 一直不更新，所以透過AI撰寫了一個油猴插件<br><br>
在製作過程中發現有人先做好了一個版本。但其效果我覺得沒有到我想要的，所以還是製作了一個自己的版本<br>
基本上都是透過ChatGPT、cohere大型語言模組完成油猴插件，再做細部修正<br>

## 安裝
- [Tampermonkey 篡改猴](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) 或 [Tampermonkey BETA 篡改猴測試版](https://chrome.google.com/webstore/detail/tampermonkey-beta/gcalenpjmijncebpfijmoaglllgpjagf)
>以下兩者擇一安裝即可
- [GitHub 動態更新版](https://raw.githubusercontent.com/rinsaika/dmhy-/main/DMHY-ShinnBannGumi_Index.js)
  >GitHub版：將索引用外部連結的方式讀取，好處是使用者不再需要一直頻繁更新油猴插件，只有核心功能影響時，才需要更新。<br>(但是如果需要翻牆才能讀取GitHub的使用者就無法使用此方法)
  - 安裝流程
    - 上方連結為js檔案，全選<kbd>Ctrl+A</kbd>、複製<kbd>Ctrl+C</kbd> (將整個檔案內文字複製)
    - 開啟[油猴] → [新增腳本...]
      >此時會跳出預設的腳本內容，全部刪除
    - 最後貼上<kbd>Ctrl+V</kbd>，並保存<kbd>Ctrl+S</kbd>即可，未來油猴會自動判斷版本更新
- [GreasyFork 靜態更新版](https://greasyfork.org/zh-TW/scripts/493955-dmhy%E6%96%B0%E7%95%AA%E8%B3%87%E6%BA%90%E7%B4%A2%E5%BC%95-%E4%BF%AE%E6%AD%A3)
  >GreasyFork版：因GreasyFork不提供外部動態連結，所以我每次更新"新番索引"時，使用者都必須更新一次。才能顯示最新的索引<br>
  >壞處是我一更新，使用者也必須更新才可以<br>
  >好處是使用者可以更自由靈活更改自己需要的連結，可以進去編輯(編輯方式在文末)
  - 安裝流程
    - 點選上方連結，按<kbd>安裝腳本</kbd>即可
    - 使用此方法，建議將 [油猴] → [控制台(Dashboard)] →  [設定]分頁 → [腳本更新]選項的功能開啟
   

## 效果
原本的樣子
![](https://github.com/rinsaika/dmhy-/blob/main/%E5%8E%9F%E6%9C%AC.png)

更新之後
![](https://github.com/rinsaika/dmhy-/blob/main/%E6%9B%B4%E6%96%B0%E5%BE%8C.png)


## 索引的資料來源
* 番组放送 https://bgmlist.com/
  >用來確認每日放送動畫
* ACG Secrets.HK https://acgsecrets.hk/bangumi/
  >用來確認翻譯名字 (中港台各自翻譯都不大一樣...有點...emmm)
* 其他
  >來自我手動查找

## 已知問題
* 由於各動畫組取名、翻譯問題，可能導致索引的搜尋功能失敗
  >目前已測試，盡量完善搜尋功能
* 新番索引為 <b><i>我本人手動更新</i></b> 還在用就會持續更新，沒在用會不更新了吧



# 可自由手動更新
其他功能都寫好了，唯一常常變動的就是 索引更新的部分

<code>const dmhyEntries = [ <br>
{day:1, name: '無職轉生 S2', link: 'https://' + hostname + '/topics/list?keyword=無職轉生' },<br>
{day:6, name: '良禽不擇木', link: 'https://' + hostname + '/topics/list?keyword=烏は主を選ばない' },<br>
{day:0, name: '龍族', link: 'https://' + hostname + '/topics/list?keyword=龍族' },<br>
]</code>

- 簡單說明
- <code>day:</code> 填入數字0123456 對應 日一二三四五六
- <code>name: ''</code>  ''裡的文字 是連結的文字
- <code>link: 'https://' + hostname + '/topics/list?keyword=龍族' }</code> 前面都保持不動，keyword=後面的內容是查詢功能
- 如此一來就能撰寫自己的版本了
