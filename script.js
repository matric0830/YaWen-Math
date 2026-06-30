const CATEGORIES = [
  { id: "junior", title: "國中基礎建立", kicker: "銜接課程" },
  { id: "book1", title: "高中數學第一冊", kicker: "高一數學" },
  { id: "book2", title: "高中數學第二冊", kicker: "高一數學" },
  { id: "book3", title: "高中數學第三冊", kicker: "高二數學" },
  { id: "book4", title: "高中數學第四冊", kicker: "高二數學" },
  { id: "book5", title: "高中數學第五冊", kicker: "高三數學" },
  { id: "book6", title: "高中數學第六冊", kicker: "高三數學" },
  { id: "review", title: "學測複習", kicker: "總複習" },
  { id: "games", title: "互動小遊戲", kicker: "遊戲化練習" },
  { id: "teacher", title: "教師專區", kicker: "管理工具" }
];

function topic(number, title, options = {}) {
  return {
    id: `topic-${number}`,
    number: `主題${number}`,
    title,
    tags: options.tags || ["教材建置中"],
    href: options.href || "",
    status: options.status || "building"
  };
}

const CHAPTERS = {
  book1: [
    { title: "第一章 數與式", lessons: [
      topic("001", "數系", { href: "lessons/book1/real-number-system/index.html", status: "practice", tags: ["基礎練習", "互動題", "數系分類"] }),
      topic("002", "乘法公式", { href: "lessons/book1/multiplication-formula/index.html", status: "practice", tags: ["基礎練習", "互動題", "公式拼圖"] }),
      topic("003", "雙重根號", { href: "lessons/book1/double-radical/index.html", status: "practice", tags: ["練習題", "根號化簡", "根號估算"] }),
      topic("004", "算幾不等式", { href: "lessons/book1/am-gm/index.html", status: "ready", tags: ["互動題", "代數證明", "幾何證明"] }),
      topic("005", "分點公式"), topic("006", "絕對值方程式與不等式"), topic("007", "指數"), topic("008", "常用對數")
    ]},
    { title: "第二章 直線與圓", lessons: [
      topic("009", "斜率"), topic("010", "直線方程式"), topic("011", "兩線平行與垂直"), topic("012", "點與線的關係"),
      topic("013", "線與線的關係"), topic("014", "圓方程式"), topic("015", "點與圓的關係"), topic("016", "線與圓的關係"), topic("017", "圓的切線")
    ]},
    { title: "第三章 多項式", lessons: [
      topic("018", "多項式的基本概念"), topic("019", "除法原理"), topic("020", "餘式定理與因式定理"),
      topic("021", "一次函數"), topic("022", "二次函數"), topic("023", "三次函數"), topic("024", "二次不等式"), topic("025", "高次不等式")
    ]}
  ],
  book2: [
    { title: "第一章 數列與級數", lessons: [
      topic("026", "等差與等比數列"), topic("027", "等差與等比級數"), topic("028", "常見求和公式"),
      topic("029", "遞迴關係式"), topic("030", "數學歸納法"), topic("031", "單利與複利")
    ]},
    { title: "第二章 排列組合與古典機率", lessons: [
      topic("032", "集合的概念"), topic("033", "加法原理與乘法原理"), topic("034", "直線排列與同物排列"),
      topic("035", "重複排列"), topic("036", "組合"), topic("037", "分組分堆"), topic("038", "二項式定理"), topic("039", "古典機率"), topic("040", "期望值")
    ]},
    { title: "第三章 數據分析", lessons: [
      topic("041", "一維數據分析"), topic("042", "一維數據的伸縮平移"), topic("043", "一維數據標準化"),
      topic("044", "散佈圖與相關係數"), topic("045", "相關係數"), topic("046", "相關係數的伸縮平移"), topic("047", "迴歸直線")
    ]},
    { title: "第四章 三角比的性質與應用", lessons: [
      topic("048", "銳角三角比的定義"), topic("049", "廣義角三角比的定義"), topic("050", "三角函數與單位圓"),
      topic("051", "特別角的三角比"), topic("052", "三角比角度變換公式"), topic("053", "極座標與直角坐標"),
      topic("054", "三角形面積公式"), topic("055", "正弦定理"), topic("056", "餘弦定理"), topic("057", "三角形中分線")
    ]}
  ],
  book3: [
    { title: "第一章 三角函數", lessons: [
      topic("058", "弧度量"), topic("059", "扇形的周長與面積"), topic("060", "三角函數的圖形"),
      topic("061", "三角函數的週期與伸縮平移"), topic("062", "和差角公式"), topic("063", "二倍角公式"), topic("064", "半角公式"), topic("065", "正餘弦疊合")
    ]},
    { title: "第二章 指數與對數函數", lessons: [
      topic("066", "指數律"), topic("067", "對數定義"), topic("068", "對數律"), topic("069", "指數函數的圖形"),
      topic("070", "對數函數的圖形"), topic("071", "指數對數函數的應用")
    ]},
    { title: "第三章 平面向量", lessons: [
      topic("072", "向量的加減運算"), topic("073", "向量的線性組合"), topic("074", "共線理論"),
      topic("075", "向量的內積"), topic("076", "正射影"), topic("077", "科西不等式"), topic("078", "直線參數式"),
      topic("079", "二階行列式與面積"), topic("080", "二階行列式性質"), topic("081", "克拉馬公式")
    ]}
  ],
  book4: [
    { title: "第一章 空間向量", lessons: [
      topic("082", "空間概念"), topic("083", "空間坐標系"), topic("084", "數B - 球面與經緯度"),
      topic("085", "數B - 平面截痕"), topic("086", "空間向量的概念與應用"), topic("087", "空間向量的內積與應用"),
      topic("088", "數A - 空間向量的外積與應用"), topic("089", "數A - 三階行列式的概念與性質")
    ]},
    { title: "第二章 空間中的平面與直線", lessons: [
      topic("090", "數A - 平面方程式"), topic("091", "數A - 空間中，點與平面的關係"),
      topic("092", "數A - 空間中，平面與平面的關係"), topic("093", "數A - 空間中，直線方程式"),
      topic("094", "數A - 空間中，平面與直線的關係"), topic("095", "數A - 空間中，點與直線的關係"),
      topic("096", "數A - 空間中，直線與直線的關係"), topic("097", "數A - 平面與空間的比較")
    ]},
    { title: "第三章 條件機率與獨立事件", lessons: [
      topic("098", "條件機率"), topic("099", "貝式定理"), topic("100", "獨立事件")
    ]},
    { title: "第四章 矩陣", lessons: [
      topic("101", "高斯消去法"), topic("102", "矩陣運算"), topic("103", "矩陣運算與性質"),
      topic("104", "乘法反矩陣"), topic("105", "轉移矩陣"), topic("106", "數A - 平面上的線性變換"),
      topic("107", "數A - 推移矩陣"), topic("108", "數A - 旋轉矩陣"), topic("109", "數A - 鏡射矩陣")
    ]}
  ]
};

let currentCategory = "book1";
let currentChapterIndex = 0;
let loggedIn = false;
const settingsKey = "yawenLessonSettings";
const customKey = "yawenLessons";

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function statusText(status) {
  if (status === "practice") return "開始練習";
  if (status === "ready") return "進入教材";
  return "教材建置中";
}

function getCategory(id) {
  return CATEGORIES.find(category => category.id === id) || CATEGORIES[1];
}

function getCustomLessons() {
  return readJson(customKey, []);
}

function getSettings() {
  return readJson(settingsKey, {});
}

function saveSettings(settings) {
  writeJson(settingsKey, settings);
}

function customLessonsFor(categoryId) {
  const groups = {};
  getCustomLessons()
    .filter(lesson => lesson.category === categoryId)
    .forEach(lesson => {
      groups[lesson.chapter] ||= [];
      groups[lesson.chapter].push(lesson);
    });

  return Object.entries(groups).map(([title, lessons]) => ({ title, lessons }));
}

function chaptersFor(categoryId) {
  return [...(CHAPTERS[categoryId] || []), ...customLessonsFor(categoryId)];
}

function renderCategory(categoryId) {
  currentCategory = categoryId;
  currentChapterIndex = 0;
  const category = getCategory(categoryId);
  document.getElementById("categoryKicker").textContent = category.kicker;
  document.getElementById("categoryTitle").textContent = category.title;

  document.querySelectorAll(".menu-button").forEach(button => {
    button.classList.toggle("is-active", button.dataset.category === categoryId);
  });

  const teacherPanel = document.getElementById("teacherPanel");
  const chapterTabs = document.getElementById("chapterTabs");
  const chapterContent = document.getElementById("chapterContent");
  teacherPanel.hidden = categoryId !== "teacher";
  chapterTabs.hidden = categoryId === "teacher";
  chapterContent.hidden = categoryId === "teacher";

  if (categoryId === "teacher") return;
  renderChapterTabs();
  renderChapterContent(0);
}

function renderChapterTabs() {
  const tabs = document.getElementById("chapterTabs");
  const chapters = chaptersFor(currentCategory);
  tabs.innerHTML = "";

  if (!chapters.length) return;

  chapters.forEach((chapter, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chapter-tab";
    button.classList.toggle("is-active", index === currentChapterIndex);
    button.textContent = chapter.title;
    button.addEventListener("click", () => renderChapterContent(index));
    tabs.appendChild(button);
  });
}

function renderChapterContent(index) {
  currentChapterIndex = index;
  const category = getCategory(currentCategory);
  const chapters = chaptersFor(currentCategory);
  const content = document.getElementById("chapterContent");

  renderChapterTabs();
  content.innerHTML = "";

  if (!chapters.length) {
    content.innerHTML = `<div class="empty-state">${category.title} 的教材建置中</div>`;
    return;
  }

  const chapter = chapters[index] || chapters[0];
  const title = document.createElement("h3");
  title.textContent = chapter.title;
  const grid = document.createElement("div");
  grid.className = "lesson-grid";
  chapter.lessons.forEach(lesson => grid.appendChild(createLessonCard(lesson)));
  content.append(title, grid);
}

function createLessonCard(lesson) {
  const settings = getSettings();
  const lessonSetting = settings[lesson.id] || {};
  const status = lessonSetting.status || lesson.status || "building";
  const hidden = lessonSetting.hidden === true;
  const canOpen = lesson.href && status !== "building";
  const card = document.createElement("article");
  card.className = "lesson-card";
  card.dataset.lessonId = lesson.id;
  card.classList.toggle("is-hidden-by-teacher", hidden);
  if (hidden && !loggedIn) card.hidden = true;

  card.innerHTML = `
    <div class="lesson-number">${lesson.number || "新增教材"}</div>
    <h4>${lesson.title}</h4>
    <div class="tag-row">${(lesson.tags || []).map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
    <div class="card-actions">
      ${canOpen ? `<a class="lesson-link status-${status}" href="${lesson.href}" target="_blank" rel="noopener">${statusText(status)}</a>` : `<span class="status-pill status-${status}">${statusText(status)}</span>`}
    </div>
  `;

  if (loggedIn) card.appendChild(createManageControls(lesson, status, hidden));
  return card;
}

function createManageControls(lesson, status, hidden) {
  const controls = document.createElement("div");
  controls.className = "manage-controls";
  controls.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();
  });

  const select = document.createElement("select");
  [["practice", "開始練習"], ["ready", "進入教材"], ["building", "教材建置中"]].forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    select.appendChild(option);
  });
  select.value = status;
  select.addEventListener("change", () => updateLessonSetting(lesson.id, { status: select.value }));

  const hideButton = document.createElement("button");
  hideButton.type = "button";
  hideButton.textContent = hidden ? "取消隱藏" : "隱藏";
  hideButton.addEventListener("click", () => updateLessonSetting(lesson.id, { hidden: !hidden }));

  controls.append(select, hideButton);

  if (lesson.custom) {
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "刪除";
    deleteButton.addEventListener("click", () => deleteCustomLesson(lesson.id));
    controls.appendChild(deleteButton);
  }

  return controls;
}

function updateLessonSetting(lessonId, changes) {
  const settings = getSettings();
  settings[lessonId] = { ...(settings[lessonId] || {}), ...changes };
  saveSettings(settings);
  renderChapterContent(currentChapterIndex);
}

function deleteCustomLesson(lessonId) {
  if (!confirm("確定要刪除這個新增教材嗎？")) return;
  writeJson(customKey, getCustomLessons().filter(lesson => lesson.id !== lessonId));
  const settings = getSettings();
  delete settings[lessonId];
  saveSettings(settings);
  renderCategory(currentCategory);
}

function setLoggedIn(value) {
  loggedIn = value;
  document.body.classList.toggle("teacher-logged-in", value);
  document.getElementById("teacherLoginBox").hidden = value;
  document.getElementById("teacherTools").hidden = !value;
  renderCategory(currentCategory);
}

document.querySelectorAll("[data-category]").forEach(button => {
  button.addEventListener("click", () => renderCategory(button.dataset.category));
});

document.getElementById("loginForm").addEventListener("submit", event => {
  event.preventDefault();
  const account = document.getElementById("teacherAccount").value.trim();
  const password = document.getElementById("teacherPassword").value.trim();
  const message = document.getElementById("loginMessage");
  if (account === "teacher" && password === "1234") {
    message.textContent = "";
    setLoggedIn(true);
    event.target.reset();
  } else {
    message.textContent = "帳號或密碼錯誤";
  }
});

document.getElementById("logoutButton").addEventListener("click", () => setLoggedIn(false));

document.getElementById("lessonForm").addEventListener("submit", event => {
  event.preventDefault();
  const category = document.getElementById("lessonCategory").value;
  const lesson = {
    id: `custom-${Date.now()}`,
    custom: true,
    category,
    chapter: document.getElementById("lessonChapter").value.trim(),
    title: document.getElementById("lessonTitle").value.trim(),
    href: document.getElementById("lessonUrl").value.trim(),
    status: document.getElementById("lessonStatus").value,
    tags: document.getElementById("lessonTags").value.split(",").map(tag => tag.trim()).filter(Boolean)
  };

  writeJson(customKey, [...getCustomLessons(), lesson]);
  event.target.reset();
  renderCategory(category);
});

setLoggedIn(false);
renderCategory("book1");
