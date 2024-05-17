// ==UserScript==
// @name         DMHY新番資源索引 修正(GitHub版)
// @namespace    https://github.com/rinsaika/dmhy-
// @version      3.1
// @description  修改DMHY新番資源索引，修正為目前播映中動畫，安裝完GitHub版後，就不需要一直更新了。
// @author       Saika
// @match        https://www.dmhy.org/*
// @match        https://share.dmhy.org/*
// @match        https://dmhy.b168.net/*
// @match        https://dmhy.org/*
// @match        https://dmhy.anoneko.com/*
// @match        https://dmhy.gate.flag.moe/*
// @grant        none
// @icon         https://share.dmhy.org/favicon.ico
// @icon64       https://share.dmhy.org/favicon.ico
// @license      No Redistribution
// @require      https://raw.githubusercontent.com/rinsaika/dmhy-/main/dmhy_entries.js
// @updateURL    https://raw.githubusercontent.com/rinsaika/dmhy-/main/DMHY-ShinnBannGumi_Index.js
// @downloadURL  https://raw.githubusercontent.com/rinsaika/dmhy-/main/DMHY-ShinnBannGumi_Index.js
// ==/UserScript==

//1天更新一次dmhy_entries.js
(function() {
    function loadScript() {
        var script = document.createElement('script');
        script.src = 'https://raw.githubusercontent.com/rinsaika/dmhy-/main/dmhy_entries.js?timestamp=' + new Date().getTime();
        document.head.appendChild(script);
    }

    loadScript();
    setInterval(loadScript, 24 * 60 * 60 * 1000); // 每24小时更新一次
})();



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
    const daysOfWeek = ['週日（日）', '週一（月）', '週二（火）', '週三（水）', '週四（木）', '週五（金）', '週六（土）', '其他'];

    // 定義要插入的多個連結的數組

    //外部連結 動態更新 索引

    // Base64 圖片數據(目前為Netflix 跟 Disney+)
    const base64img_Netflix = 'UklGRmADAABXRUJQVlA4WAoAAAAQAAAALwAALwAAQUxQSDYBAAABkFvbtmo3+4GYUuYKmBlDroAjjlh6BchUBUcqwGznquEXYKZ3YRs/7MhhREwA/lmMU6b803IBIRBhhIZ//uAlipFzMRL++IvjI0Di8h/kpzoECkkW3EUkZfkcoZTj+35ESjS8QCxl+bYGsRIdR1AsZXkLsZRnpiKQIrkMLccncpkOjCnRcgeTUobXGJbyTJs7pWi43qPl+Wxci3x/SKv144ZeK8v/Dp4337UsD99rGY4/pdfqWaPR6mxK6aVGcE0jNYkdWqkxdGTolEaAJ3JLzFYiqMjQS8W4opUqwgidVIzqN7RKUYwLGqkIfe/oCnSZHUI8py1QkkOEXfoCXfK7c9aabxxGhAB1H31qrHXue74S/nscEQA84b+T/JylTx/dO9lenRmvQvBH7cT86sbR7ftPeZoNVlA4IAQCAAAQDACdASowADAAAMASJbADIGACGh6r+EHOZb6mDvUN+V/kv6zfwDIAcy56ovIA62v0AP4B/gPTS9mn9gP1u9rEsTX9V428wNcZZhj2f1OqqxcF21xB2bNX2JLDSrqeWE/LIU7vTAkTI4AA/v/+Tl7+M7rwsH/97teb/sTY9s3BtKvONEuOAQUGTXA/r21wGpyEDU/oZAzvzzOpZX/febpyD6AfZiv97In/5KvM5i+8bGPc7O5FH62ZqMPobbbso6MAotpnPCIc4DqK/ryqyarhZEgfADV+0eJ4PqnbnROJ05/LuY+5ZdG9a1/47HPD2Yrl995+G/zH8h0FaqfD316YL//mFWnPMeXHH4ehnx+tal8tfPj9a1Lyo4K7QBvoofti7zZWdzpWFJnuLmpV5xBIQLWXouMZjP0+kAPyWmIuWitiImBMnOQtq4Xx0eIzwICuUxihzQ1/8qc4XLM/nl/1dSnWb/XtyWFjNQqc5Lmsx0eVf3AnoB9GGyRKnMRNBg+0XoEd1qVG66j2bI+/iKnAlgtPxri35k/AtqI8e9O/BkYW0hqicvzhD/pW9/2GfUYGeT/9KyhmXfWn9zdX2QQePdsmYbEKYFBxLtM9QL5IvP3T8q5+ljuX8LdFbvf9xomUgLy+P5te1hJzR9hiqUhloUFQ6Y2GqSfAbIWKgvTm2B+ogAA=';
    const base64img_Disney = 'UklGRsAEAABXRUJQVlA4WAoAAAAQAAAALwAALwAAQUxQSBgDAAABkAVJsmlbc87d5+rZtm3btm3btm3btm3btv3etc6uj83n34iYAPkvVOLlrNyq99DhA7o0LJkhlvLTUnTeePtLmIrWHfTu6oYBZRIpP6PEDRXLQfdXt8rgaVfKK+rHW0e3rVu9cdfx6y/93BrA/XpT40QOW3qHH2maxEdxOj1cvrFTFmo8bu+zUHTDbo/JrtjQ/qP/8+pi2jtFtalXAtB9OyuHhyWvnLVrJjAnIo7YZabdCUP7bmpaK7Y7EjXZ5Yf2Qcdov4SI+JZZ+x0gdFv2X0TEu+yuEIDHjV0/J0k2p55IlJZ3AfxGRv0pE18UNBJJuywYCF8c9ydEPsEKxYT4dngDqBvi25fsGY+TmRFHqZuAuj6ObXm+EVjSlEj204A6L7Jd5UNRW1iQdKeA0IEeNjV0Q18rku068LWaTR2AEZak7HvgSnJ7egGL0qVPmSCaYsbRPwIY77TklbJir9NAwLt3rx6c3zK2TmqXnsQ+BrzMas6VucfO5yGYD3+xrkYUHakTDIwyoxRd/lbFzqAtmXSiHwMuxzOKPf4zgDvwcyDw8daTD4FuHTibTCO9gO9lDCIvV92fLq4c0KBEjg3A0jhJMpdoNn7vs1CAvjpF/CCiu0HlH/tbZ4/hFBHHImCRQ7TeKWos/gErnZq0b4BJBh0uxRV9x2JguZ6IRDkEY0TnLTDVoMid0gbOFcBqp0HCoT+4l1mniB+4+xp4LX1UymAlsMHDoOPbz0eLiW5/wK+CgaS88KqBS+NYCmxVDHzTZ4suuomvAhfjG0nOq/4TEmgWATuNTHpNVkHtJ2ZznFPP1vQVWQjsc1nyGRgEXExkSlJtigjcUiX6bOCQl5VU84OBr9XFYvRBHwk8dQs44mPKlbbPXRUI7q9YEY8SB0LR3iicKJqnorh8YqUs1nn9SzfA9wHeYmP0lufCAPfXR+f2b9+26+jVF/4qWvVqTUXsjbUWOyPuD0sqtvcDQgNUMyHPt7ZO6hD764bD8dKd5+4+e/PuncuHlvWvnNJTfmqyyzBWxOEZNU78eDG9HfLzs/btkED+XwFWUDggggEAADAKAJ0BKjAAMAA+LRCGQqGhDVIADAFiWwAnTlBVB54TXnMvwtkq9QD/SewDxOekB5gP2k9Z70HegB/XOoM9ADyxv2v+C39xv289pgGjaG0rjdL8KrB7JWv5AAD+96KBbt2SCwlOy/GSbdjzD/FofKFN0rvoFSO2fm9+ejSC7PFLb2hDBOmV4vdw23hYnv9YQqghESZzoakir01dBXm7Y3/reYzDwfj+pFH//90XdB7YQK8jAisl4kk1gr3ywoQ5f/s3LMSJb9DvnBNlxMKvC6YiEsXOpHmbyXIizgnecHY4QMPcZVEOrz3M/QzlSNPIoXxjCOydGuIGfPvlJ9L7UUZj/gB5F4jzFm1hBcyf/PgTjOGKUkO9OBt8C1AAOq9Gzf2/5wObp8oDk55f/ZtGeEzg2Lxz/npni1A3s4a97glf5qkJEyVrLlBqMhCvN0XGeza7qdkL25Vq3EYz6mllK3cGTk1M8duqVLmoSc6KfAKmy5BK9g84JVGjV26hWfHongAA';
    
// 用於替换 [Netflix] 跟 [Disney+] 換成 圖片元素的HTML 字符串
    const imageElement_Netflix = `<img src="data:image/webp;base64,${base64img_Netflix}" alt="[Netflix]" style="width:12px; height:12px; vertical-align:middle;">`;
    const imageElement_Disney = `<img src="data:image/webp;base64,${base64img_Disney}" alt="[Disney+]" style="width:12px; height:12px; vertical-align:middle;">`;

    // 定義替換函數，將 [Netflix] 跟 [Disney+]  文字替換為圖片
function replaceTextWithImage(text) {
    // 如果文本中包含 [Netflix]，則用 Netflix圖片替換
    if (text.includes('[Netflix]')) {
        return text.replace('[Netflix]', imageElement_Netflix);
    }
    // 如果文本中包含 [Disney+]，則用 Disney+ 圖片替換
    else if (text.includes('[Disney+]')) {
        return text.replace('[Disney+]', imageElement_Disney);
    }
    // 如果文本中既不包含 [Netflix] 也不包含 [Disney+]，則返回原始文本
    else {
        return text;
    }
}

    const newRows = daysOfWeek.map((day, index) => {
        const newRow = document.createElement('tr');
        const newDay = document.createElement('th');
        newDay.innerText = `${day}`;
        const newAnimeList = document.createElement('td');

        // 判斷今天星期，並插入class(動漫花園提供的樣式)
        if (day === daysOfWeek[todayDay]) {
            newRow.classList.add('today');
        } else if (day === daysOfWeek[(todayDay + 1) % 7] || day === daysOfWeek[(todayDay + 6) % 7]) {
            newRow.classList.add('odd');
        } else {
            newRow.classList.add('even');
        }

        // 遍歷條目，如果今天是指定的星期，則插入超連結
        dmhyEntries.forEach(entry => {
            if (entry.day === index) {
                const newAnimeLink = document.createElement('a');
                newAnimeLink.href = entry.link;
                // 判斷瀏覽器語言是簡體中文還是其他語言
                if (navigator.language.toLowerCase() === 'zh-cn') {
                    newAnimeLink.innerHTML = replaceTextWithImage(entry.nameCN); // 替換圖片
                } else {
                    newAnimeLink.innerHTML = replaceTextWithImage(entry.nameTW); // 替換圖片
                }
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
