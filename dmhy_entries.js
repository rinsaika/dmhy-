    //適配不同的鏡像站
    const hostname = window.location.hostname;
    //クール季度，用於公告欄使用
    const kuru = '目前為2024春季(4~6月)索引。';
    // 定義要插入的多個連結的數組
    const dmhyEntries = [
{day:1, nameTW: '終末的列車前往何方？', nameCN:'末班列车去哪里了？', link: 'https://' + hostname + '/topics/list?keyword=列車' },
{day:1, nameTW: '神明渴求著遊戲。', nameCN:'神渴望着游戏。', link: 'https://' + hostname + '/topics/list?keyword=神明渴求著遊戲' },
{day:1, nameTW: '月光下的異世界之旅 第二季', nameCN:'月光下的异世界之旅 第二幕', link: 'https://' + hostname + '/topics/list?keyword=月光下的異世界之旅' },
{day:1, nameTW: '從 Lv2 開始開外掛的前勇者候補過著悠哉異世界生活', nameCN:'从Lv2开始开挂的原勇者候补悠闲的异世界生活', link: 'https://' + hostname + '/topics/list?keyword=從 Lv2 開始開外掛的前勇者候補過著悠哉異世界生活' },
{day:1, nameTW: '轉生為第七王子，隨心所欲的魔法學習之路', nameCN:'转生为第七王子，随心所欲的魔法学习之路', link: 'https://' + hostname + '/topics/list?keyword=轉生為第七王子，隨心所欲的魔法學習之路' },
{day:1, nameTW: '我回來了、歡迎回家', nameCN:'我回来了，欢迎回来', link: 'https://' + hostname + '/topics/list?keyword=我回來了、歡迎回家' },
{day:1, nameTW: '狼與辛香料 MERCHANT MEETS THE WISE WOLF', nameCN:'狼与香辛料 行商邂逅贤狼', link: 'https://' + hostname + '/topics/list?keyword=狼與香辛料' },
{day:2, nameTW: '刀劍亂舞 迴 -虛傳 燃燒本能寺-', nameCN:'刀剑乱舞 回 -虚传 燃烧的本能寺-', link: 'https://' + hostname + '/topics/list?keyword=刀劍亂舞' },
{day:2, nameTW: 'Unnamed Memory 無名記憶', nameCN:'无名记忆', link: 'https://' + hostname + '/topics/list?keyword=無名記憶' },
{day:2, nameTW: 'RINKAI！女子競輪', nameCN:'竞轮少女！', link: 'https://' + hostname + '/topics/list?keyword=競輪' },
{day:2, nameTW: '失憶投捕', nameCN:'失忆投捕', link: 'https://' + hostname + '/topics/list?keyword=失憶投捕' },
{day:2, nameTW: 'ARNOLD & PUPPETS', nameCN:'ARNOLD & PUPPETS', link: 'https://' + hostname + '/topics/list?keyword=ARNOLD PUPPETS' },
{day:3, nameTW: '小小哥吉拉的逆襲 續篇', nameCN:'小哥斯拉的逆袭 续篇', link: 'https://' + hostname + '/topics/list?keyword=小哥斯拉的逆袭' },
{day:3, nameTW: '聲優廣播的幕前幕後', nameCN:'声优广播的台前幕后', link: 'https://' + hostname + '/topics/list?keyword=聲優廣播的幕前幕後' },
{day:3, nameTW: '怪異與少女與神隱', nameCN:'怪异与少女与神隐', link: 'https://' + hostname + '/topics/list?keyword=怪異與少女與神隱' },
{day:3, nameTW: '約會大作戰 DATE A LIVE V', nameCN:'约会大作战 第五季', link: 'https://' + hostname + '/topics/list?keyword=約會大作戰' },
{day:3, nameTW: '為美好的世界獻上祝福！3', nameCN:'为美好的世界献上祝福！第三季', link: 'https://' + hostname + '/topics/list?keyword=為美好的世界獻上祝福' },
{day:3, nameTW: '王牌酒保 Glass of God', nameCN:'调酒师 神之杯', link: 'https://' + hostname + '/topics/list?keyword=王牌酒保' },
{day:3, nameTW: '格鬥實況', nameCN:'格斗实况', link: 'https://' + hostname + '/topics/list?keyword=格鬥實況' },
{day:7, nameTW: '時光代理人 第二季', nameCN:'时光代理人 -LINK CLICK- 第二季', link: 'https://' + hostname + '/topics/list?keyword=時光代理人' },
{day:4, nameTW: '雀魂 KANG!!', nameCN:'雀魂 KANG!!', link: 'https://' + hostname + '/topics/list?keyword=雀魂 KANG' },
{day:4, nameTW: '迷宮飯', nameCN:'迷宫饭', link: 'https://' + hostname + '/topics/list?keyword=迷宮飯' },
{day:4, nameTW: '搖曳露營△ 第三季', nameCN:'摇曳露营△ 第三季', link: 'https://' + hostname + '/topics/list?keyword=搖曳露營' },
{day:4, nameTW: '花野井同學與戀愛病', nameCN:'花野井君与相思病', link: 'https://' + hostname + '/topics/list?keyword=花野井' },
{day:4, nameTW: 'Re:Monster', nameCN:'怪物转生', link: 'https://' + hostname + '/topics/list?keyword=Re Monster' },
{day:4, nameTW: 'WIND BREAKER—防風少年—', nameCN:'防风少年', link: 'https://' + hostname + '/topics/list?keyword=防風少年' },
{day:4, nameTW: '身為魔王的我娶了奴隸精靈為妻，該如何表白我的愛？', nameCN:'身为魔王的我娶了奴隶精灵为妻，该如何表白我的爱？', link: 'https://' + hostname + '/topics/list?keyword=身為魔王的我娶了奴隸精靈為妻，該如何表白我的愛' },
{day:4, nameTW: '她來自煩星 第二季', nameCN:'福星小子 第二季', link: 'https://' + hostname + '/topics/list?keyword=Urusei Yatsura' },
{day:7, nameTW: '關於我們把節目全部丟給聲優那件事', nameCN:'關於我們把節目全部丟給聲優那件事', link: 'https://' + hostname + '/topics/list?keyword=關於我們把節目全部丟給聲優那件事' },
{day:4, nameTW: '怪人的沙拉碗', nameCN:'怪人的沙拉碗', link: 'https://' + hostname + '/topics/list?keyword=怪人的沙拉碗' },
{day:5, nameTW: '戰鬥陀螺 X', nameCN:'战斗陀螺 X', link: 'https://' + hostname + '/topics/list?keyword=戰鬥陀螺' },
{day:5, nameTW: '寶可夢 地平線', nameCN:'宝可梦 地平线', link: 'https://' + hostname + '/topics/list?keyword=寶可夢 地平線' },
{day:5, nameTW: 'Love Live！虹咲學園 學園偶像同好會 短篇動畫 第二季', nameCN:'虹四动画 第二季', link: 'https://' + hostname + '/topics/list?keyword=Love Live' },
{day:5, nameTW: '星際莊的戀愛日記', nameCN:'星际庄的恋爱日记', link: 'https://' + hostname + '/topics/list?keyword=星際莊的戀愛日記' },
{day:5, nameTW: '關於我轉生變成史萊姆這檔事 第三季', nameCN:'关于我转生变成史莱姆这档事 第三季', link: 'https://' + hostname + '/topics/list?keyword=關於我轉生變成史萊姆這檔事' },
{day:5, nameTW: '魔法科高中的劣等生 第三季', nameCN:'魔法科高校的劣等生 第三季', link: 'https://' + hostname + '/topics/list?keyword=魔法科高校的劣等生' },
{day:5, nameTW: '魔王學院的不適任者～史上最強的魔王始祖，轉生就讀子孫們的學校～第二季', nameCN:'魔王学院的不适任者～史上最强的魔王始祖，转生就读子孙们的学校～ 第二季 第2部分', link: 'https://' + hostname + '/topics/list?keyword=魔王學院的不適任者' },
{day:5, nameTW: 'GIRLS BAND CRY', nameCN:'GIRLS BAND CRY', link: 'https://' + hostname + '/topics/list?keyword=GIRLS BAND CRY' },
{day:5, nameTW: '偶像大師 閃耀色彩', nameCN:'偶像大师 闪耀色彩', link: 'https://' + hostname + '/topics/list?keyword=偶像大師' },
{day:5, nameTW: '極速星舞', nameCN:'极速星舞', link: 'https://' + hostname + '/topics/list?keyword=HIGHSPEED' },
{day:6, nameTW: '泡泡糖忍戰', nameCN:'泡泡糖忍战', link: 'https://' + hostname + '/topics/list?keyword=泡泡糖忍戰' },
{day:6, nameTW: '闇影詩章F 方舟篇', nameCN:'影之诗F 方舟篇', link: 'https://' + hostname + '/topics/list?keyword=影之詩F 方舟篇' },
{day:6, nameTW: '蜻蛉高球', nameCN:'喂！蜻蜓', link: 'https://' + hostname + '/topics/list?keyword=蜻蛉高球' },
{day:6, nameTW: '蠟筆小新', nameCN:'蜡笔小新', link: 'https://' + hostname + '/topics/list?keyword=蠟筆小新' },
{day:6, nameTW: '哆啦A夢', nameCN:'哆啦A梦', link: 'https://' + hostname + '/topics/list?keyword=哆啦A夢' },
{day:6, nameTW: '我的英雄學院 第七季', nameCN:'我的英雄学院', link: 'https://' + hostname + '/topics/list?keyword=我的英雄學院' },
{day:6, nameTW: '名偵探柯南', nameCN:'名侦探柯南', link: 'https://' + hostname + '/topics/list?keyword=名偵探柯南' },
{day:6, nameTW: '單人房、日照一般、附天使。', nameCN:'单间、光照尚好、附带天使。', link: 'https://' + hostname + '/topics/list?keyword=單 天使' },
{day:6, nameTW: '怪獸 8 號', nameCN:'怪兽8号', link: 'https://' + hostname + '/topics/list?keyword=怪獸8號' },
{day:6, nameTW: '黑執事 寄宿學校篇', nameCN:'黑执事 -寄宿学校篇-', link: 'https://' + hostname + '/topics/list?keyword=黑執事' },
{day:6, nameTW: '龍族', nameCN:'龙族', link: 'https://' + hostname + '/topics/list?keyword=龍族' },
{day:6, nameTW: '烏鴉不擇主', nameCN:'良禽不择木', link: 'https://' + hostname + '/topics/list?keyword=良禽不擇木' },
{day:6, nameTW: '殺手寓言', nameCN:'杀手寓言', link: 'https://' + hostname + '/topics/list?keyword=殺手寓言' },
{day:6, nameTW: '夜晚的水母不會游泳', nameCN:'夜晚的水母不会游泳', link: 'https://' + hostname + '/topics/list?keyword=夜晚的水母不會游泳' },
{day:6, nameTW: '恰如細語般的戀歌', nameCN:'恋语轻唱', link: 'https://' + hostname + '/topics/list?keyword=Sasayaku You ni Koi wo Utau' },
{day:6, nameTW: 'THE NEW GATE', nameCN:'THE NEW GATE', link: 'https://' + hostname + '/topics/list?keyword=THE NEW GATE' },
{day:0, nameTW: '遊戲王', nameCN:'游戏王 Go Rush！！', link: 'https://' + hostname + '/topics/list?keyword=遊戲王' },
{day:0, nameTW: '新幹線變形機器人 Change the World', nameCN:'新干线变形机器人 改变世界', link: 'https://' + hostname + '/topics/list?keyword=新干线变形机器人 改变世界' },
{day:0, nameTW: '美妙寵物 光之美少女', nameCN:'美妙宠物 光之美少女！', link: 'https://' + hostname + '/topics/list?keyword=光之美少女' },
{day:0, nameTW: '逃走中THE GREAT MISSION', nameCN:'逃走中 GREAT MISSION', link: 'https://' + hostname + '/topics/list?keyword=逃走中' },
{day:7, nameTW: '假面骑士Gotchard', nameCN:'假面骑士Gotchard', link: 'https://' + hostname + '/topics/list?keyword=仮面ライダーガッチャード' },
{day:7, nameTW: '爆上戰隊BoonBoomger', nameCN:'爆上战队奔奔者', link: 'https://' + hostname + '/topics/list?keyword=爆上戦隊ブンブンジャー' },
{day:0, nameTW: '海賊王', nameCN:'海贼王', link: 'https://' + hostname + '/topics/list?keyword=海賊王' },
{day:0, nameTW: '秘密的偶像公主', nameCN:'秘密的偶像公主', link: 'https://' + hostname + '/topics/list?keyword=秘密的偶像公主' },
{day:0, nameTW: '戰隊大失格', nameCN:'战队大失格', link: 'https://' + hostname + '/topics/list?keyword=戰隊大失格' },
{day:0, nameTW: '夜櫻家大作戰', nameCN:'夜樱家的大作战', link: 'https://' + hostname + '/topics/list?keyword=夜櫻家的大作戰' },
{day:0, nameTW: '吹響吧！上低音號 第三季', nameCN:'吹响！悠风号 第三季', link: 'https://' + hostname + '/topics/list?keyword=吹響' },
{day:0, nameTW: '隊長小翼 Season2 青少年篇', nameCN:'足球小将 第二季 世少篇', link: 'https://' + hostname + '/topics/list?keyword=隊長小翼' },
{day:0, nameTW: '樱桃小丸子', nameCN:'櫻桃小丸子', link: 'https://' + hostname + '/topics/list?keyword=櫻桃小丸子' },
{day:0, nameTW: '死神少爺與黑女僕 第三季', nameCN:'死神少爷与黑女仆 第三季', link: 'https://' + hostname + '/topics/list?keyword=死神少爺與黑女僕' },
{day:0, nameTW: '鬼滅之刃 柱訓練篇', nameCN:'鬼灭之刃 第4期', link: 'https://' + hostname + '/topics/list?keyword=鬼滅之刃' },
{day:0, nameTW: '吸血鬼男子宿舍', nameCN:'吸血鬼男子宿舍', link: 'https://' + hostname + '/topics/list?keyword=吸血鬼男子宿舍' },
{day:0, nameTW: '老夫老妻重返青春', nameCN:'爷爷奶奶返老还童', link: 'https://' + hostname + '/topics/list?keyword=Jiisan Baasan Wakagaeru' },
{day:0, nameTW: '轉生貴族憑鑑定技能扭轉人生', nameCN:'转生贵族靠着鉴定技能一飞冲天', link: 'https://' + hostname + '/topics/list?keyword=轉生貴族' },
{day:0, nameTW: '蔚藍檔案 The Animation', nameCN:'蔚蓝档案 动画版', link: 'https://' + hostname + '/topics/list?keyword=蔚藍檔案' },
{day:0, nameTW: '無職轉生～到了異世界就拿出真本事 第二季', nameCN:'无职转生Ⅱ ～到了异世界就拿出真本事～ 第2部分', link: 'https://' + hostname + '/topics/list?keyword=無職轉生' },
{day:0, nameTW: '明明只是個煙霧彈配角，卻得到完美王子的寵愛。', nameCN:'明明是个碍事配角、却被王子给宠爱了', link: 'https://' + hostname + '/topics/list?keyword=明明是個礙事配角 卻被王子給寵愛了' },
{day:7, nameTW: '[YouTube]偶像夢幻祭 回憶精選集「チェックメイト」', nameCN:'[YouTube]偶像梦幻祭 追忆精选集「チェックメイト」', link: 'https://' + hostname + '/topics/list?keyword=偶像夢幻祭' },
{day:7, nameTW: '[Disney+]沙漠大冒險', nameCN:'[Disney+]沙漠大冒险', link: 'https://' + hostname + '/topics/list?keyword=SAND LAND' },
{day:7, nameTW: '[ABEMA]聖鬥士星矢：黃道十二宮戰士', nameCN:'[ABEMA]圣斗士星矢：黄道十二宫战士 战斗圣域 Part 2', link: 'https://' + hostname + '/topics/list?keyword=聖鬥士星矢' },
{day:7, nameTW: '[Netflix]格林童話變奏曲', nameCN:'[Netflix]格林童话变奏曲', link: 'https://' + hostname + '/topics/list?keyword=格林童话变奏曲' },
{day:7, nameTW: '[Netflix]T·P 時光特警', nameCN:'[Netflix]时空巡逻队', link: 'https://' + hostname + '/topics/list?keyword=時光特警' },
{day:7, nameTW: '[Netflix]餓狼傳：孤狼之道(5/23播)', nameCN:'[Netflix]饿狼传(5/23播)', link: 'https://' + hostname + '/topics/list?keyword=餓狼傳' },

    ];
