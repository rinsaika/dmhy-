# 說明
　　因為[DMHY 動漫花園 动漫花园：新番資源索引](https://share.dmhy.org/)一直不更新，之前[神人做的插件](https://greasyfork.org/zh-CN/scripts/403045-dmhy-bangumi-current-season/)也久不更新失靈了。所以起心動念自製一個新的油猴插件。<br><br>
　　製作過程中發現有人先做好了一個版本。但其效果我覺得沒有到我想要的，所以還是製作了一個自己的版本<br>
　　基本上都是透過ChatGPT、cohere大型語言模組完成油猴插件，再做細部修正<br>

# 安裝
>瀏覽器擴充功能，兩者擇一安裝即可
- [Tampermonkey 篡改猴](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- [Tampermonkey BETA 篡改猴測試版](https://chrome.google.com/webstore/detail/tampermonkey-beta/gcalenpjmijncebpfijmoaglllgpjagf)
>油猴腳本，以下兩者擇一安裝即可
- [GitHub 動態更新版](https://raw.githubusercontent.com/rinsaika/dmhy-/main/DMHY-ShinnBannGumi_Index.js)
  >GitHub版：將索引用外部連結的方式讀取，好處是使用者不再需要一直頻繁更新油猴插件，只有核心功能影響時，才需要更新。<br>(但是如果需要翻牆才能讀取GitHub的使用者就無法使用此方法)
  - 安裝流程
    - 上方連結為js檔案，將內容全選<kbd>Ctrl+A</kbd>、複製<kbd>Ctrl+C</kbd> (將整個檔案內文字複製)
    - 開啟瀏覽器 [油猴] → [新增腳本...]
      >此時會跳出預設的腳本內容，全部刪除
    - 最後將腳本貼上<kbd>Ctrl+V</kbd>，並保存<kbd>Ctrl+S</kbd>即可，未來油猴會自動判斷GitHub版本更新
      
- [GreasyFork 靜態更新版](https://greasyfork.org/zh-TW/scripts/493955-dmhy%E6%96%B0%E7%95%AA%E8%B3%87%E6%BA%90%E7%B4%A2%E5%BC%95-%E4%BF%AE%E6%AD%A3)
  >GreasyFork版：因GreasyFork不提供外部動態連結，所以我每次更新"新番索引"時，使用者都必須更新一次。才能顯示最新的索引<br>
  >壞處是我一更新，使用者也必須更新才可以<br>
  >好處是使用者可以更自由靈活更改自己需要的連結，可以進去編輯(編輯方式在文末)
  - 安裝流程
    - 點選上方連結，按<kbd>安裝腳本</kbd>即可
    - 使用此方法，建議將 [油猴] → [控制台(Dashboard)] →  [設定]分頁 → [腳本更新]選項的功能開啟
   

# 1.0版本效果
原本的樣子
![](https://raw.githubusercontent.com/rinsaika/dmhy-/main/%E5%8E%9F%E6%9C%AC.webp)

繁體瀏覽器 的顯示效果
![](https://raw.githubusercontent.com/rinsaika/dmhy-/main/%E7%B9%81%E9%AB%94.webp)

簡體瀏覽器 的顯示效果
![](https://raw.githubusercontent.com/rinsaika/dmhy-/main/%E7%B0%A1%E9%AB%94.webp)

# 2.0版本效果 (實際效果將配合 2024夏季索引)
增加了圖示支援，一般用於顯示獨佔配信的動畫使用，BL也特別標註起來(?)還特地製作了圖示😂<br>
![](https://raw.githubusercontent.com/rinsaika/dmhy-/main/img/2.0%E5%A2%9E%E5%8A%A0%E5%9C%96%E7%A4%BA%E9%A1%AF%E7%A4%BA.webp)

增加了日文原名懸浮視窗<br>
![](https://raw.githubusercontent.com/rinsaika/dmhy-/main/img/2.0%E7%95%B6%E6%BB%91%E9%BC%A0%E7%A7%BB%E5%8B%95%E5%88%B0%E8%B6%85%E9%80%A3%E7%B5%90%E6%99%82%EF%BC%8C%E9%A1%AF%E7%A4%BA%E6%97%A5%E6%96%87%E5%90%8D.webp)

將長久未更新的公告，切換成我的說明<br>
![](https://raw.githubusercontent.com/rinsaika/dmhy-/main/img/2.0%E4%BF%AE%E6%94%B9%E5%85%AC%E5%91%8A%E6%AC%84(%E8%AE%8A%E6%88%90%E6%88%91%E7%9A%84%E7%89%88%E6%9C%AC).webp)

# 索引的資料來源說明
> [!NOTE]
> 由於中港台各版本的翻譯混亂，加上各平台放映時間各有不同。更別提字幕組也可能有自己的翻譯版本。<br>
> "新番索引"的整合作業難度大幅提升。

* 之後依以下的流程，進行[新番索引]的整合
1. ①[animate Times：今期アニメの曜日別放送スケジュール一覧](https://www.animatetimes.com/tag/details.php?id=1392)<br>
   ②[アニメハック：新作・今期アニメ](https://anime.eiga.com/program/)<br>
   ③各動畫官網(我本人手動查詢...)
    >完全依照日版的放映時間來做排序，用來確認每期放送動畫
3. ①[巴哈姆特動畫瘋：週期表](https://ani.gamer.com.tw/)<br>
   ②巴哈姆特動畫瘋：每期的新番調查問卷(每次連結不同)
    >核對台版官方翻譯
4. ①[Anime List](https://acgntaiwan.github.io/Anime-List/)<br>
   ②其他(wiki，網路查詢等等)
    >台版翻譯的輔助網頁
5. ①[YuC's AnimeList](https://yuc.wiki/)<br>
   ②[bangumi.tv：每日放送](https://bgmlist.com/)
    >核對陸版翻譯
6. ①依據實際動畫組的翻譯版本作為陸版翻譯
    >繼續補完陸版翻譯
8. 其他
    >未來有做更動再作補充說明

# 已知問題
> [!WARNING]
> * 由於各動畫組取名、翻譯問題，可能導致索引的搜尋功能失敗
>    >目前由本人手動校正，盡量完善新番索引的搜尋功能
> * 資源不全的問題
>    >新番不見得都有資源。這樣還需要建立該索引嗎?<br>
>    >目前是仍然納入索引中，畢竟沒有資源不是我的問題，可以自己找(?)
> * 由於是<b><u>個人手動更新</u></b>，可能有停更的一天
>    >哪天遇到了更好用的網站可能就跳槽，直接放生動漫花園了

# [說明]自定義索引
其他功能都寫好了，索引更新的部分可以自己DIY

在 <code>dmhyEntries=[]</code> 的\[ \]裡面可以自己做修正，並保存<br>
樣式如下<br>

<code>{
  day: 2,
  nameJP: 'かつて魔法少女と悪は敵対していた。',
  nameTW: '曾經、魔法少女和邪惡相互為敵。',
  nameCN: '曾经、魔法少女和邪恶相互为敌。',
  link: 'https://' + hostname + '/topics/list?keyword=魔法少女和邪惡相互為敵'
},{
  day: 4,
  nameJP: '俺は全てを【パリイ】する～逆勘違いの世界最強は冒険者になりたい～',
  nameTW: '我要【招架】一切～反誤解的世界最強想成為冒險家～',
  nameCN: '',
  link: 'https://' + hostname + '/topics/list?keyword='
},</code>

- 簡單說明
- <code>day:</code> 填入數字01234567 對應 日一二三四五六其他 (注意0是週日；7是其他)
- <code>nameJP: ''</code>  ''裡為日文顯示文字(懸浮視窗)
- <code>nameTW: ''</code>  ''裡為繁體顯示文字
- <code>nameCN: ''</code>  ''里为简体显示文字
- <code>link: 'https://' + hostname + '/topics/list?keyword=列車' }</code> 前面都保持不動，keyword=後面的內容是查詢功能
- 如此一來就能撰寫自己的版本了，可在名字加入關鍵字([Netflix][bilibili][ABEMA][YouTube][BL][AnimeFesta])將自動顯示圖示

# 計畫
- [X] 下次版本更新，將在"週日"表格下方，新增一欄作為其他連結使用。
- [X] 版本號規格化處理 GreasyFork(2.202407v1)、GitHub(2.0)
     > 之後GreasyFork版本號採用"2.202407v1"的形式<br>
     > 2：表示油猴框架的更新 (GitHub是動態的，所以是2.0)<br>
     > 202407：表示新番索引的版本，每一次都使用年月份好辨別<br>
     > v1：表示索引的版本號
- [X] 考慮做一個切換按鈕，可以自由切換簡繁翻譯索引。但還在思考中
     > 替換了思考方式，依據使用者的瀏覽器簡繁，自動調整索引的翻譯
- [ ] 其他 (有任何問題，需求可以嘗試向我提出?? 能力範圍試試看)



