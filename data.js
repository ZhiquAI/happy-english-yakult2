// 英语养乐多2 数据配置
const LESSON_DATA = {
  title: "英语养乐多 2 (Happy English 2)",
  school: "Xi'an Jingkai No.1 School",
  audioMaster: "app_assets/audio.mp3",
  intro: {
    title: "课前指读准备",
    text: "亲爱的宝贝们，大家好。请跟老师一起读。请注意坐姿，要坐到头正，肩平，身直，足安。左手压书，右手指读。",
    clip: "app_assets/audio_clips/intro_teacher.mp3",
    start: 0.0,
    end: 15.0
  },
  teacherEncouragement: {
    title: "老师寄语与总结",
    text: "孩子们，坚持本身就是一件非常酷的事。期待所有的宝贝们在养乐多2大闯关中，人人都能收获满心荣耀。冲呀，孩儿们！",
    clip: "app_assets/audio_clips/teacher_encouragement.mp3",
    start: 448.0,
    end: 459.6
  },
  part1: {
    title: "I. Magic phonics. 认读语音单词",
    subtitle: "(会说会读)",
    clip: "app_assets/audio_clips/sec1_title.mp3",
    items: [
      {
        id: "phonics_a",
        letter: "Aa aa",
        highlightLetter: "a",
        word: "apple",
        chinese: "苹果",
        img: "app_assets/apple.jpg",
        clip: "app_assets/audio_clips/phonics_a.mp3",
        chant: "A, a, /æ/, /æ/, apple"
      },
      {
        id: "phonics_b",
        letter: "Bb bb",
        highlightLetter: "b",
        word: "banana",
        chinese: "香蕉",
        img: "app_assets/banana.jpg",
        clip: "app_assets/audio_clips/phonics_b.mp3",
        chant: "B, b, /b/, /b/, banana"
      },
      {
        id: "phonics_c",
        letter: "Cc cc",
        highlightLetter: "c",
        word: "cat",
        chinese: "小猫",
        img: "app_assets/cat.jpg",
        clip: "app_assets/audio_clips/phonics_c.mp3",
        chant: "C, c, /k/, /k/, cat"
      },
      {
        id: "phonics_d",
        letter: "Dd dd",
        highlightLetter: "d",
        word: "dog",
        chinese: "小狗",
        img: "app_assets/dog.jpg",
        clip: "app_assets/audio_clips/phonics_d.mp3",
        chant: "D, d, /d/, /d/, dog"
      },
      {
        id: "phonics_e",
        letter: "Ee ee",
        highlightLetter: "e",
        word: "egg",
        chinese: "鸡蛋",
        img: "app_assets/egg.jpg",
        clip: "app_assets/audio_clips/phonics_e.mp3",
        chant: "E, e, /e/, /e/, egg"
      },
      {
        id: "phonics_f",
        letter: "Ff ff",
        highlightLetter: "f",
        word: "fan",
        chinese: "风扇",
        img: "app_assets/fan.jpg",
        clip: "app_assets/audio_clips/phonics_f.mp3",
        chant: "F, f, /f/, /f/, fan"
      }
    ]
  },
  part2: {
    title: "II. I can read. 单词闯关",
    subtitle: "(读词知意)",
    clip: "app_assets/audio_clips/sec2_title.mp3",
    groups: [
      {
        groupName: "文具类 (School Supplies)",
        items: [
          { id: "word_pencil", word: "pencil", chinese: "铅笔", img: "app_assets/pencil.jpg", clip: "app_assets/audio_clips/word_pencil.mp3" },
          { id: "word_ruler", word: "ruler", chinese: "尺子", img: "app_assets/ruler.jpg", clip: "app_assets/audio_clips/word_ruler.mp3" },
          { id: "word_eraser", word: "eraser", chinese: "橡皮", img: "app_assets/eraser.jpg", clip: "app_assets/audio_clips/word_eraser.mp3" },
          { id: "word_book", word: "book", chinese: "书本", img: "app_assets/book.jpg", clip: "app_assets/audio_clips/word_book.mp3" },
          { id: "word_pencilcase", word: "pencil case", chinese: "文具盒", img: "app_assets/pencil_case.jpg", clip: "app_assets/audio_clips/word_pencilcase.mp3" }
        ]
      },
      {
        groupName: "动作与物品 (Actions & Essentials)",
        items: [
          { id: "word_schoolbag", word: "schoolbag", chinese: "书包", img: "app_assets/schoolbag.jpg", clip: "app_assets/audio_clips/word_schoolbag.mp3" },
          { id: "word_show", word: "show", chinese: "出示 / 给...看", img: "app_assets/show.jpg", clip: "app_assets/audio_clips/word_show.mp3" },
          { id: "word_open", word: "open", chinese: "打开", img: "app_assets/open.jpg", clip: "app_assets/audio_clips/word_open.mp3" },
          { id: "word_close", word: "close", chinese: "合上 / 关上", img: "app_assets/close.jpg", clip: "app_assets/audio_clips/word_close.mp3" },
          { id: "word_one", word: "one", chinese: "数字 1", img: "app_assets/one.jpg", clip: "app_assets/audio_clips/word_one.mp3" }
        ]
      },
      {
        groupName: "数字家族 (Numbers 2 - 6)",
        items: [
          { id: "word_two", word: "two", chinese: "数字 2", img: "app_assets/two.jpg", clip: "app_assets/audio_clips/word_two.mp3" },
          { id: "word_three", word: "three", chinese: "数字 3", img: "app_assets/three.jpg", clip: "app_assets/audio_clips/word_three.mp3" },
          { id: "word_four", word: "four", chinese: "数字 4", img: "app_assets/four.jpg", clip: "app_assets/audio_clips/word_four.mp3" },
          { id: "word_five", word: "five", chinese: "数字 5", img: "app_assets/five.jpg", clip: "app_assets/audio_clips/word_five.mp3" },
          { id: "word_six", word: "six", chinese: "数字 6", img: "app_assets/six.jpg", clip: "app_assets/audio_clips/word_six.mp3" }
        ]
      }
    ]
  },
  part3: {
    title: "III. I can say. 口语闯关",
    subtitle: "(会说会演)",
    clip: "app_assets/audio_clips/sec3_title.mp3",
    dialogues: [
      {
        num: "1",
        title: "自我介绍",
        sentences: [
          { id: "say_1_book", role: "Book", text: "--Hi! I'm a book.", chinese: "你好！我是一本书。", clip: "app_assets/audio_clips/say_1_book.mp3", icon: "app_assets/book.jpg" },
          { id: "say_1_pencil", role: "Pencil", text: "--Hi! I'm a pencil.", chinese: "你好！我是一支铅笔。", clip: "app_assets/audio_clips/say_1_pencil.mp3", icon: "app_assets/pencil.jpg" }
        ]
      },
      {
        num: "2",
        title: "展示文具 (点击文具切换发音)",
        prompt: "--Show me your ________, please.",
        options: [
          { id: "say_2_book", target: "book", text: "--Show me your book, please.", chinese: "把你的书给我看看。", clip: "app_assets/audio_clips/say_2_book.mp3", icon: "app_assets/book.jpg" },
          { id: "say_2_pencil", target: "pencil", text: "--Show me your pencil, please.", chinese: "把你的铅笔给我看看。", clip: "app_assets/audio_clips/say_2_pencil.mp3", icon: "app_assets/pencil.jpg" },
          { id: "say_2_eraser", target: "eraser", text: "--Show me your eraser, please.", chinese: "把你的橡皮给我看看。", clip: "app_assets/audio_clips/say_2_eraser.mp3", icon: "app_assets/eraser.jpg" },
          { id: "say_2_ruler", target: "ruler", text: "--Show me your ruler, please.", chinese: "把你的尺子给我看看。", clip: "app_assets/audio_clips/say_2_ruler.mp3", icon: "app_assets/ruler.jpg" },
          { id: "say_2_pencilcase", target: "pencil case", text: "--Show me your pencil case, please.", chinese: "把你的文具盒给我看看。", clip: "app_assets/audio_clips/say_2_pencilcase.mp3", icon: "app_assets/pencil_case.jpg" }
        ]
      },
      {
        num: "3 & 4",
        title: "课堂动作指令",
        sentences: [
          { id: "say_3_open", text: "3. --Open your book, please.", chinese: "请打开你的书。", clip: "app_assets/audio_clips/say_3_open.mp3", icon: "app_assets/open.jpg" },
          { id: "say_4_close", text: "4. --Close your book, please.", chinese: "请合上你的书。", clip: "app_assets/audio_clips/say_4_close.mp3", icon: "app_assets/close.jpg" }
        ]
      },
      {
        num: "5",
        title: "收拾书包口语句型",
        prompt: "Pack my ________...",
        options: [
          { id: "say_5_schoolbag", target: "schoolbag", text: "Pack my schoolbag.", chinese: "收拾我的书包。", clip: "app_assets/audio_clips/say_5_schoolbag.mp3", icon: "app_assets/schoolbag.jpg" },
          { id: "say_5_pencils", target: "pencils", text: "Pack my pencils.", chinese: "收拾我的铅笔。", clip: "app_assets/audio_clips/say_5_pencils.mp3", icon: "app_assets/pencil.jpg" },
          { id: "say_5_ruler", target: "ruler", text: "Pack my ruler.", chinese: "收拾我的尺子。", clip: "app_assets/audio_clips/say_5_ruler.mp3", icon: "app_assets/ruler.jpg" },
          { id: "say_5_eraser", target: "eraser", text: "Pack my eraser.", chinese: "收拾我的橡皮。", clip: "app_assets/audio_clips/say_5_eraser.mp3", icon: "app_assets/eraser.jpg" },
          { id: "say_5_books", target: "books", text: "Pack my books.", chinese: "收拾我的书本。", clip: "app_assets/audio_clips/say_5_books.mp3", icon: "app_assets/book.jpg" }
        ]
      },
      {
        num: "6",
        title: "友爱互助与致谢",
        sentences: [
          { id: "say_6_ruler", text: "--Use my ruler.", chinese: "请用我的尺子。", clip: "app_assets/audio_clips/say_6_ruler.mp3", icon: "app_assets/ruler.jpg" },
          { id: "say_6_thankyou", text: "--Thank you.", chinese: "谢谢你。", clip: "app_assets/audio_clips/say_6_thankyou.mp3", icon: "app_assets/avatar_kids.jpg" }
        ]
      },
      {
        num: "7 & 8",
        title: "数字趣味形象儿歌",
        rhymes: [
          { id: "say_7_pencil", num: "1", text: "One is a pencil.", chinese: "1 是一支铅笔。", clip: "app_assets/audio_clips/say_7_pencil.mp3", img: "app_assets/pencil.jpg", mnemonic: "1 像铅笔细又长" },
          { id: "say_7_duck", num: "2", text: "Two is a duck.", chinese: "2 是一只鸭子。", clip: "app_assets/audio_clips/say_7_duck.mp3", img: "app_assets/duck.jpg", mnemonic: "2 像小鸭水上漂" },
          { id: "say_7_ear", num: "3", text: "Three is a little ear.", chinese: "3 是一只小耳朵。", clip: "app_assets/audio_clips/say_7_ear.mp3", img: "app_assets/ear.jpg", mnemonic: "3 像耳朵听声音" },
          { id: "say_8_flag", num: "4", text: "Four is a flag.", chinese: "4 是一面旗子。", clip: "app_assets/audio_clips/say_8_flag.mp3", img: "app_assets/flag.jpg", mnemonic: "4 像小旗随风飘" },
          { id: "say_8_key", num: "5", text: "Five is a key.", chinese: "5 是一把钥匙。", clip: "app_assets/audio_clips/say_8_key.mp3", img: "app_assets/key.jpg", mnemonic: "5 像钥匙开大门" },
          { id: "say_8_whistle", num: "6", text: "Six is a whistle.", chinese: "6 是一个口哨。", clip: "app_assets/audio_clips/say_8_whistle.mp3", img: "app_assets/whistle.jpg", mnemonic: "6 像哨子吹得响" }
        ]
      },
      {
        num: "9",
        title: "数字识别表达",
        prompt: "I can see ________.",
        options: [
          { id: "say_9_one", num: "1", text: "I can see one.", chinese: "我能看到数字 1。", clip: "app_assets/audio_clips/say_9_one.mp3" },
          { id: "say_9_two", num: "2", text: "I can see two.", chinese: "我能看到数字 2。", clip: "app_assets/audio_clips/say_9_two.mp3" },
          { id: "say_9_three", num: "3", text: "I can see three.", chinese: "我能看到数字 3。", clip: "app_assets/audio_clips/say_9_three.mp3" },
          { id: "say_9_four", num: "4", text: "I can see four.", chinese: "我能看到数字 4。", clip: "app_assets/audio_clips/say_9_four.mp3" },
          { id: "say_9_five", num: "5", text: "I can see five.", chinese: "我能看到数字 5。", clip: "app_assets/audio_clips/say_9_five.mp3" },
          { id: "say_9_six", num: "6", text: "I can see six.", chinese: "我能看到数字 6。", clip: "app_assets/audio_clips/say_9_six.mp3" }
        ]
      }
    ]
  },
  page2: {
    title: "Pack my schoolbag",
    subtitle: "Pack your schoolbag and say. (整理书包口语展示秀)",
    heroImg: "app_assets/p2_pack_schoolbag.jpg",
    presentation: [
      { id: "p2_1", template: "Hello, I'm {name}.", defaultVal: "Mike", label: "你的英文名", chinese: "你好，我是...", clip: "app_assets/speech/p2_line_1.mp3" },
      { id: "p2_2", text: "I'm in Xi'an Jingkai No.1 School.", chinese: "我就读于西安经开第一学校。", clip: "app_assets/speech/p2_line_2.mp3" },
      { id: "p2_3", template: "I'm in Class {classNum}, Grade 1.", defaultVal: "1", label: "班级", chinese: "我在一年级...班。", clip: "app_assets/speech/p2_line_3.mp3" },
      { id: "p2_4", text: "I can pack my schoolbag.", chinese: "我会自己收拾书包啦！", clip: "app_assets/speech/p2_line_4.mp3" },
      { id: "p2_5", text: "Look! Pack my pencils.", chinese: "看！收拾我的铅笔。", clip: "app_assets/speech/p2_line_5.mp3" },
      { id: "p2_6_ruler", text: "Pack my ruler.", chinese: "收拾我的尺子。", clip: "app_assets/speech/p2_line_6_ruler.mp3" },
      { id: "p2_6_eraser", text: "Pack my eraser.", chinese: "收拾我的橡皮。", clip: "app_assets/speech/p2_line_6_eraser.mp3" },
      { id: "p2_6_book", text: "Pack my books.", chinese: "收拾我的书本。", clip: "app_assets/speech/p2_line_6_book.mp3" },
      { id: "p2_6_pencilcase", text: "Pack my pencil case.", chinese: "收拾我的文具盒。", clip: "app_assets/speech/p2_line_6_pencilcase.mp3" },
      { id: "p2_7", text: "En, good. I'm done!", chinese: "嗯，太棒啦！我收拾好啦！", clip: "app_assets/speech/p2_line_7.mp3" }
    ],
    interactiveGameItems: [
      { id: "game_pencil", name: "pencils", label: "铅笔", img: "app_assets/pencil.jpg", speech: "Pack my pencils." },
      { id: "game_ruler", name: "ruler", label: "尺子", img: "app_assets/ruler.jpg", speech: "Pack my ruler." },
      { id: "game_eraser", name: "eraser", label: "橡皮", img: "app_assets/eraser.jpg", speech: "Pack my eraser." },
      { id: "game_book", name: "books", label: "课本", img: "app_assets/book.jpg", speech: "Pack my books." },
      { id: "game_pencilcase", name: "pencil case", label: "文具盒", img: "app_assets/pencil_case.jpg", speech: "Pack my pencil case." }
    ]
  }
};

if (typeof window !== "undefined") { window.LESSON_DATA = LESSON_DATA; }
if (typeof module !== "undefined") { module.exports = LESSON_DATA; }
