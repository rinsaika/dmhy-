const dmhyEntries = [
{day:1, name: '無職轉生 S2', link: 'https://' + hostname + '/topics/list?keyword=無職轉生' },
{day:1, name: '明明是個礙事配角、卻被王子給寵愛了', link: 'https://' + hostname + '/topics/list?keyword=当て馬キャラのくせして、スパダリ王子に寵愛されています。' },
{day:1, name: '暗芝居 S12', link: 'https://' + hostname + '/topics/list?keyword=暗芝居' },
{day:1, name: '吉伊卡哇', link: 'https://' + hostname + '/topics/list?keyword=Chiikawa' },
{day:1, name: '末班列車去哪裡?', link: 'https://' + hostname + '/topics/list?keyword=Shuumatsu Train' },
{day:1, name: '神明渴求著遊戲', link: 'https://' + hostname + '/topics/list?keyword=神明渴求著遊戲' },
{day:1, name: '月光下的異世界之旅 S2', link: 'https://' + hostname + '/topics/list?keyword=月光下的異世界之旅' },
{day:1, name: '從 Lv2 開始開外掛的前勇者候補過著悠哉異世界生活', link: 'https://' + hostname + '/topics/list?keyword=從 Lv2 開始開外掛的前勇者候補過著悠哉異世界生活' },
{day:2, name: '轉生為第七王子，隨心所欲的魔法學習之路', link: 'https://' + hostname + '/topics/list?keyword=轉生為第七王子，隨心所欲的魔法學習之路' },
{day:2, name: '我回來了、歡迎回家', link: 'https://' + hostname + '/topics/list?keyword=我回來了、歡迎回家' },
{day:2, name: 'ARNOLD & PUPPETS', link: 'https://' + hostname + '/topics/list?keyword=' },
{day:2, name: '狼與香辛料 行商邂逅賢狼', link: 'https://' + hostname + '/topics/list?keyword=狼と香辛料 MERCHANT MEETS THE WISE WOLF' },
{day:2, name: '被稱為廢物的原英雄，被家裡流放後隨心所欲地活下去', link: 'https://' + hostname + '/topics/list?keyword=出来損ないと呼ばれた元英雄は、実家から追放されたので好き勝手に生きることにした' },
{day:2, name: '聖鬥士星矢：黃道十二宮戰士 戰鬥聖域 Part 2', link: 'https://' + hostname + '/topics/list?keyword=聖闘士星矢:Knights of the Zodiac バトル・サンクチュアリ Part 2' },
{day:2, name: '小鯊魚去郊游', link: 'https://' + hostname + '/topics/list?keyword=おでかけ子ザメ' },
{day:2, name: '刀劍亂舞 回 -虛傳 燃燒的本能寺-', link: 'https://' + hostname + '/topics/list?keyword=刀剣乱舞 廻 -虚伝 燃ゆる本能寺-' },
{day:2, name: '無名記憶', link: 'https://' + hostname + '/topics/list?keyword=Unnamed Memory' },
{day:2, name: '競輪少女！', link: 'https://' + hostname + '/topics/list?keyword=リンカイ！' },
{day:3, name: '通靈王 FLOWERS', link: 'https://' + hostname + '/topics/list?keyword=SHAMAN KING FLOWERS' },
{day:3, name: '失憶投捕', link: 'https://' + hostname + '/topics/list?keyword=忘却バッテリー' },
{day:3, name: '不忍！加密忍者咲耶', link: 'https://' + hostname + '/topics/list?keyword=忍ばない！クリプトニンジャ咲耶' },
{day:3, name: 'キラキラADらっこちゃん', link: 'https://' + hostname + '/topics/list?keyword=' },
{day:3, name: '聲優廣播的台前幕後', link: 'https://' + hostname + '/topics/list?keyword=声優ラジオのウラオモテ' },
{day:3, name: '怪異與少女與神隱', link: 'https://' + hostname + '/topics/list?keyword=怪異と乙女と神隠し' },
{day:3, name: '為美好的世界獻上祝福！第三季', link: 'https://' + hostname + '/topics/list?keyword=この素晴らしい世界に祝福を！3' },
{day:3, name: '約會大作戰 第五季', link: 'https://' + hostname + '/topics/list?keyword=デート・ア・ライブⅤ' },
{day:3, name: 'ROLY POLY PEOPLES', link: 'https://' + hostname + '/topics/list?keyword=' },
{day:4, name: '戰國妖狐', link: 'https://' + hostname + '/topics/list?keyword=戦国妖狐' },
{day:4, name: '調酒師 神之杯', link: 'https://' + hostname + '/topics/list?keyword=バーテンダー 神のグラス' },
{day:4, name: '喧嘩獨學', link: 'https://' + hostname + '/topics/list?keyword=喧嘩独学' },
{day:4, name: '京姬訊息部！', link: 'https://' + hostname + '/topics/list?keyword=こうしす!' },
{day:4, name: '金屬胭脂', link: 'https://' + hostname + '/topics/list?keyword=メタリックルージュ' },
{day:4, name: '時光代理人 -LINK CLICK- 第二季', link: 'https://' + hostname + '/topics/list?keyword=時光代理人 -LINK CLICK-Ⅱ' },
{day:4, name: '迷宮飯', link: 'https://' + hostname + '/topics/list?keyword=ダンジョン飯' },
{day:4, name: '搖曳露營△ 第三季', link: 'https://' + hostname + '/topics/list?keyword=ゆるキャン△ SEASON3' },
{day:4, name: '花野井君與相思病', link: 'https://' + hostname + '/topics/list?keyword=花野井くんと恋の病' },
{day:5, name: '怪物轉生', link: 'https://' + hostname + '/topics/list?keyword=Re:Monster' },
{day:5, name: '防風少年', link: 'https://' + hostname + '/topics/list?keyword=WIND BREAKER' },
{day:5, name: '身為魔王的我娶了奴隸精靈為妻，該如何表白我的愛？', link: 'https://' + hostname + '/topics/list?keyword=魔王の俺が奴隷エルフを嫁にしたんだが、どう愛でればいい？' },
{day:5, name: '福星小子 第二季', link: 'https://' + hostname + '/topics/list?keyword=うる星やつら(2022)第2期' },
{day:5, name: '偶像大師 閃耀色彩', link: 'https://' + hostname + '/topics/list?keyword=アイドルマスター シャイニーカラーズ' },
{day:5, name: '魔女與野獸', link: 'https://' + hostname + '/topics/list?keyword=魔女と野獣' },
{day:5, name: '怪人的沙拉碗', link: 'https://' + hostname + '/topics/list?keyword=変人のサラダボウル' },
{day:5, name: 'パンパカパンツ おNEWさん', link: 'https://' + hostname + '/topics/list?keyword=' },
{day:5, name: '小哥斯拉的逆襲 續篇', link: 'https://' + hostname + '/topics/list?keyword=ちびゴジラの逆襲(第2期)' },
{day:5, name: '麵包超人', link: 'https://' + hostname + '/topics/list?keyword=それいけ!アンパンマン' },
{day:5, name: 'パウ・パトロール(シーズン4)', link: 'https://' + hostname + '/topics/list?keyword=' },
{day:5, name: '戰鬥陀螺 X', link: 'https://' + hostname + '/topics/list?keyword=BEYBLADE X' },
{day:5, name: '寶可夢 地平線', link: 'https://' + hostname + '/topics/list?keyword=ポケットモンスター(2023)' },
{day:5, name: '狐妖小紅娘', link: 'https://' + hostname + '/topics/list?keyword=' },
{day:5, name: '超普通縣千葉傳說', link: 'https://' + hostname + '/topics/list?keyword=超普通県チバ伝説' },
{day:5, name: '虹四動畫 第二季', link: 'https://' + hostname + '/topics/list?keyword=にじよん あにめーしょん2' },
{day:5, name: '魔王學院的不適任者～史上最強的魔王始祖，轉生就讀子孫們的學校～ 第二季 第2部分', link: 'https://' + hostname + '/topics/list?keyword=魔王学院の不適合者II～史上最強の魔王の始祖、転生して子孫たちの学校へ通う～(2ndクール)' },
{day:5, name: '星際莊的戀愛日記', link: 'https://' + hostname + '/topics/list?keyword=アストロノオト' },
{day:5, name: '魔法科高校的劣等生 第三季', link: 'https://' + hostname + '/topics/list?keyword=魔法科高校の劣等生 第3シーズン' },
{day:6, name: 'GIRLS BAND CRY', link: 'https://' + hostname + '/topics/list?keyword=ガールズバンドクライ' },
{day:6, name: '高速星辰', link: 'https://' + hostname + '/topics/list?keyword=HIGHSPEED Étoile' },
{day:6, name: '澀谷♡八', link: 'https://' + hostname + '/topics/list?keyword=SHIBUYA♡HACHI' },
{day:6, name: '暖暖日記', link: 'https://' + hostname + '/topics/list?keyword=ぼのぼの(2016)' },
{day:6, name: '卡片戰鬥先導者 DivineZ', link: 'https://' + hostname + '/topics/list?keyword=カードファイト!! ヴァンガード Divinez' },
{day:6, name: '屁屁偵探 第八季', link: 'https://' + hostname + '/topics/list?keyword=おしりたんてい(第8シリーズ)' },
{day:6, name: '影之詩F 方舟篇', link: 'https://' + hostname + '/topics/list?keyword=シャドウバースF(アーク編)' },
{day:6, name: '喂！蜻蜓', link: 'https://' + hostname + '/topics/list?keyword=オーイ！とんぼ' },
{day:6, name: '泡泡糖忍戰', link: 'https://' + hostname + '/topics/list?keyword=ニンジャラ' },
{day:6, name: 'ぼくらベビーベアーズ', link: 'https://' + hostname + '/topics/list?keyword=' },
{day:6, name: '蠟筆小新', link: 'https://' + hostname + '/topics/list?keyword=クレヨンしんちゃん' },
{day:6, name: '哆啦A夢', link: 'https://' + hostname + '/topics/list?keyword=ドラえもん' },
{day:6, name: '全力兔子', link: 'https://' + hostname + '/topics/list?keyword=全力ウサギ(2023)' },
{day:6, name: '名偵探柯南', link: 'https://' + hostname + '/topics/list?keyword=名探偵コナン' },
{day:6, name: '單間、光照尚好、附帶天使。', link: 'https://' + hostname + '/topics/list?keyword=ワンルーム、日当たり普通、天使つき。' },
{day:6, name: '綻裂?!', link: 'https://' + hostname + '/topics/list?keyword=ぶっちぎり?!' },
{day:6, name: '怪獸8號', link: 'https://' + hostname + '/topics/list?keyword=怪獣8号' },
{day:6, name: '黑執事 -寄宿學校篇-', link: 'https://' + hostname + '/topics/list?keyword=黒執事 -寄宿学校編-' },
{day:6, name: '良禽不擇木', link: 'https://' + hostname + '/topics/list?keyword=烏は主を選ばない' },
{day:0, name: '龍族', link: 'https://' + hostname + '/topics/list?keyword=龍族 -The Blazing Dawn-' },
{day:0, name: '關於我轉生變成史萊姆這檔事 第三季', link: 'https://' + hostname + '/topics/list?keyword=転生したらスライムだった件 第3期' },
{day:0, name: '殺手寓言', link: 'https://' + hostname + '/topics/list?keyword=ザ・ファブル' },
{day:0, name: '夜晚的水母不會游泳', link: 'https://' + hostname + '/topics/list?keyword=夜のクラゲは泳げない' },
{day:0, name: '戀語輕唱', link: 'https://' + hostname + '/topics/list?keyword=ささやくように恋を唄う' },
{day:0, name: 'THE NEW GATE', link: 'https://' + hostname + '/topics/list?keyword=' },
{day:0, name: '與妖為鄰', link: 'https://' + hostname + '/topics/list?keyword=となりの妖怪さん' },
{day:0, name: '遊戲王 Go Rush！！', link: 'https://' + hostname + '/topics/list?keyword=遊☆戯☆王ゴーラッシュ!!' },
{day:0, name: '美妙寵物 光之美少女！', link: 'https://' + hostname + '/topics/list?keyword=わんだふるぷりきゅあ！' },
{day:0, name: '新幹線變形機器人 改變世界', link: 'https://' + hostname + '/topics/list?keyword=新幹線変形ロボ シンカリオン チェンジ ザ ワールド' },
{day:0, name: '逃走中 GREAT MISSION', link: 'https://' + hostname + '/topics/list?keyword=逃走中 グレートミッション' },
{day:0, name: '加比的玩偶屋', link: 'https://' + hostname + '/topics/list?keyword=ギャビーのドールハウス' },
{day:0, name: 'トランスフォーマー アーススパーク', link: 'https://' + hostname + '/topics/list?keyword=' },
{day:0, name: '秘密的偶像公主', link: 'https://' + hostname + '/topics/list?keyword=ひみつのアイプリ' },
{day:0, name: '戰隊大失格', link: 'https://' + hostname + '/topics/list?keyword=戦隊大失格' },
{day:0, name: '吹響！悠風號 第三季', link: 'https://' + hostname + '/topics/list?keyword=響け！ユーフォニアム3' },
{day:0, name: '夜櫻家的大作戰', link: 'https://' + hostname + '/topics/list?keyword=夜桜さんちの大作戦' },
{day:0, name: '足球小將 第二季 世少篇', link: 'https://' + hostname + '/topics/list?keyword=キャプテン翼シーズン2 ジュニアユース編' },
{day:0, name: '櫻桃小丸子', link: 'https://' + hostname + '/topics/list?keyword=ちびまる子ちゃん' },
{day:0, name: '智龍迷城', link: 'https://' + hostname + '/topics/list?keyword=パズドラ' },
{day:0, name: '海螺小姐', link: 'https://' + hostname + '/topics/list?keyword=サザエさん' },
{day:0, name: '海賊王', link: 'https://' + hostname + '/topics/list?keyword=ONE PIECE' },
{day:0, name: '死神少爺與黑女仆 第三季', link: 'https://' + hostname + '/topics/list?keyword=死神坊ちゃんと黒メイド（第3期）' },
{day:0, name: '轉生貴族靠著鑒定技能一飛沖天', link: 'https://' + hostname + '/topics/list?keyword=転生貴族、鑑定スキルで成り上がる' },
{day:0, name: '爺爺奶奶返老還童', link: 'https://' + hostname + '/topics/list?keyword=じいさんばあさん若返る' },
{day:0, name: '吸血鬼男子宿舍', link: 'https://' + hostname + '/topics/list?keyword=ヴァンパイア男子寮' },
{day:0, name: '蔚藍檔案 動畫版', link: 'https://' + hostname + '/topics/list?keyword=ブルーアーカイブ The Animation' },

];
