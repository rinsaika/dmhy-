var hostname = window.location.hostname;
const dmhyEntries = [
{day:1, name: '無職轉生 S2', link: 'https://' + hostname + '/topics/list?keyword=無職轉生' },
{day:1, name: '明明是個礙事配角、卻被王子給寵愛了', link: 'https://' + hostname + '/topics/list?keyword=明明是個礙事配角 卻被王子給寵愛了' },
{day:1, name: '暗芝居 S12', link: 'https://' + hostname + '/topics/list?keyword=暗芝居' },
{day:1, name: '吉伊卡哇', link: 'https://' + hostname + '/topics/list?keyword=Chiikawa' },
{day:1, name: '末班列車去哪裡?', link: 'https://' + hostname + '/topics/list?keyword=Shuumatsu Train' },
{day:1, name: '神明渴求著遊戲', link: 'https://' + hostname + '/topics/list?keyword=神明渴求著遊戲' },
{day:1, name: '月光下的異世界之旅 S2', link: 'https://' + hostname + '/topics/list?keyword=月光下的異世界之旅' },
{day:1, name: '從 Lv2 開始開外掛的前勇者候補過著悠哉異世界生活', link: 'https://' + hostname + '/topics/list?keyword=從 Lv2 開始開外掛的前勇者候補過著悠哉異世界生活' },
{day:2, name: '轉生為第七王子，隨心所欲的魔法學習之路', link: 'https://' + hostname + '/topics/list?keyword=轉生為第七王子，隨心所欲的魔法學習之路' },
{day:2, name: '我回來了、歡迎回家', link: 'https://' + hostname + '/topics/list?keyword=我回來了、歡迎回家' },
{day:2, name: '狼與香辛料', link: 'https://' + hostname + '/topics/list?keyword=狼與香辛料' },
{day:2, name: '刀劍亂舞 廻', link: 'https://' + hostname + '/topics/list?keyword=刀剣乱舞' },
{day:2, name: '無名記憶', link: 'https://' + hostname + '/topics/list?keyword=無名記憶' },
{day:2, name: '女子競輪', link: 'https://' + hostname + '/topics/list?keyword=競輪' },
{day:3, name: '失憶投捕', link: 'https://' + hostname + '/topics/list?keyword=失憶投捕' },
{day:3, name: '聲優廣播的幕前幕後', link: 'https://' + hostname + '/topics/list?keyword=聲優廣播的幕前幕後' },
{day:3, name: '怪異與少女與神隱', link: 'https://' + hostname + '/topics/list?keyword=怪異與少女與神隱' },
{day:3, name: '為美好的世界獻上祝福！S3', link: 'https://' + hostname + '/topics/list?keyword=為美好的世界獻上祝福' },
{day:3, name: '約會大作戰 S5', link: 'https://' + hostname + '/topics/list?keyword=約會大作戰' },
{day:4, name: '王牌酒保', link: 'https://' + hostname + '/topics/list?keyword=王牌酒保' },
{day:4, name: '格鬥實況', link: 'https://' + hostname + '/topics/list?keyword=格鬥實況' },
{day:4, name: '雀魂 KANG!!', link: 'https://' + hostname + '/topics/list?keyword=雀魂 KANG' },
{day:4, name: '迷宮飯', link: 'https://' + hostname + '/topics/list?keyword=迷宮飯' },
{day:4, name: '搖曳露營 S3', link: 'https://' + hostname + '/topics/list?keyword=搖曳露營' },
{day:4, name: '花野井同学和相思病', link: 'https://' + hostname + '/topics/list?keyword=花野井同学和相思病' },
{day:5, name: 'Re:Monster', link: 'https://' + hostname + '/topics/list?keyword=Re Monster' },
{day:5, name: '防風少年', link: 'https://' + hostname + '/topics/list?keyword=防風少年' },
{day:5, name: '身為魔王的我娶了奴隸精靈為妻，該如何表白我的愛', link: 'https://' + hostname + '/topics/list?keyword=身為魔王的我娶了奴隸精靈為妻，該如何表白我的愛' },
{day:5, name: '她來自煩星 S2', link: 'https://' + hostname + '/topics/list?keyword=她來自煩星' },
{day:5, name: '偶像大師 閃耀色彩', link: 'https://' + hostname + '/topics/list?keyword=偶像大師 閃耀色彩' },
{day:5, name: '怪人的沙拉碗', link: 'https://' + hostname + '/topics/list?keyword=変人のサラダボウル' },
{day:5, name: '戰鬥陀螺 X', link: 'https://' + hostname + '/topics/list?keyword=戰鬥陀螺' },
{day:5, name: '寶可夢 地平線', link: 'https://' + hostname + '/topics/list?keyword=寶可夢 地平線' },
{day:5, name: '魔王學院的不適任者 S2', link: 'https://' + hostname + '/topics/list?keyword=魔王學院的不適任者' },
{day:5, name: '星際莊的戀愛日記', link: 'https://' + hostname + '/topics/list?keyword=星際莊的戀愛日記' },
{day:5, name: '魔法科高校的劣等生 S3', link: 'https://' + hostname + '/topics/list?keyword=魔法科高校的劣等生' },
{day:6, name: 'GIRLS BAND CRY', link: 'https://' + hostname + '/topics/list?keyword=GIRLS BAND CRY' },
{day:6, name: '極速星舞', link: 'https://' + hostname + '/topics/list?keyword=極速星舞' },
{day:6, name: '卡片戰鬥!! 先導者 Divinez', link: 'https://' + hostname + '/topics/list?keyword=卡片戰鬥 先導者 Divinez' },
{day:6, name: '影之詩F 方舟篇', link: 'https://' + hostname + '/topics/list?keyword=影之詩F 方舟篇' },
{day:6, name: '蜻蛉高球', link: 'https://' + hostname + '/topics/list?keyword=蜻蛉高球' },
{day:6, name: '泡泡糖忍戰', link: 'https://' + hostname + '/topics/list?keyword=泡泡糖忍戰' },
{day:6, name: '蠟筆小新', link: 'https://' + hostname + '/topics/list?keyword=蠟筆小新' },
{day:6, name: '哆啦A夢', link: 'https://' + hostname + '/topics/list?keyword=哆啦A夢' },
{day:6, name: '我的英雄學院 S7', link: 'https://' + hostname + '/topics/list?keyword=我的英雄學院' },
{day:6, name: '名偵探柯南', link: 'https://' + hostname + '/topics/list?keyword=名偵探柯南' },
{day:6, name: '單人房、日照一般、附天使', link: 'https://' + hostname + '/topics/list?keyword=單 天使' },
{day:6, name: '怪獸8號', link: 'https://' + hostname + '/topics/list?keyword=怪獸8號' },
{day:6, name: '黑執事 -寄宿學校篇-', link: 'https://' + hostname + '/topics/list?keyword=黑執事' },
{day:6, name: '良禽不擇木', link: 'https://' + hostname + '/topics/list?keyword=良禽不擇木' },
{day:0, name: '龍族', link: 'https://' + hostname + '/topics/list?keyword=龍族' },
{day:0, name: '關於我轉生變成史萊姆這檔事 S3', link: 'https://' + hostname + '/topics/list?keyword=關於我轉生變成史萊姆這檔事' },
{day:0, name: '殺手寓言', link: 'https://' + hostname + '/topics/list?keyword=殺手寓言' },
{day:0, name: '夜晚的水母不會游泳', link: 'https://' + hostname + '/topics/list?keyword=夜晚的水母不會游泳' },
{day:0, name: '戀語輕唱', link: 'https://' + hostname + '/topics/list?keyword=戀語輕唱' },
{day:0, name: 'THE NEW GATE', link: 'https://' + hostname + '/topics/list?keyword=THE NEW GATE' },
{day:0, name: '遊戲王GO RUSH', link: 'https://' + hostname + '/topics/list?keyword=遊戲王GO RUSH' },
{day:0, name: '汪分精彩光之美少女', link: 'https://' + hostname + '/topics/list?keyword=汪分精彩光之美少女' },
{day:0, name: '全員逃走中', link: 'https://' + hostname + '/topics/list?keyword=全員逃走中' },
{day:0, name: '秘密的偶像公主', link: 'https://' + hostname + '/topics/list?keyword=秘密的偶像公主' },
{day:0, name: '戰隊大失格', link: 'https://' + hostname + '/topics/list?keyword=戰隊大失格' },
{day:0, name: '吹響吧！上低音號 S3', link: 'https://' + hostname + '/topics/list?keyword=吹響吧' },
{day:0, name: '夜櫻家的大作戰', link: 'https://' + hostname + '/topics/list?keyword=夜櫻家的大作戰' },
{day:0, name: '隊長小翼 S2', link: 'https://' + hostname + '/topics/list?keyword=隊長小翼' },
{day:0, name: '櫻桃小丸子', link: 'https://' + hostname + '/topics/list?keyword=櫻桃小丸子' },
{day:0, name: '海螺小姐', link: 'https://' + hostname + '/topics/list?keyword=海螺小姐' },
{day:0, name: '海賊王', link: 'https://' + hostname + '/topics/list?keyword=海賊王' },
{day:0, name: '死神少爺與黑女僕 S3', link: 'https://' + hostname + '/topics/list?keyword=死神少爺與黑女僕' },
{day:0, name: '鬼滅之刃[5/12播]', link: 'https://' + hostname + '/topics/list?keyword=鬼滅之刃' },
{day:0, name: '轉生貴族憑鑑定技能扭轉人生', link: 'https://' + hostname + '/topics/list?keyword=轉生貴族' },
{day:0, name: '老夫老妻重返青春', link: 'https://' + hostname + '/topics/list?keyword=Jiisan Baasan Wakagaeru' },
{day:0, name: '吸血鬼男子宿舍', link: 'https://' + hostname + '/topics/list?keyword=吸血鬼男子宿舍' },
{day:0, name: '蔚藍檔案', link: 'https://' + hostname + '/topics/list?keyword=蔚藍檔案' },

];
