// ==UserScript==
// @name         DMHY新番資源索引 修正
// @namespace    https://github.com/rinsaika/dmhy-
// @version      0.1
// @description  修改DMHY新番資源索引，修正為目前播映中動畫
// @author       Saika
// @match        https://share.dmhy.org/*
// @grant        none
// @icon      https://share.dmhy.org/favicon.ico
// @icon64      https://share.dmhy.org/favicon.ico
// ==/UserScript==

(function() {
    'use strict';

    // 選擇包含新番索引的表格
    const table = document.querySelector('table.jmd');
    if (!table) {
        console.error('未找到新番索引表格');
        return;
    }

    // 獲取當前日期
    const today = new Date();
    const todayDay = today.getDay();

    // 刪除 <tbody> 標籤
    const tbody = table.querySelector('tbody');
    if (tbody) {
        tbody.remove();
    }

    // 調整 daysOfWeek 陣列順序和日文
    const daysOfWeek = ['日（日）', '一（月）', '二（火）', '三（水）', '四（木）', '五（金）', '六（土）'];

    // 定義要插入的多個連結的數組
    //day:0~6 表示日到六 name:表示連結名字   link: 表示連結內榮
    const dmhyEntries = [
      {day:0, name: '鬼滅之刃 柱訓練篇', link: 'https://share.dmhy.org/topics/list?keyword=鬼滅之刃' },
{day:0, name: '無職轉生Ⅱ～到了異世界就拿出真本事～ 後半季', link: 'https://share.dmhy.org/topics/list?keyword=無職轉生' },
{day:0, name: '蔚藍檔案 The Animation', link: 'https://share.dmhy.org/topics/list?keyword=蔚藍檔案' },
{day:0, name: '轉生貴族憑鑑定技能扭轉人生', link: 'https://share.dmhy.org/topics/list?keyword=轉生貴族憑鑑定技能扭轉人生' },
{day:0, name: '老夫老妻重返青春', link: 'https://share.dmhy.org/topics/list?keyword=老夫老妻重返青春' },
{day:0, name: '夜櫻家大作戰', link: 'https://share.dmhy.org/topics/list?keyword=夜櫻家大作戰' },
{day:0, name: '吹響吧！上低音號 3', link: 'https://share.dmhy.org/topics/list?keyword=吹響吧！上低音號' },
{day:0, name: '戰隊大失格', link: 'https://share.dmhy.org/topics/list?keyword=戰隊大失格' },
{day:0, name: '死神少爺與黑女僕 第三季', link: 'https://share.dmhy.org/topics/list?keyword=死神少爺與黑女僕' },
{day:0, name: '新幹線戰士：Change the World', link: 'https://share.dmhy.org/topics/list?keyword=新幹線戰士' },
{day:0, name: '吸血鬼男子宿舍', link: 'https://share.dmhy.org/topics/list?keyword=吸血鬼男子宿舍' },
{day:0, name: '秘密的偶像公主', link: 'https://share.dmhy.org/topics/list?keyword=Himitsu no AiPri' },
{day:0, name: '明明是個礙事配角，卻被王子給寵愛了。', link: 'https://share.dmhy.org/topics/list?keyword=明明是個礙事配角，卻被王子給寵愛了。' },
{day:1, name: '末班列車去哪裡?', link: 'https://share.dmhy.org/topics/list?keyword=Shuumatsu Train' },
{day:1, name: '狼與辛香料 merchant meets the wise wolf', link: 'https://share.dmhy.org/topics/list?keyword=狼與辛香料' },
{day:1, name: '轉生為第七王子，隨心所欲的魔法學習之路', link: 'https://share.dmhy.org/topics/list?keyword=轉生為第七王子，隨心所欲的魔法學習之路' },
{day:1, name: '從Lv2開始開外掛的前勇者候補過著悠哉異世界生活', link: 'https://share.dmhy.org/topics/list?keyword=從Lv2開始開外掛的前勇者候補過著悠哉異世界生活' },
{day:1, name: '神明渴求著遊戲。', link: 'https://share.dmhy.org/topics/list?keyword=神明渴求著遊戲。' },
{day:1, name: '被稱為廢物的原英雄，被家裡流放後隨心所欲地活下去', link: 'https://share.dmhy.org/topics/list?keyword=Dekisokonai||出来損ない||被称为废物' },
{day:1, name: '我回來了、歡迎回家', link: 'https://share.dmhy.org/topics/list?keyword=我回來了、歡迎回家' },
{day:1, name: '月光下的異世界之旅 第二幕', link: 'https://share.dmhy.org/topics/list?keyword=月光下的異世界之旅 第二幕' },
{day:2, name: 'Unnamed Memory 無名記憶', link: 'https://share.dmhy.org/topics/list?keyword=無名記憶' },
{day:2, name: '失憶投捕', link: 'https://share.dmhy.org/topics/list?keyword=失憶投捕' },
{day:2, name: 'RINKAI！女子競輪', link: 'https://share.dmhy.org/topics/list?keyword=RINKAI！女子競輪' },
{day:2, name: '刀劍亂舞 迴 -虛傳 燃燒本能寺-', link: 'https://share.dmhy.org/topics/list?keyword=刀劍亂舞' },
{day:2, name: 'YouTu貓 新作動畫', link: 'https://share.dmhy.org/topics/list?keyword=YouTu貓' },
{day:3, name: '為美好的世界獻上祝福！3', link: 'https://share.dmhy.org/topics/list?keyword=為美好的世界獻上祝福！3' },
{day:3, name: '聲優廣播的幕前幕後', link: 'https://share.dmhy.org/topics/list?keyword=聲優廣播的幕前幕後' },
{day:3, name: '約會大作戰Ⅴ', link: 'https://share.dmhy.org/topics/list?keyword=約會大作戰' },
{day:3, name: '王牌酒保 Glass of God', link: 'https://share.dmhy.org/topics/list?keyword=王牌酒保 Glass of God' },
{day:3, name: '怪異與少女與神隱', link: 'https://share.dmhy.org/topics/list?keyword=怪異與少女與神隱' },
{day:3, name: '格鬥實況', link: 'https://share.dmhy.org/topics/list?keyword=格鬥實況' },
{day:3, name: '小哥斯拉的逆襲 第二季', link: 'https://share.dmhy.org/topics/list?keyword=小哥斯拉的逆襲' },
{day:4, name: 'Re:Monster', link: 'https://share.dmhy.org/topics/list?keyword=Re Monster' },
{day:4, name: '搖曳露營△ 第3季', link: 'https://share.dmhy.org/topics/list?keyword=搖曳露營' },
{day:4, name: '怪人的沙拉碗', link: 'https://share.dmhy.org/topics/list?keyword=怪人的沙拉碗' },
{day:4, name: '身為魔王的我娶了奴隸精靈為妻，該如何表白我的愛？', link: 'https://share.dmhy.org/topics/list?keyword=身為魔王的我娶了奴隸精靈為妻，該如何表白我的愛？' },
{day:4, name: '花野井同學與戀愛病', link: 'https://share.dmhy.org/topics/list?keyword=花野井同學與戀愛病' },
{day:4, name: 'WIND BREAKER—防風少年—', link: 'https://share.dmhy.org/topics/list?keyword=防風少年' },
{day:4, name: '迷宮飯', link: 'https://share.dmhy.org/topics/list?keyword=迷宮飯' },
{day:4, name: '福星小子 第2季', link: 'https://share.dmhy.org/topics/list?keyword=福星小子' },
{day:5, name: '關於我轉生變成史萊姆這檔事 第3季', link: 'https://share.dmhy.org/topics/list?keyword=關於我轉生變成史萊姆這檔事' },
{day:5, name: '魔法科高中的劣等生 第3季', link: 'https://share.dmhy.org/topics/list?keyword=魔法科高中的劣等生' },
{day:5, name: 'GIRLS BAND CRY', link: 'https://share.dmhy.org/topics/list?keyword=GIRLS BAND CRY' },
{day:5, name: '魔王學院的不適任者 第二季 第二部份', link: 'https://share.dmhy.org/topics/list?keyword=魔王學院的不適任者' },
{day:5, name: '極速星舞', link: 'https://share.dmhy.org/topics/list?keyword=極速星舞' },
{day:5, name: '星際莊的戀愛日記', link: 'https://share.dmhy.org/topics/list?keyword=星際莊的戀愛日記' },
{day:5, name: 'Love Live！虹咲學園學園偶像同好會 短篇動畫 2', link: 'https://share.dmhy.org/topics/list?keyword=Love Live' },
{day:6, name: '怪獸8號', link: 'https://share.dmhy.org/topics/list?keyword=怪獸8號' },
{day:6, name: '夜晚的水母不會游泳', link: 'https://share.dmhy.org/topics/list?keyword=夜晚的水母不會游泳' },
{day:6, name: 'THE NEW GATE', link: 'https://share.dmhy.org/topics/list?keyword=THE NEW GATE' },
{day:6, name: '恰如細語般的戀歌', link: 'https://share.dmhy.org/topics/list?keyword=恰如細語般的戀歌' },
{day:6, name: '我的英雄學院 第七季', link: 'https://share.dmhy.org/topics/list?keyword=我的英雄學院' },
{day:6, name: '黑執事 寄宿學校篇', link: 'https://share.dmhy.org/topics/list?keyword=黑執事' },
{day:6, name: '單人房、日照一般、附天使。', link: 'https://share.dmhy.org/topics/list?keyword=單人房、日照一般、附天使。' },
{day:6, name: '隔壁的妖怪鄰居', link: 'https://share.dmhy.org/topics/list?keyword=隔壁的妖怪鄰居' },
{day:6, name: '蜻蛉高球', link: 'https://share.dmhy.org/topics/list?keyword=蜻蛉高球' },
{day:6, name: '烏鴉不擇主', link: 'https://share.dmhy.org/topics/list?keyword=烏鴉不擇主' },
{day:6, name: '殺手寓言', link: 'https://share.dmhy.org/topics/list?keyword=殺手寓言' },
{day:6, name: 'SHIBUYA♡HACHI', link: 'https://share.dmhy.org/topics/list?keyword=SHIBUYA HACHI' },
{day:6, name: 'Kumarba', link: 'https://share.dmhy.org/topics/list?keyword=Kumarba' },
    ];

    const newRows = daysOfWeek.map((day, index) => {
        const newRow = document.createElement('tr');
        const newDay = document.createElement('th');
        newDay.innerText = `週${day}`;
        const newAnimeList = document.createElement('td');

         // 如果日期是今天，添加类名
        if (day === daysOfWeek[todayDay]) {
            newRow.classList.add('today');
        }
          // 如果日期是昨天或明天，添加类名
        else if (day === daysOfWeek[(todayDay + 1) % 7] || day === daysOfWeek[(todayDay + 6) % 7]) {
            newRow.classList.add('odd');
        }else{
             newRow.classList.add('even');
        };

        // 遍歷條目，如果今天是指定的星期，則插入超連結
        dmhyEntries.forEach(entry => {
            if (entry.day === index) {
                const newAnimeLink = document.createElement('a');
                newAnimeLink.href = entry.link;
                newAnimeLink.textContent = entry.name;
                newAnimeList.appendChild(newAnimeLink);
            }
        });

        newRow.appendChild(newDay);
        newRow.appendChild(newAnimeList);
        return newRow;
    });

    // 在表格中添加新行
    newRows.forEach(newRow => table.appendChild(newRow));

})();
