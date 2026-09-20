const bible = {

  Psalms: {
    23: [
      "The LORD is my shepherd; I shall not want.",
      "He maketh me to lie down in green pastures: he leadeth me beside the still waters.",
      "He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.",
      "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me.",
      "Thou preparest a table before me in the presence of mine enemies.",
      "Surely goodness and mercy shall follow me all the days of my life."
    ],

    46: [
      "God is our refuge and strength, a very present help in trouble.",
      "Therefore will not we fear, though the earth be removed.",
      "There is a river, the streams whereof shall make glad the city of God.",
      "The LORD of hosts is with us; the God of Jacob is our refuge.",
      "Be still, and know that I am God."
    ]
  },

  Proverbs: {
    3: [
      "My son, forget not my law; but let thine heart keep my commandments.",
      "For length of days, and long life, and peace, shall they add to thee.",
      "Let not mercy and truth forsake thee.",
      "So shalt thou find favour and good understanding in the sight of God and man.",
      "Trust in the LORD with all thine heart; and lean not unto thine own understanding.",
      "In all thy ways acknowledge him, and he shall direct thy paths."
    ],

    31: [
      "Who can find a virtuous woman? for her price is far above rubies.",
      "The heart of her husband doth safely trust in her.",
      "She will do him good and not evil all the days of her life.",
      "Strength and honour are her clothing; and she shall rejoice in time to come."
    ]
  },

  Isaiah: {
    41: [
      "Keep silence before me, O islands; and let the people renew their strength.",
      "Who raised up the righteous man from the east?",
      "The isles saw it, and feared.",
      "They helped every one his neighbour.",
      "Fear thou not; for I am with thee: be not dismayed; for I am thy God."
    ]
  },

  Philippians: {
    4: [
      "Therefore, my brethren dearly beloved and longed for, my joy and crown, so stand fast in the Lord.",
      "Rejoice in the Lord alway: and again I say, Rejoice.",
      "Let your moderation be known unto all men. The Lord is at hand.",
      "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.",
      "And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.",
      "Finally, brethren, whatsoever things are true, whatsoever things are honest, think on these things."
    ]
  },

  Romans: {
    8: [
      "There is therefore now no condemnation to them which are in Christ Jesus.",
      "For the law of the Spirit of life in Christ Jesus hath made me free.",
      "For what the law could not do, in that it was weak through the flesh, God sending his own Son accomplished.",
      "That the righteousness of the law might be fulfilled in us.",
      "For they that are after the flesh do mind the things of the flesh.",
      "For to be carnally minded is death; but to be spiritually minded is life and peace."
    ]
  }
};


const encouragements = {

  peace: {
    title: "God Is Your Peace",
    verse:
      "Be still, and know that I am God.",
    reference: "Psalm 46:10",
    message:
      "Xyhime, you don't have to solve everything tonight. Give God what you cannot control and allow your heart to rest."
  },

  strength: {
    title: "You Are Not Walking Alone",
    verse:
      "Fear thou not; for I am with thee: be not dismayed; for I am thy God.",
    reference: "Isaiah 41:10",
    message:
      "Your strength does not have to come only from you. God can carry what feels too heavy."
  },

  anxiety: {
    title: "Give God Your Worries",
    verse:
      "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.",
    reference: "Philippians 4:6",
    message:
      "Take each worry one at a time and place it before God. You do not have to carry tomorrow today."
  },

  faith: {
    title: "Trust Even When You Cannot See",
    verse:
      "Trust in the LORD with all thine heart; and lean not unto thine own understanding.",
    reference: "Proverbs 3:5",
    message:
      "Not knowing what comes next does not mean God has stopped working."
  },

  love: {
    title: "You Are Deeply Loved",
    verse:
      "We love him, because he first loved us.",
    reference: "1 John 4:19",
    message:
      "Before accomplishments, expectations or mistakes, you are someone God loves."
  },

  gratitude: {
    title: "A Grateful Heart",
    verse:
      "O give thanks unto the LORD; for he is good: for his mercy endureth for ever.",
    reference: "Psalm 136:1",
    message:
      "Take a moment to notice the blessings that quietly surround you today."
  }

};


const dailyVerses = [

  {
    verse:
      "Trust in the LORD with all thine heart; and lean not unto thine own understanding.",
    reference:"Proverbs 3:5"
  },

  {
    verse:
      "God is our refuge and strength, a very present help in trouble.",
    reference:"Psalm 46:1"
  },

  {
    verse:
      "The LORD is my shepherd; I shall not want.",
    reference:"Psalm 23:1"
  },

  {
    verse:
      "Be still, and know that I am God.",
    reference:"Psalm 46:10"
  },

  {
    verse:
      "Rejoice in the Lord alway: and again I say, Rejoice.",
    reference:"Philippians 4:4"
  }

];


let currentDailyVerse;


/* NAVIGATION */

document.querySelectorAll(".nav-item").forEach(button => {

  button.addEventListener("click", () => {

    document
      .querySelectorAll(".nav-item")
      .forEach(b => b.classList.remove("active"));

    button.classList.add("active");

    showPage(button.dataset.page);

  });

});


function showPage(id){

  document
    .querySelectorAll(".page")
    .forEach(page => page.classList.remove("active"));

  document
    .getElementById(id)
    .classList.add("active");

  document
    .getElementById("sidebar")
    .classList.remove("open");

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}


/* MOBILE MENU */

document
  .getElementById("menuButton")
  .addEventListener("click", () => {

    document
      .getElementById("sidebar")
      .classList.toggle("open");

  });


/* DARK MODE */

document
  .getElementById("themeButton")
  .addEventListener("click", () => {

    document.body.classList.toggle("dark");

    localStorage.setItem(
      "xyhimeTheme",
      document.body.classList.contains("dark")
        ? "dark"
        : "light"
    );

  });


if(localStorage.getItem("xyhimeTheme") === "dark"){
  document.body.classList.add("dark");
}


/* DAILY VERSE */

function loadDailyVerse(){

  const day =
    Math.floor(Date.now() / 86400000);

  currentDailyVerse =
    dailyVerses[day % dailyVerses.length];

  document.getElementById("dailyVerse").textContent =
    `“${currentDailyVerse.verse}”`;

  document.getElementById("dailyReference").textContent =
    currentDailyVerse.reference;

}


function favoriteDailyVerse(){

  addFavorite(
    currentDailyVerse.verse,
    currentDailyVerse.reference
  );

}


function copyDailyVerse(){

  navigator.clipboard.writeText(
    `${currentDailyVerse.verse} — ${currentDailyVerse.reference}`
  );

  alert("Verse copied 💜");

}


/* BIBLE READER */

const bookSelect =
  document.getElementById("bookSelect");

const chapterSelect =
  document.getElementById("chapterSelect");


Object.keys(bible).forEach(book => {

  const option =
    document.createElement("option");

  option.value = book;
  option.textContent = book;

  bookSelect.appendChild(option);

});


function updateChapters(){

  chapterSelect.innerHTML = "";

  const book =
    bookSelect.value;

  Object.keys(bible[book]).forEach(chapter => {

    const option =
      document.createElement("option");

    option.value = chapter;
    option.textContent = `Chapter ${chapter}`;

    chapterSelect.appendChild(option);

  });

}


bookSelect.addEventListener(
  "change",
  updateChapters
);


function loadChapter(){

  const book =
    bookSelect.value;

  const chapter =
    chapterSelect.value;

  document.getElementById("chapterTitle").textContent =
    `${book} ${chapter}`;

  const container =
    document.getElementById("verses");

  container.innerHTML = "";

  bible[book][chapter].forEach(
    (verse,index) => {

      const p =
        document.createElement("p");

      p.className = "verse";

      p.innerHTML =
        `<span class="verse-number">${index + 1}</span>${verse}`;

      container.appendChild(p);

    }
  );

}


/* ENCOURAGEMENT */

function openEmotion(type){

  showPage("encouragement");

  showEncouragement(type);

}


function showEncouragement(type){

  const data =
    encouragements[type];

  document.getElementById(
    "encouragementResult"
  ).innerHTML = `

    <div class="daily-card">

      <div class="card-label">
        A WORD FOR XYHIME
      </div>

      <h2>${data.title}</h2>

      <blockquote>
        “${data.verse}”
      </blockquote>

      <strong>
        ${data.reference}
      </strong>

      <p>
        ${data.message}
      </p>

      <button
        onclick="addFavorite(
          '${escapeQuote(data.verse)}',
          '${data.reference}'
        )"
      >
        ♡ Save This Verse
      </button>

    </div>

  `;

}


function escapeQuote(text){
  return text.replace(/'/g,"\\'");
}


/* FAVORITES */

function addFavorite(verse,reference){

  let favorites =
    JSON.parse(
      localStorage.getItem("xyhimeFavorites")
      || "[]"
    );

  const exists =
    favorites.some(
      item =>
        item.verse === verse &&
        item.reference === reference
    );

  if(!exists){

    favorites.push({
      verse,
      reference
    });

    localStorage.setItem(
      "xyhimeFavorites",
      JSON.stringify(favorites)
    );

  }

  renderFavorites();

  alert("Saved to Xyhime's favorites 💜");

}


function renderFavorites(){

  const container =
    document.getElementById("favoriteList");

  const favorites =
    JSON.parse(
      localStorage.getItem("xyhimeFavorites")
      || "[]"
    );

  if(!favorites.length){

    container.innerHTML =
      `<div class="saved-card">
        No favorite verses yet.
      </div>`;

    return;

  }

  container.innerHTML =
    favorites.map((item,index) => `

      <div class="saved-card">

        <p>
          “${item.verse}”
        </p>

        <strong>
          ${item.reference}
        </strong>

        <br><br>

        <button
          onclick="removeFavorite(${index})"
        >
          Remove
        </button>

      </div>

    `).join("");

}


function removeFavorite(index){

  let favorites =
    JSON.parse(
      localStorage.getItem("xyhimeFavorites")
      || "[]"
    );

  favorites.splice(index,1);

  localStorage.setItem(
    "xyhimeFavorites",
    JSON.stringify(favorites)
  );

  renderFavorites();

}


/* NOTES */

function saveNote(){

  saveJournalItem(
    "xyhimeNotes",
    "noteTitle",
    "noteText"
  );

  renderJournal(
    "xyhimeNotes",
    "notesList"
  );

}


function savePrayer(){

  saveJournalItem(
    "xyhimePrayers",
    "prayerTitle",
    "prayerText"
  );

  renderJournal(
    "xyhimePrayers",
    "prayerList"
  );

}


function saveJournalItem(
  storageKey,
  titleId,
  textId
){

  const title =
    document.getElementById(titleId);

  const text =
    document.getElementById(textId);

  if(!text.value.trim())
    return;

  const items =
    JSON.parse(
      localStorage.getItem(storageKey)
      || "[]"
    );

  items.unshift({

    title:
      title.value || "Untitled",

    text:
      text.value,

    date:
      new Date().toLocaleDateString()

  });

  localStorage.setItem(
    storageKey,
    JSON.stringify(items)
  );

  title.value = "";
  text.value = "";

}


function renderJournal(
  storageKey,
  containerId
){

  const items =
    JSON.parse(
      localStorage.getItem(storageKey)
      || "[]"
    );

  document.getElementById(
    containerId
  ).innerHTML =
    items.map(item => `

      <div class="saved-card">

        <small>
          ${item.date}
        </small>

        <h3>
          ${item.title}
        </h3>

        <p>
          ${item.text}
        </p>

      </div>

    `).join("");

}


/* INITIALIZE */

loadDailyVerse();

updateChapters();

loadChapter();

renderFavorites();

renderJournal(
  "xyhimeNotes",
  "notesList"
);

renderJournal(
  "xyhimePrayers",
  "prayerList"
);
