// ==UserScript==
// @name         DMHY新番資源索引 修正(GitHub版)
// @namespace    https://github.com/rinsaika/dmhy-
// @version      4.4
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

// 1天更新一次dmhy_entries.js
(function() {
    function loadScript() {
        var script = document.createElement('script');
        script.src = 'https://raw.githubusercontent.com/rinsaika/dmhy-/main/dmhy_entries.js?timestamp=' + new Date().getTime();
        document.head.appendChild(script);
    }
    loadScript(); // 调用 loadScript 函数
})();

(function() {
  'use strict';

  // 找到新番索引的表格
  const table = document.querySelector('table.jmd');
  if (!table) {
    console.error('未找到新番索引表格');
    return;
  }

  // 找到目前日期
  const today = new Date();
  const todayDay = today.getDay();

  // 刪除原本的 <tbody> 標籤
  const tbody = table.querySelector('tbody');
  if (tbody) {
    tbody.remove();
  }

  // 調整 daysOfWeek 陣列順序
  const daysOfWeek = ['週日（日）', '週一（月）', '週二（火）', '週三（水）', '週四（木）', '週五（金）', '週六（土）', '其他'];
  // Base64 圖片數據
  const base64img_Netflix = 'UklGRtgBAABXRUJQVlA4WAoAAAAQAAAAHwAAHwAAQUxQSJsAAAABgFvb1rLoZhThTg90QUbkVoC7u0sB0AGRFUDMTwXOWPSHMxFud00DETEBuCvdnW77ABA93e5leFq2v/MjYZ0stBFNVLJOPtqcdtLR8oiQBPhJJ6OTFbSyhATrb8k6nY60u//jSDstf1mJBcsaYLmMLD8EUgR5UhRaGuY0H00psjCixABYKGkAEvEt8u1qNmxVTABgrjQH49XhAQBWUDggFgEAANAHAJ0BKiAAIAAAwBIlsALsvAnqv4QbgDJA+d38z+Ffz/zwHMb/6PpAOsA9AD+Af3DrefJVB3mX1MBnUllZ3t7Hrooo6tuYAP7/CW2ZItZuyZPtEz562gEiIpo2zxl7RZ1NIf0fsXsNySckR1hq0D/85LJHoQfLgco03eAjXT/4XUREP/V/RHjsrHF+95fDqGpKKUL9SDToHCNmDeD7F8NKN4Rm/U77GJnOBHr2M64joZ2UPnPW2IaASYiNP99bqtHaGYLBhsNL1l1XFvHCQfhGifaCm6ZhJ6P38kP7gtzioO7B0eo/xqoIwci5imr3LhRl80y7Bv90yHSCBmQJmT5dT6RX2hSmIoP+5EF0Y+BP3EcRoAAA';
  const base64img_Disney = 'UklGRloHAABXRUJQVlA4WAoAAAAUAAAAHwAAHwAAQUxQSHwBAAABkAPZtmlb89n6tm3btkPbtm3b/j+ybdu2bXsE++grj4gJ0L/ft/LQVVfev3l+d+Ogqgm9CDuC44fT87vq+KBDqXyZMlRoM27NhV8Al3smdlbh8EzZJ2qz6wfwY24CJ67jNj0LvO8X6pnkW/c2cDubNxEyAzs8h/fVvIh8EsuQIhbAzx4eVGSclTQKmOWuCUft1PUXNHPVizcO1PAHnzK7mQA+DlQfLoQ4Ci99CNYtXzy4XlILbYHJdtGNN3zB/tfRpj6S0sIrP6sOr7H+aADrfSSdgCIWPX6en98qX6K9ECsgff3pp75DRUl9YZjFxrwy90ICmfFfUdRqmsWcGhb7IKnhP4njoZKWQ3eLuDdaGnsgleFTrHqQpPD7UMFC2V7NiZF2QgbDOmALXPKxUuLtz9pFbIOsDqKXwYfcsvfp8PndC8htk2POR/hRWY4zHgcurBw7cv76o3cAHtaRS58dOH46IEyux8HwhWu37jlyekWbzPIy851TgfrvAlZQOCASAQAAkAcAnQEqIAAgAD4tEIZCoaEN+gAMAWJbACdMoR/h5BxVmuJkHCA2wH6Z+oDoAf+DfAOeg9hT/D/8X9gPanB2QsAA7WsAAP77Sf//Un//0+l//06WPtWD9Ze+UMGpWBJvz//NwAT8QkDqOkies+S/bj5BwzkDm7rFPtB+X4mN/f+gJN//1B3/9Rrf/9Of3WrmfHZNPEPLjHKUUo9vmPttrYUEXgQgU/ewp40eIB+Mlm5zwHDGjuRm/9HgX8umE37iePRH/f8b14N/84be8KC650sxb2l3fkM/zOvOPqU7K3Wb9mtJlhOOT7Ax4BXEkFO41M299jDG65gioXnPfAfCrW2f6q+9G+smf4PGkojIbgAAAFhNUCCdBAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjMyIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMzIiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIzMiIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMzIiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjQtMDItMTZUMTE6NDI6NDItMDU6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDItMTZUMTE6NDI6NDItMDU6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC44IgogICAgICBzdEV2dDp3aGVuPSIyMDI0LTAyLTE2VDExOjQyOjQyLTA1OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4A';
  const base64img_bilibili = 'UklGRjQCAABXRUJQVlA4WAoAAAAQAAAAHwAAHwAAQUxQSM4AAAABgBvZttvmUeYj+0gNKwKakIsJtsSQDZAdvJF3PXA+ZEKv6Mh9h5HyiJgAGefO4mFpw+zycbETsgeoDbEK7IUcAqj1WQU4CjEKoOVvVgHUhIhVAC1/WAXQUrymP34i6dNxb0Rkek3G66mYa7LeFDMyz46BdS1J6zVw/AHUkrgG3gEkOd5xtM61vta5Ns6B8zlwcQA+gPE5GHwOhrhu2HS+bth0cWn/hw+gTlUBT8fAqkozXQHHPZn74ibPbSHT6xw3UxEx8/PnNM/ncyN/IFZQOCBAAQAA0AoAnQEqIAAgAD4tEoZCoaEN/qoADAFiWwAnTKEcDeAfhf+OXQB6fdq8kD5Avp/3Abwp/Vf4BvAP0g/t3t/9IB/lf8z6lf9V9gD0API3/Zb4Ev2X/bD2Wf/oCXVeJQAA/uX6P/oWmlSOGvksoousVEcUdFouLi5hXYsovwfVQpx//vS/SX/Yo2H1WiQEb9vRTyBAr2A/5e+JFtJNcQ6hNSEN87Aji+H8fn1MZg2H45c9bcr54uawhk7WkaBWFzgZyV9nPtP43d4SO2/f6/1DqKFPE2mhNOVEqxpxvbj8ycppu6T//qvvX4qNUNswGQ0ao6Y2Ayz/72I//8vVTU9cx0+6ieVrjor7yqxtvwBeR//MdQD9YyaTBzP2wnLpiqsBVpUslUPQhpb2uqh28jMxLnnNwAbdLbTFsb9O76QYAAA=';
  const base64img_ABEMA = 'UklGRjQCAABXRUJQVlA4ICgCAABQDQCdASogACAAAMASJaQATwFVNecfiPklnjP5JfkrqGf5d+Mn8A/wGWf/o2kK/zjUP/5f8jvcT/pvsr9pX4h/Uv7x/Iv20/lf2Bfxn+Rf2j8wP71/9uUp/Uk7Ne+IoW2WjYji9mVbPzWiyWPuoKZFJ3vwAP7//k4e3/GzcUsM9lRxhQAB0GWbe2mOURJRCT5PRcto3xP3mGWxKST7wJQDIbblKa4eZn0CAf/ocl7v+LbJMjJBtTX+7H5HZR9/x1/9O6qw+3I9aBjkazina5FnCB4640H88BK++itTLYXWgIj3rx/3+v0JbDqlvSvCG3BbGdzw7wif7FZSdPfshbc2K1j0DUFmgQzigRhz1mgjM47+cA2/6f61hZf/jKfN3HoDyQTCimH3Sjnr0xyTiawlHJDylrBXWZsXLOAKTw93W5ePndGzYtIcMe6B4vf35EZUkaxkND/idT+Jb/7BYkn+ptiHOzn/9dBz/bhmCMB3xQIUbP39i0pK8QUhTCsuq3OQTp4ZCChXW2KMe7LHDexxWRbmkZbMQYT7V+aK7/qX4D2/Zz/1c/9ZWR6819Dib8lvC27HJV9ZSef5tZRy8pfBZPhgeGX/k7f6uZSSrpex6JNsiwoP0A4pyO5c8UHRuqH8VF2iHfXcaCslTsetQf/9OJqmA/7NAUD/7R/co8YzPAgZQOuf/rrTWZXCJmrE//7teMqoJ0FSJiEq1nXbjylf2nLokwVgAAA=';
  const base64img_YouTube = 'UklGRuAFAABXRUJQVlA4WAoAAAAUAAAAHwAAHwAAQUxQSLMAAAABgGNt2zHnHdvmBqaaMz2XoAWkdDovgK2dtLZt27ad2s4T1RExAfSfZLDeZn7KHppWXNMxMDGztPh6aX5ypLe1sjA1wskgIlHx/ePXd1mJUfwI7eU67jCP3uhHcGIWqqQW1TaAmpxDrayg9pZRhys/7WABtTGMmm1E9eajSmNQSU6Uj9OCWZCQqRcxbyMidjC9YXhp+/Ds6vbdy7PD7aWRptwQCb3PEshUOuO7WpWUz6L/IgBWUDgg7AEAANANAJ0BKiAAIAAAwBIlsAJ0yhHA3nf4NcgZoF2W/aPKNtivMB/AOcR/rn5HcAD9S/XH6QD9mesA9ADylP9B/gPg4/Yb9dPZVzQDr9/sFc6tqPQc80+wB/D/5v/uuBA/XI6Z52qFJQU8wwyQBMcZzeT7Fo0yKBagAP74YejH3nHrIU1s7eLiLYTrHlv9w8pJ3TVa1ZK1cKk9bZLcGVt9YGrDvaZEL+Arkf22D46oSb/9Hn/73rDFTx6/7fUrzgPb2Phm0yScdUUq0v/3bJkZ5hm17dcyJ1PRYP+qSdA9Q/rlcLbQ7zdbFBPyhQubW/NQVBH+rsnwY42452fhTbINIt9lXf8RwZg8m4ul+VbYl5Xgb/DRL/Mrs15n42waTRVAc1PRYNsz4G5iLNmCWpEzvd2CRbj6HLSb118hejgazngQO3oms5xGGggkOXnoO8K+ojC2mlpa3CmQb8rvFdCz5ReLVCrhfXOMycervQ/Xfq9FGNLN7nvDjpwOf3KtPP/+uXZlNSC53y8xGB6MQQToORkUJqAvHDCCZ7ukyDzInn2n8/zStomGU1Q0ZEhh+ZznOZuYkph6R+yMGt4hM1wgF2awW6dFL1RR0MsYI/wxpEtniwv08dgG1JOVtkv6gZqriDERlrDr1nSQngAAAFhNUCASAwAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozM0IzNDY5MThGNEMxMUU3OTQ2QkFCMUFGRjk5NjI3RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozM0IzNDY5MjhGNEMxMUU3OTQ2QkFCMUFGRjk5NjI3RiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjEzNDQxRkM0OEY0QzExRTc5NDZCQUIxQUZGOTk2MjdGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjMzQjM0NjkwOEY0QzExRTc5NDZCQUIxQUZGOTk2MjdGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+';
  const base64img_BL='UklGRvgDAABXRUJQVlA4WAoAAAAQAAAAHwAAHwAAQUxQSAABAAABgGJr25zmc+ygLhLHDpB1SFwkrhIZV4lDxiFxSHZQh8Qh65BP5vFVGfg6LCAiJsD+/SAaDddvMzZR9DHjzvQzDkZCgHiKarTIUuDTzDZkVVVwmEg03ZewN4uopJarg9TAyifPsrKWpIrYJwFIJHXcvbbRjVoSeAV2pJI6Hl6HGDqp4uwFVFIHG5+qqppequBkHn2n0TqF88JjbgNHnzzLsryW1MHKJWGYSyqJnbbr8JtG6vhyCswOVFLP3S240UgtN6dhKqniNDEZTyVlLyll9wqDmSWPxcjMeX0Oa3utHW+qHAjN9hTtXOafl2a2uDD7GV7HL9FuaaOL+Dr33f59VlA4INICAADwDwCdASogACAAAMASJbACdMzQ1d5nw7mmve7JT+eycBnAP1A/XThAP7X/JesA9AD9OfTL/WD4S/KFo7mzW/pPan/EZmHeCMef5zSHdUR/sP+O/ED3uM9v4z/dv+d7g/8Y/mH+k/MbjRv1AQdE05LD0m+BUwpQBmZbJxYf+tDqnXyxZpJzaJm4AP6zpxPxIZDduWAbFyL+YFNjl/pWDB18dX/9jVRRRqeoT5kfW+GRBBF3MUUUSO6fxGVdlPz+Mkr/HNowRwlu6RGzIVpGRxOquKAKcn49OenxYQTgoSLmzPVo0qYLX+xWqCawyo6F1KbB7X5WXwGJWMWasXAZP8xrDH01zfQzzI0Lm5mfcC8PUnOLGe8/Kxtxl/+ejP3/+GIPgNxfZklldi1/dtfpYQAtDn2inRbavKf84tiL/XteIlbJ+2XUMtAofxI3hf7L1EQpBzeYH86yN/HzFSmCHYrKUuZZCrCgkp+CzJhSChBDqssE9G1NI1z/5z0DwCaoMQwymT7QupB1zP4bSZ/UhiMJipTUYi/WAu7UpocTQlfGcJW1cYv+dTmHetgT/hF+GcI2JYdGC0sqobUqG4LCyHRNSSAdFtntPzuzPy1O4G1cJ/yeX7b8Pzjnw8W5ICuTVVyU3po9nKr/sYW7W0rQSfMKI8RW8j3DwFT+olc0jv25NMmXQzokBjYSBIfZdr/o3Bo6dBgBmQmupjA9NLezLA27tFkd/H2b6DBuqjFV78S7l5FH7XBU8cff/+v6ngSuuW9fnvX8QPNwjJr8xjp7S7rVka1nn47//nQmU+dFjEKapX4+syr6usLAj58WMN9uN8yHUi38mvBnU1pPnv73Poc3uoqP59938hp/3MnYjBAjH8i50N2O8n/p6eex8/V2APsNxL78IyaEthf3ESMwTJnK8xqoU9nvkP7JuDtPeyG5U/NHHX3L0TqA+qsAs0KrCXngAA==';
  const base64img_AnimeFesta='UklGRgICAABXRUJQVlA4IPYBAABQCQCdASogACAAAMASJQAUkBkkf7AejXcoOT1PHfl35OfkdNs2qUf4zUR/6/2K/4XxU/N3sBfyH+ff6wzPOTrNWZt3M0OPXNRbNlOOclJCQjBFTAD+//4mx2qMt/xOCGgn3g3xR5uPurhEFMLAWX3pNWnKKbyk5B+1pfGoYbwij8o3T+QOdhOgDdEMpJU0rLj+KWz7lm85nu6D69TDVV8j5qdXoPzk/1T/4ZwMmoqt7+H+SlyhGWEDOcoLH+0KSWd2S1WYBkBaiWKH4RsmV7q8Voz/+JDrTn/I8tjdwBpuv9qhV8T/VFpWaUYGY/P67Ta+SSKhPf//jnIrPjYz/w82eiB+rnv54jinKRBvbq/A/7z9c2l+JpTxPGLhef4AUJzPE//9tWjEsURsjc/x2+W4KHF7ZT5n/59C3xpFidlhhZ8P/h+9nRn3Xx+dwADVArlpkN+Sj+Kdf0lkuk8pvpAWmt//2n/aP7knXzP9KyBK50nKHa6P/XHw+ID+70X2tVLMvR7aTS5dTnTS7YXHL2wSHRRUU3MKqPYRWpEDao9snBkad+FaDEVBFmf13TdSVTqJ0mAbCeYdR3dNe8zEaNX1yvnQ6gzeqmzhvi2Jo/P/sc8A8SYwELzAsHOkFku9hrs9Rch3/9cgh2vWMkScmBEpk+5/AAAA';
  // 用於替换 圖片元素的HTML 字符串
  const imageElement_Netflix = `<img src="data:image/webp;base64,${base64img_Netflix}" alt="[Netflix]" style="width:12px; height:12px; vertical-align:middle;">`;
  const imageElement_Disney = `<img src="data:image/webp;base64,${base64img_Disney}" alt="[Disney+]" style="width:12px; height:12px; vertical-align:middle;">`;
  const imageElement_bilibili = `<img src="data:image/webp;base64,${base64img_bilibili}" alt="[bilibili]" style="width:12px; height:12px; vertical-align:middle;">`;
  const imageElement_ABEMA = `<img src="data:image/webp;base64,${base64img_ABEMA}" alt="[ABEMA]" style="width:12px; height:12px; vertical-align:middle;">`;
  const imageElement_YouTube = `<img src="data:image/webp;base64,${base64img_YouTube}" alt="[YouTube]" style="width:12px; height:12px; vertical-align:middle;">`;
  const imageElement_BL = `<img src="data:image/webp;base64,${base64img_BL}" alt="[BL]" style="width:12px; height:12px; vertical-align:middle;">`;
  const imageElement_AnimeFesta = `<img src="data:image/webp;base64,${base64img_AnimeFesta}" alt="[AnimeFesta]" style="width:12px; height:12px; vertical-align:middle;">`;
  // 定義替換函數，將文字替換為圖片
  function replaceTextWithImage(text) {
    return text.replace(/\[Netflix\]/g, imageElement_Netflix)
      .replace(/\[Disney\+\]/g, imageElement_Disney)
      .replace(/\[bilibili\]/g, imageElement_bilibili)
      .replace(/\[ABEMA\]/g, imageElement_ABEMA)
      .replace(/\[YouTube\]/g, imageElement_YouTube)
      .replace(/\[BL\]/g, imageElement_BL)
      .replace(/\[AnimeFesta\]/g, imageElement_AnimeFesta);
  }
  //---------------------------------------------
  //確保外部dmhyEntries有連到
  if (typeof dmhyEntries === 'undefined') {
    console.error('沒找到dmhyEntries');
    return;
  }
  //---------------------------------------------
  //畫表格
  const newRows = daysOfWeek.map((day, index) => {
    const newRow = document.createElement('tr');
    const newDay = document.createElement('th');
    newDay.innerText = `${day}`;
    const newAnimeList = document.createElement('td');

    // 判斷今天星期，並插入class內容 (*動漫花園提供的樣式)
    if (day === daysOfWeek[todayDay]) {
      newRow.classList.add('today');
    } else if (day === daysOfWeek[(todayDay + 1) % 7] || day === daysOfWeek[(todayDay + 6) % 7]) {
      newRow.classList.add('odd');
    } else {
      newRow.classList.add('even');
    }
    // 根據瀏覽器設定，顯示對應的翻譯(簡中，繁中)
    dmhyEntries.forEach(entry => {
      if (entry.day === index) {
        const newAnimeLink = document.createElement('a');
        newAnimeLink.href = entry.link;
        newAnimeLink.title = entry.nameJP;
        if (navigator.language.toLowerCase() === 'zh-cn') {
          newAnimeLink.innerHTML = replaceTextWithImage(entry.nameCN);
        } else {
          newAnimeLink.innerHTML = replaceTextWithImage(entry.nameTW);
        }
        newAnimeList.appendChild(newAnimeLink);
      }
    });

    newRow.appendChild(newDay);
    newRow.appendChild(newAnimeList);

    return newRow;
  });

  newRows.forEach(newRow => table.appendChild(newRow));

  //-----------------------------------------------------------
  //更改底下的滾動通知
  // 獲取 <marquee> 元素
  const marquee = document.getElementById('announce_marquee');

  // 確認 <marquee> 元素存在
  if (marquee) {
    // 替换 <marquee> 元素的内容
    const customText = '▶️常態放送｜[Netflix]Netflix獨佔｜[Disney+]Disney+獨佔｜[ABEMA]ABEMA獨佔｜[bilibili]B8station日配版';
    const replacedText = replaceTextWithImage(customText);

    // 将 <marquee> 元素替换 <div> 元素，同時串接兩個字串
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `${kuru} ${replacedText}`;

    // 将新 <div> 元素替换舊的 <marquee> 元素
    marquee.parentNode.replaceChild(newDiv, marquee);
  } else {
    console.log('未找到 id=announce_marquee 的 <marquee> 元素');
  }
  //-----------------------------------------------------------
})();
