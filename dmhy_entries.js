
  //適配不同的鏡像站
  const hostname = window.location.hostname;

  //クール季度，用於公告欄使用
  const kuru = '目前為2024夏季(7~9月)索引v1';

  // 從 localStorage 中讀取已存儲的 dmhyEntries 和 kuru
  let storedKuru = localStorage.getItem('LocalKuru');
  let dmhyEntries = JSON.parse(localStorage.getItem('dmhyEntries'));

  // 如果 storedKuru 和 kuru 不匹配，或沒有存儲的 dmhyEntries，則重新生成
  if (storedKuru !== kuru || !dmhyEntries) {

  // 定義要插入的多個連結的數組
  const dmhyEntries = [
{day:0, nameJP: '遊☆戯☆王ゴーラッシュ!!', nameTW: '▶️遊戲王GO RUSH!!', nameCN:'▶️游戏王GO RUSH!!', keyword: '遊戲王' },
{day:0, nameJP: 'ワンピース', nameTW: '▶️航海王', nameCN:'▶️海贼王', keyword: 'ONE PIECE' },
{day:0, nameJP: '杖と剣のウィストリア', nameTW: '杖與劍的魔劍譚', nameCN:'杖与剑的魔剑谭', keyword: '杖與劍的魔劍譚' },
{day:0, nameJP: '夜桜さんちの大作戦', nameTW: '夜櫻家大作戰', nameCN:'夜樱家的大作战', keyword: '夜櫻家的大作戰' },
{day:0, nameJP: 'FAIRY TAIL 100年クエスト', nameTW: 'FAIRY TAIL 魔導少年 百年任務', nameCN:'妖精的尾巴 百年任务', keyword: 'FAIRY TAIL' },
{day:0, nameJP: 'キャプテン翼シーズン２ ジュニアユース編', nameTW: '隊長小翼Season2 青少年篇', nameCN:'队长小翼 世少篇', keyword: '隊長小翼' },
{day:0, nameJP: 'ちびまる子ちゃん', nameTW: '▶️櫻桃小丸子', nameCN:'▶️樱桃小丸子', keyword: '樱桃小丸子' },
{day:0, nameJP: 'サザエさん', nameTW: '▶️海螺小姐', nameCN:'▶️海螺小姐', keyword: '海螺小姐' },
{day:0, nameJP: '神之塔 -Tower of God- 王子の帰還 (第2期)', nameTW: '神之塔 -Tower of God- 第二季', nameCN:'神之塔 第2期', keyword: '神之塔 第2期' },
{day:0, nameJP: 'キン肉マン 完璧超人始祖編', nameTW: '金肉人 完美超人始祖篇', nameCN:'金肉人 完美超人始祖篇', keyword: '金肉人' },
{day:0, nameJP: 'しかのこのこのここしたんたん', nameTW: '鹿乃子乃子虎視眈眈', nameCN:'鹿乃子乃子虎视眈眈', keyword: '鹿乃子乃子虎視眈眈' },
{day:0, nameJP: '菜なれ花なれ', nameTW: '少女如草花綻放', nameCN:'变成菜变成花', keyword: '變成菜變成花' },
{day:0, nameJP: 'VTuberなんだが配信切り忘れたら伝説になってた', nameTW: '身為 VTuber 的我因為忘記關台而成了傳說', nameCN:'身为VTuber的我因为忘记关台而成了传说', keyword: '身為VTuber的我因為忘記關台而成了傳說' },
{day:0, nameJP: '異世界ゆるり紀行 ～子育てしながら冒険者します～', nameTW: '異世界悠閒紀行～邊養娃邊當冒險者～', nameCN:'异世界悠闲纪行～边养娃边当冒险者～', keyword: '悠閒紀行' },
{day:0, nameJP: '闇芝居 第十三期', nameTW: '闇芝居 第十三期', nameCN:'闇芝居 第十三期', keyword: '闇芝居' },
{day:0, nameJP: 'よあそびぐらしっ！', nameTW: '([AnimeFesta]版)夜晚玩耍生活！', nameCN:'([AnimeFesta]版)夜晚玩耍生活！', keyword: '夜晚玩耍生活' },
{day:1, nameJP: '忍たま乱太郎(第32期)', nameTW: '▶️忍者亂太郎', nameCN:'▶️忍者乱太郎', keyword: '忍者乱太郎' },
{day:1, nameJP: '真夜中ぱんチ', nameTW: '深夜中的一擊', nameCN:'深夜冲击', keyword: '深夜冲击' },
{day:1, nameJP: 'SHY 東京奪還編 (第2期)', nameTW: 'SHY 靦腆英雄 第二季', nameCN:'SHY 腼腆英雄 第2期', keyword: 'SHY' },
{day:1, nameJP: '狼と香辛料 MERCHANT MEETS THE WISE WOLF', nameTW: '狼與辛香料 MERCHANT MEETS THE WISE WOLF', nameCN:'狼与香辛料 行商邂逅贤狼', keyword: '狼與香辛料' },
{day:1, nameJP: '新米オッサン冒険者、最強パーティに死ぬほど鍛えられて無敵になる。', nameTW: '菜鳥大叔冒險者，被最強小隊拼死鍛煉後無敵了。', nameCN:'新人大叔冒险者，被最强队伍操到死成无敌', keyword: '大叔冒险者' },
{day:2, nameJP: 'エグミレガシー', nameTW: 'EGUMI LEGACY', nameCN:'EGUMI LEGACY', keyword: 'EGUMI LEGACY' },
{day:2, nameJP: 'かつて魔法少女と悪は敵対していた。', nameTW: '曾經、魔法少女和邪惡相互為敵。', nameCN:'曾经、魔法少女和邪恶相互为敌。', keyword: '魔法少女和邪惡相互為敵' },
{day:2, nameJP: '僕の妻は感情がない', nameTW: '我的妻子不具感情', nameCN:'我的妻子不具感情', keyword: '我的妻子不具感情' },
{day:2, nameJP: '異世界失格', nameTW: '異世界失格', nameCN:'异世界失格', keyword: '異世界失格' },
{day:2, nameJP: '多数欠', nameTW: '多數欠', nameCN:'多数欠', keyword: '多数欠' },
{day:3, nameJP: '魔王軍最強の魔術師は人間だった', nameTW: '魔王軍最強的魔術師是人類', nameCN:'魔王军最强的魔术师是人类', keyword: '魔王軍最強的魔術師是人類' },
{day:3, nameJP: '【推しの子】第2期', nameTW: '【我推的孩子】第二季', nameCN:'我推的孩子 第二季', keyword: '我推的孩子' },
{day:3, nameJP: '時々ボソッとロシア語でデレる隣のアーリャさん', nameTW: '不時輕聲地以俄語遮羞的鄰座艾莉同學', nameCN:'不时轻声地以俄语遮羞的邻座艾莉同学', keyword: '不時輕聲地以俄語遮羞的鄰座艾莉同學' },
{day:3, nameJP: '恋は双子で割り切れない', nameTW: '雙生戀情密不可分', nameCN:'双生恋情密不可分', keyword: '雙生戀情密不可分' },
{day:3, nameJP: '戦国妖狐 千魔混沌編', nameTW: '戰國妖狐 千魔混沌篇', nameCN:'战国妖狐', keyword: '戰國妖狐' },
{day:3, nameJP: 'デリコズ・ナーサリー (八月放送)', nameTW: 'Delicos・Nursery', nameCN:'Delicos・Nursery', keyword: 'Delicos' },
{day:3, nameJP: 'キミと僕の最後の戦場、あるいは世界が始まる聖戦 Season II', nameTW: '這是妳與我的最後戰場，或是開創世界的聖戰 第二季', nameCN:'你与我最后的战场，亦或是世界起始的圣战 第2季', keyword: '最後的戰場' },
{day:4, nameJP: '義妹生活', nameTW: '義妹生活', nameCN:'义妹生活', keyword: '義妹生活' },
{day:4, nameJP: '黄昏アウトフォーカス', nameTW: '[BL]黃昏光影', nameCN:'[BL]黄昏光影', keyword: '黃昏光影' },
{day:4, nameJP: 'ラーメン赤猫', nameTW: '拉麵赤貓', nameCN:'拉面赤猫', keyword: '拉麵赤貓' },
{day:4, nameJP: '俺は全てを【パリイ】する～逆勘違いの世界最強は冒険者になりたい～', nameTW: '我要【招架】一切～反誤解的世界最強想成為冒險家～', nameCN:'我要招架一切反误解的世界最强想成为冒险者', keyword: '反誤解的世界最強' },
{day:4, nameJP: '女神のカフェテラス 第2期', nameTW: '女神咖啡廳 第二季', nameCN:'女神咖啡厅 第2季', keyword: '女神咖啡廳' },
{day:4, nameJP: '疑似ハーレム', nameTW: '模擬後宮體驗', nameCN:'百变的七仓同学', keyword: '七仓' },
{day:4, nameJP: '先輩はおとこのこ', nameTW: '前輩是偽娘', nameCN:'前辈是伪娘', keyword: '前輩是偽娘' },
{day:4, nameJP: 'ハズレ枠の【状態異常スキル】で最強になった俺がすべてを蹂躙するまで', nameTW: '靠廢柴技能【狀態異常】成為最強的我將蹂躪一切', nameCN:'靠废柴技能【状态异常】成为最强的我将蹂躏一切', keyword: '靠廢柴技能' },
{day:5, nameJP: 'まぁるい彼女と残念な彼氏', nameTW: '圓圓女友與殘念男友', nameCN:'圆圆女友与残念男友', keyword: '圓圓女友與殘念男友' },
{day:5, nameJP: '2.5次元の誘惑（リリサ） ', nameTW: '2.5 次元的誘惑', nameCN:'2.5次元的诱惑', keyword: '次元的誘惑' },
{day:5, nameJP: '転生したらスライムだった件 第3期', nameTW: '關於我轉生變成史萊姆這檔事 第三季', nameCN:'关于我转生变成史莱姆这档事 第三季', keyword: '關於我轉生變成史萊姆這檔事' },
{day:5, nameJP: 'NieR:Automata Ver1.1a 第2クール', nameTW: '尼爾：自動人形 Ver1.1a 第二季', nameCN:'尼尔：自动人形 Ver1.1a 第二季', keyword: '尼爾' },
{day:5, nameJP: 'ばいばい、アース', nameTW: '掰掰、地球', nameCN:'再见，地球', keyword: '再見  地球' },
{day:5, nameJP: '異世界スーサイド・スクワッド', nameTW: '異世界自殺突擊隊', nameCN:'异世界自杀小队', keyword: '異世界自殺' },
{day:5, nameJP: 'グレンダイザーU', nameTW: '金剛戰神 U', nameCN:'古连泰沙U', keyword: 'グレンダイザーU' },
{day:5, nameJP: 'ダンジョンの中のひと', nameTW: '地下城中的人', nameCN:'地下城中的人', keyword: '地下城中的人' },
{day:5, nameJP: '未来の黒幕系悪役令嬢モリアーティーの異世界完全犯罪白書', nameTW: '未來的幕後黑手惡役千金莫裏亞蒂的異世界完全犯罪白書', nameCN:'未来的幕后黑手恶役千金莫里亚蒂的异世界完全犯罪白书', keyword: '未來的幕後黑手' },
{day:5, nameJP: 'この世界は不完全すぎる', nameTW: '這個世界太不完整', nameCN:'这个世界漏洞百出', keyword: '這個世界' },
{day:6, nameJP: 'ぼのぼの', nameTW: '▶️暖暖日記', nameCN:'▶️暖暖日记', keyword: '暖暖日記' },
{day:6, nameJP: 'クレヨンしんちゃん', nameTW: '▶️蠟筆小新', nameCN:'▶️蜡笔小新', keyword: '蠟筆小新' },
{day:6, nameJP: 'ドラえもん', nameTW: '▶️哆啦A夢', nameCN:'▶️哆啦A梦', keyword: '哆啦A夢' },
{day:6, nameJP: '僕のヒーローアカデミア 第7期', nameTW: '我的英雄學院 第七季', nameCN:'我的英雄学院 第七季', keyword: '我的英雄學院' },
{day:6, nameJP: '名探偵コナン', nameTW: '▶️名偵探柯南', nameCN:'▶️名侦探柯南', keyword: '名偵探柯南' },
{day:6, nameJP: '魔導具師ダリヤはうつむかない', nameTW: '魔導具師妲莉亞永不妥協', nameCN:'魔导具师妲莉亚永不妥协', keyword: '魔導具師妲莉亞永不妥協' },
{day:6, nameJP: 'モブから始まる探索英雄譚', nameTW: '[ABEMA]從路人角色開始的探索英雄譚', nameCN:'[ABEMA]从路人角色开始的探索英雄谭', keyword: '從路人角色' },
{day:6, nameJP: 'なぜ僕の世界を誰も覚えていないのか？', nameTW: '為何我的世界被遺忘了？', nameCN:'为何无人记得我的世界？', keyword: '為何 我的世界' },
{day:6, nameJP: '天穂のサクナヒメ', nameTW: '天穗之咲稻姬', nameCN:'天穗之咲稻姬', keyword: '天穗之咲稻姬' },
{day:6, nameJP: '逃げ上手の若君', nameTW: '擅長逃跑的殿下', nameCN:'擅长逃跑的殿下', keyword: '擅長逃跑的殿下' },
{day:6, nameJP: 'カードファイト!! ヴァンガード Divinez Season2', nameTW: '卡片戰鬥!! 先導者 Divinez 第二季', nameCN:'卡片战斗!! 先导者 Divinez 第二季', keyword: '卡片战斗' },
{day:6, nameJP: 'ATRI -My Dear Moments-', nameTW: 'ATRI-My Dear Moments-', nameCN:'亚托莉 -我挚爱的时光-', keyword: 'ATRI' },
{day:6, nameJP: '負けヒロインが多すぎる！', nameTW: '敗北女角太多了！', nameCN:'败北女角太多了！', keyword: '敗北女角太多了' },
{day:6, nameJP: 'ザ・ファブル (播到夏季結束)', nameTW: '殺手寓言', nameCN:'杀手寓言', keyword: '殺手寓言' },
{day:6, nameJP: '現代誤訳', nameTW: '現代誤譯', nameCN:'现代误译', keyword: '現代誤譯' },
{day:6, nameJP: 'エルフさんは痩せられない。', nameTW: '精靈小姐瘦不了', nameCN:'精灵小姐瘦不了', keyword: '精靈小姐' },
{day:6, nameJP: '小市民シリーズ', nameTW: '小市民系列', nameCN:'小市民系列', keyword: '小市民系列' },
{day:6, nameJP: '〈物語〉シリーズ オフ＆モンスターシーズン', nameTW: '[ABEMA]物語系列 番外＆怪物季', nameCN:'[ABEMA]愚物语&抚物语', keyword: '物語' },
{day:7, nameJP: 'JOCHUM(ジェオチャム)', nameTW: 'JOCHUM', nameCN:'JOCHUM', keyword: 'JOCHUM' },
{day:7, nameJP: '貼りまわれ！こいぬ 第2期', nameTW: '四處貼上吧！小狗 第二季', nameCN:'四处贴上吧！小狗 第二季', keyword: '四處貼上吧' },
{day:7, nameJP: 'ちびゴジラの逆襲 続編(一年放送)', nameTW: '[YouTube]小小哥吉拉的逆襲 續篇', nameCN:'[YouTube]小小哥吉拉的逆袭 续篇', keyword: '小小哥吉拉的逆襲' },
{day:7, nameJP: 'ウルトラマンアーク', nameTW: '[特攝]超人力霸王雅克', nameCN:'[特攝]亚刻奥特曼', keyword: '奥特曼' },
{day:7, nameJP: 'ライジングインパクト シーズン1', nameTW: '[Netflix]高爾夫物語 第一季', nameCN:'[Netflix]高尔夫物语 第一季', keyword: '高爾夫物語' },
{day:7, nameJP: 'T・Pぼん シーズン2', nameTW: '[Netflix]T·P 時光特警 第二季', nameCN:'[Netflix]时光巡逻队 第二季', keyword: '时光巡逻队' },
{day:7, nameJP: 'こねこのチー ポンポンらー夏休み', nameTW: '[Netflix]奇奇暑假日記', nameCN:'[Netflix]奇奇暑假日记', keyword: '奇奇暑假日記' },
{day:7, nameJP: 'ライジングインパクト シーズン2', nameTW: '[Netflix]高爾夫物語 第二季', nameCN:'[Netflix]高尔夫物语 第二季', keyword: '高爾夫物語' },
{day:7, nameJP: '君に届け 3RD SEASON (八月放送)', nameTW: '[Netflix]只想告訴你 3RD SEASON', nameCN:'[Netflix]只想告诉你 3RD SEASON', keyword: '只想告诉你 ' },
{day:7, nameJP: 'ケンガンアシュラ Season2 Part2 (八月放送)', nameTW: '[Netflix]拳願阿修羅 Season2 Part2', nameCN:'[Netflix]拳愿阿修罗 Season2 Part2', keyword: '拳願阿修羅' },
{day:7, nameJP: '0歳児スタートダッシュ物語', nameTW: '0歲兒童起跑線故事', nameCN:'0岁儿童起跑线故事', keyword: '0歲兒童起跑線故事' },
{day:7, nameJP: 'ユーチューニャー', nameTW: '[YouTube]YouTuNya', nameCN:'[YouTube]YouTu猫 新作动画', keyword: 'YouTu猫' },
{day:7, nameJP: 'あたしンちNEXT (*6月~10月 每月5日 共5話)', nameTW: '[YouTube]我們這一家NEXT', nameCN:'[YouTube]我們這一家NEXT', keyword: '我們這一家' },
{day:7, nameJP: 'NINJA KAMUI (2024年2月11日美國放送，2024/07/01日本放送)', nameTW: 'NINJA KAMUI', nameCN:'忍者神威', keyword: 'NINJA KAMUI' },
{day:7, nameJP: '下の階には澪がいる', nameTW: '[bilibili]愛上姐姐的理由', nameCN:'[bilibili]爱上她的理由', keyword: '爱上她的理由' },
{day:7, nameJP: '[BL]山川純一アニメ劇場 (共三話)', nameTW: '[AnimeFesta][BL]山川純一動畫劇場', nameCN:'[AnimeFesta][BL]山川純一動畫劇場', keyword: '山川純一' },
{day:7, nameJP: '伊藤潤二『マニアック』 (2023年1月19日Netflix放送，2024/07/07電視台放送)', nameTW: '伊藤潤二狂熱：日本恐怖故事', nameCN:'伊藤润二狂热：日本恐怖故事', keyword: '伊藤潤二' },
{day:7, nameJP: 'ターミネーター 0 (八月放送)', nameTW: '[Netflix]Terminator Zero', nameCN:'[Netflix]Terminator Zero', keyword: 'Terminator Zero' },

  ];

    // 生成連結
    dmhyEntries.forEach(entry => {
        entry.link = `https://${hostname}/topics/list?keyword=${encodeURIComponent(entry.keyword)}`;
    });

    // 將新的 dmhyEntries 和 kuru 存儲到 localStorage
    localStorage.setItem('dmhyEntries', JSON.stringify(dmhyEntries));
    localStorage.setItem('LocalKuru',kuru);
}

console.log(dmhyEntries);
console.log(kuru);
