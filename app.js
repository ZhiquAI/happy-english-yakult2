// 英语养乐多2 交互点读引擎

let currentAudio = null;
let currentPlayingId = null;
let currentPlayingEl = null;
let playbackSpeed = 1.0;
let isContinuousMode = false;
let continuousIndex = -1;
let continuousList = [];
let hideChinese = false;

// 初始化
document.addEventListener("DOMContentLoaded", () => {
  renderPage1();
  renderPage2();
  initAudioControls();
  initTabs();
  initTouchGestures();
  buildContinuousList();
  loadSavedProfile();
});

// 构建连续伴读播放列表
function buildContinuousList() {
  continuousList = [];
  
  // 1. 语音单词 (Phonics)
  LESSON_DATA.part1.items.forEach(item => {
    continuousList.push({
      id: item.id,
      title: `${item.letter} ${item.word}`,
      clip: item.clip,
      page: 1
    });
  });

  // 2. 单词闯关 (Words)
  LESSON_DATA.part2.groups.forEach(group => {
    group.items.forEach(item => {
      continuousList.push({
        id: item.id,
        title: item.word,
        clip: item.clip,
        page: 1
      });
    });
  });

  // 3. 口语闯关 (Sayings)
  LESSON_DATA.part3.dialogues.forEach(d => {
    if (d.sentences) {
      d.sentences.forEach(s => {
        continuousList.push({
          id: s.id,
          title: s.text,
          clip: s.clip,
          page: 1
        });
      });
    }
    if (d.options) {
      d.options.forEach(opt => {
        continuousList.push({
          id: opt.id,
          title: opt.text,
          clip: opt.clip,
          page: 1
        });
      });
    }
    if (d.rhymes) {
      d.rhymes.forEach(r => {
        continuousList.push({
          id: r.id,
          title: r.text,
          clip: r.clip,
          page: 1
        });
      });
    }
  });
}

// 标签页切换
function initTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab");
      switchTab(targetId);
    });
  });
}

function switchTab(targetId) {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabBtns.forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-tab") === targetId);
  });
  tabPanes.forEach(p => {
    p.style.display = p.id === targetId ? "block" : "none";
  });
}

// iPad & 移动端左右手势滑动手势切页
function initTouchGestures() {
  let startX = 0;
  let startY = 0;

  document.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }
  }, { passive: true });

  document.addEventListener("touchend", (e) => {
    if (e.changedTouches.length === 1) {
      const diffX = e.changedTouches[0].clientX - startX;
      const diffY = e.changedTouches[0].clientY - startY;

      // 水平滑动大于 80px 且垂直偏移较小时触发（防止正常上下滑动滚动被截断）
      if (Math.abs(diffX) > 80 && Math.abs(diffY) < 55) {
        if (diffX < 0) {
          switchTab("tab2");
          showToast("👉 翻至第二页：整理书包口语秀");
        } else {
          switchTab("tab1");
          showToast("👈 翻至第一页：综合闯关");
        }
      }
    }
  }, { passive: true });
}

// 渲染第一页
function renderPage1() {
  // 1. Magic phonics
  const phonicsGrid = document.getElementById("phonicsGrid");
  phonicsGrid.innerHTML = LESSON_DATA.part1.items.map(item => {
    const lettersHtml = item.letter.split("").map(c => 
      c.toLowerCase() === item.highlightLetter ? `<span class="hi-letter">${c}</span>` : c
    ).join("");

    const wordHtml = item.word.split("").map(c => 
      c.toLowerCase() === item.highlightLetter ? `<span class="hi-letter">${c}</span>` : c
    ).join("");

    return `
      <div class="phonics-card" id="${item.id}" onclick="playItemAudio('${item.id}', '${item.letter} ${item.word}', '${item.clip}')">
        <div class="card-img-wrap">
          <img src="${item.img}" alt="${item.word}" class="card-img" loading="lazy">
        </div>
        <div class="phonics-letters">${lettersHtml}</div>
        <div class="phonics-word">${wordHtml}</div>
        <div class="phonics-cn">${item.chinese}</div>
      </div>
    `;
  }).join("");

  // 2. I can read
  const wordsContainer = document.getElementById("wordsContainer");
  wordsContainer.innerHTML = LESSON_DATA.part2.groups.map(group => `
    <div class="word-subgroup">
      <div class="subgroup-title">${group.groupName}</div>
      <div class="words-grid">
        ${group.items.map(w => `
          <div class="word-card" id="${w.id}" onclick="playItemAudio('${w.id}', '${w.word}', '${w.clip}')">
            <div class="word-img-wrap">
              <img src="${w.img}" alt="${w.word}" class="word-img" loading="lazy">
            </div>
            <div class="word-en">${w.word}</div>
            <div class="word-cn">${w.chinese}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");

  // 3. I can say
  const dialogueContainer = document.getElementById("dialogueContainer");
  dialogueContainer.innerHTML = LESSON_DATA.part3.dialogues.map(d => {
    let contentHtml = "";

    if (d.sentences) {
      contentHtml = d.sentences.map(s => `
        <div class="say-speech-bubble" id="${s.id}" onclick="playItemAudio('${s.id}', '${s.text.replace(/'/g, "\\'")}', '${s.clip}')">
          <img src="${s.icon}" class="say-icon" alt="icon">
          <div class="say-content">
            <div class="say-en">${s.text}</div>
            <div class="say-cn">${s.chinese}</div>
          </div>
          <div class="play-speaker-icon">🔊</div>
        </div>
      `).join("");
    } else if (d.options) {
      contentHtml = `
        <div style="font-weight:700; color:#555; margin-bottom:8px;">${d.prompt}</div>
        <div class="chip-grid">
          ${d.options.map(opt => `
            <button class="chip-btn" id="${opt.id}" onclick="playItemAudio('${opt.id}', '${opt.text.replace(/'/g, "\\'")}', '${opt.clip}')">
              ${opt.icon ? `<img src="${opt.icon}" alt="">` : ""}
              <span>${opt.target || opt.num}</span>
              <span style="font-size:0.75rem; color:#888;">🔊</span>
            </button>
          `).join("")}
        </div>
      `;
    } else if (d.rhymes) {
      contentHtml = `
        <div class="rhymes-grid">
          ${d.rhymes.map(r => `
            <div class="rhyme-card" id="${r.id}" onclick="playItemAudio('${r.id}', '${r.text.replace(/'/g, "\\'")}', '${r.clip}')">
              <div class="rhyme-num-badge">${r.num}</div>
              <img src="${r.img}" class="rhyme-thumb" alt="${r.text}">
              <div class="rhyme-info">
                <div class="rhyme-en">${r.text}</div>
                <div class="rhyme-cn">${r.chinese}</div>
                <div class="rhyme-mnemonic">${r.mnemonic}</div>
              </div>
              <div class="play-speaker-icon">🔊</div>
            </div>
          `).join("")}
        </div>
      `;
    }

    return `
      <div class="say-row">
        <div class="say-header">
          <span class="say-num">第 ${d.num} 关</span>
          <span class="say-title">${d.title}</span>
        </div>
        ${contentHtml}
      </div>
    `;
  }).join("");
}

// 渲染第二页
function renderPage2() {
  const p2Presentation = document.getElementById("p2Presentation");
  const p2Data = LESSON_DATA.page2;

  // 整理书包逐句跟读
  p2Presentation.innerHTML = p2Data.presentation.map(line => {
    let text = line.text;
    if (line.template) {
      const name = localStorage.getItem("yakult_student_name") || "Mike";
      const classNum = localStorage.getItem("yakult_student_class") || "1";
      text = line.template.replace("{name}", `<b style="color:#E65100">${name}</b>`).replace("{classNum}", `<b style="color:#E65100">${classNum}</b>`);
    }

    return `
      <div class="say-speech-bubble" id="${line.id}" onclick="playItemAudio('${line.id}', '${line.chinese}', '${line.clip}')">
        <div class="say-icon" style="background:#FFF3E0; display:flex; align-items:center; justify-content:center; font-size:1.4rem;">🎒</div>
        <div class="say-content">
          <div class="say-en">${text}</div>
          <div class="say-cn">${line.chinese}</div>
        </div>
        <div class="play-speaker-icon">🔊</div>
      </div>
    `;
  }).join("");

  // 互动打包小游戏
  const gameItemsRow = document.getElementById("gameItemsRow");
  gameItemsRow.innerHTML = p2Data.interactiveGameItems.map(item => `
    <div class="game-item-card" id="${item.id}" onclick="packItemIntoBag('${item.id}', '${item.speech}')">
      <img src="${item.img}" alt="${item.name}">
      <div class="game-item-name">${item.label}</div>
    </div>
  `).join("");
}

// 打包文具入包互动
function packItemIntoBag(itemId, speech) {
  const el = document.getElementById(itemId);
  if (!el) return;
  
  el.classList.add("packed");
  showToast(`🎒 ${speech}`);
  
  // 查找对应音频或直接播放
  const speechMap = {
    'game_pencil': 'app_assets/speech/p2_line_5.mp3',
    'game_ruler': 'app_assets/speech/p2_line_6_ruler.mp3',
    'game_eraser': 'app_assets/speech/p2_line_6_eraser.mp3',
    'game_book': 'app_assets/speech/p2_line_6_book.mp3',
    'game_pencilcase': 'app_assets/speech/p2_line_6_pencilcase.mp3'
  };

  if (speechMap[itemId]) {
    playItemAudio(itemId, speech, speechMap[itemId]);
  }

  // 检查是否全部打包完成
  const allPacked = Array.from(document.querySelectorAll(".game-item-card")).every(c => c.classList.contains("packed"));
  if (allPacked) {
    setTimeout(() => {
      showToast("🎉 太棒啦！所有文具已全部装好！En, good. I'm done!");
      playItemAudio("p2_7", "En, good. I'm done!", "app_assets/speech/p2_line_7.mp3");
    }, 1500);
  }
}

// 重置打包小游戏
function resetPackingGame() {
  document.querySelectorAll(".game-item-card").forEach(c => c.classList.remove("packed"));
  showToast("文具已倒出，可以重新打包啦！");
}

// 音频播放核心控制
function playItemAudio(id, title, clipSrc) {
  // 停止上一个音频
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // 清理高亮样式
  if (currentPlayingEl) {
    currentPlayingEl.classList.remove("is-playing");
  }

  currentPlayingId = id;
  currentPlayingEl = document.getElementById(id);
  if (currentPlayingEl) {
    currentPlayingEl.classList.add("is-playing");
    if (isContinuousMode) {
      currentPlayingEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  // 更新播放状态条
  updatePlayingState(title, true);

  // 播放新音频
  currentAudio = new Audio(clipSrc);
  currentAudio.playbackRate = playbackSpeed;

  currentAudio.onended = () => {
    if (currentPlayingEl) {
      currentPlayingEl.classList.remove("is-playing");
    }
    updatePlayingState(title, false);

    if (isContinuousMode) {
      playNextContinuous();
    }
  };

  currentAudio.onerror = (e) => {
    console.warn("音频加载失败，回退至主音频片选:", clipSrc, e);
    updatePlayingState(title, false);
    if (isContinuousMode) playNextContinuous();
  };

  currentAudio.play().catch(err => {
    console.log("Audio play prevented:", err);
  });
}

// 连续伴读播放下一个
function playNextContinuous() {
  continuousIndex++;
  if (continuousIndex >= continuousList.length) {
    isContinuousMode = false;
    document.getElementById("continuousBtn").classList.remove("active");
    showToast("🎉 恭喜！本期英语闯关全部朗读完毕！");
    updatePlayingState("全部闯关完毕", false);
    return;
  }

  const next = continuousList[continuousIndex];
  setTimeout(() => {
    if (isContinuousMode) {
      playItemAudio(next.id, next.title, next.clip);
    }
  }, 400);
}

// 播放控制栏交互
function initAudioControls() {
  const mainPlayBtn = document.getElementById("mainPlayBtn");
  const continuousBtn = document.getElementById("continuousBtn");
  const speedBtn = document.getElementById("speedBtn");
  const toggleCnBtn = document.getElementById("toggleCnBtn");

  // 主播放/暂停按钮
  mainPlayBtn.addEventListener("click", () => {
    if (currentAudio && !currentAudio.paused) {
      currentAudio.pause();
      mainPlayBtn.innerHTML = "▶";
      updatePlayingState(document.getElementById("playingTitle").innerText, false);
    } else if (currentAudio && currentAudio.paused) {
      currentAudio.play();
      mainPlayBtn.innerHTML = "⏸";
      updatePlayingState(document.getElementById("playingTitle").innerText, true);
    } else {
      // 默认从第一个开始连续播放
      toggleContinuous();
    }
  });

  // 连续伴读按钮
  continuousBtn.addEventListener("click", toggleContinuous);

  // 语速切换 (0.8x -> 1.0x -> 1.2x)
  speedBtn.addEventListener("click", () => {
    if (playbackSpeed === 1.0) {
      playbackSpeed = 0.8;
      speedBtn.innerText = "0.8x 慢速";
    } else if (playbackSpeed === 0.8) {
      playbackSpeed = 1.2;
      speedBtn.innerText = "1.2x 快速";
    } else {
      playbackSpeed = 1.0;
      speedBtn.innerText = "1.0x 正常";
    }

    if (currentAudio) {
      currentAudio.playbackRate = playbackSpeed;
    }
    showToast(`播放倍速调整为: ${playbackSpeed}x`);
  });

  // 切换中文字幕显隐
  toggleCnBtn.addEventListener("click", () => {
    hideChinese = !hideChinese;
    document.body.classList.toggle("hide-cn", hideChinese);
    toggleCnBtn.classList.toggle("active", hideChinese);
    toggleCnBtn.innerText = hideChinese ? "纯英沉浸" : "中英对照";
    showToast(hideChinese ? "已切换为纯英文模式（考验认读能力）" : "已开启中英对照辅助");
  });
}

// 切换连续伴读
function toggleContinuous() {
  isContinuousMode = !isContinuousMode;
  const continuousBtn = document.getElementById("continuousBtn");
  continuousBtn.classList.toggle("active", isContinuousMode);

  if (isContinuousMode) {
    showToast("▶ 连续伴读模式已开启，将自动从头读到尾");
    continuousIndex = -1;
    playNextContinuous();
  } else {
    showToast("⏸ 已暂停连续伴读");
    if (currentAudio) currentAudio.pause();
    if (currentPlayingEl) currentPlayingEl.classList.remove("is-playing");
    updatePlayingState("已暂停", false);
  }
}

// 更新播放状态条
function updatePlayingState(title, isPlaying) {
  const pulse = document.getElementById("playPulse");
  const titleEl = document.getElementById("playingTitle");
  const mainBtn = document.getElementById("mainPlayBtn");

  titleEl.innerText = title || "点选任意卡片听老师发音";
  pulse.classList.toggle("active", isPlaying);
  mainBtn.innerHTML = isPlaying ? "⏸" : "▶";
}

// 自我评价点亮养乐多瓶
function rateYakult(criteriaIndex, starIndex) {
  const row = document.getElementById(`evalRow${criteriaIndex}`);
  const buttons = row.querySelectorAll(".yakult-star-btn");
  buttons.forEach((btn, idx) => {
    btn.classList.toggle("active", idx <= starIndex);
  });
  showToast(`⭐ 感谢自我评价！获得 ${starIndex + 1} 瓶能量养乐多！`);
}

// 学生姓名/班级本地保存
function updateStudentProfile() {
  const nameInput = document.getElementById("studentNameInput");
  const classInput = document.getElementById("studentClassInput");

  if (nameInput && classInput) {
    localStorage.setItem("yakult_student_name", nameInput.value || "Mike");
    localStorage.setItem("yakult_student_class", classInput.value || "1");
    renderPage2();
  }
}

function loadSavedProfile() {
  const savedName = localStorage.getItem("yakult_student_name") || "Mike";
  const savedClass = localStorage.getItem("yakult_student_class") || "1";

  const nameInput = document.getElementById("studentNameInput");
  const classInput = document.getElementById("studentClassInput");
  if (nameInput) nameInput.value = savedName;
  if (classInput) classInput.value = savedClass;
}

// 轻提示 Toast
function showToast(msg) {
  let toast = document.getElementById("toastMsg");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastMsg";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }
  toast.innerText = msg;
  toast.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}
