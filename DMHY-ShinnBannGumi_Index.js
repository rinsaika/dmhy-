// ==UserScript==
// @name         DMHY新番資源索引 修正(GitHub版)
// @namespace    https://github.com/rinsaika/dmhy-
// @version      0.5
// @description  修改DMHY新番資源索引，修正為目前播映中動畫
// @author       Saika
// @match        https://share.dmhy.org/*
// @match        https://dmhy.b168.net/*
// @match        https://dmhy.org/*
// @grant        none
// @icon         https://share.dmhy.org/favicon.ico
// @icon64       https://share.dmhy.org/favicon.ico
// @license      No Redistribution
// @require      https://raw.githubusercontent.com/rinsaika/dmhy-/main/dmhy_entries.js
// @updateURL    
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
    //動態更新 索引

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
