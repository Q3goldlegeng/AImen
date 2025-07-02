const topicSelect = document.getElementById("topicSelect");
const topicInput = document.getElementById("topicInput");
const customTopicContainer = document.getElementById("customTopicContainer");
const resultDiv = document.getElementById("result");
const generateBtn = document.getElementById("generateBtn");
const speakBtn = document.getElementById("speakBtn");
const loading = document.getElementById("loading");

let latestPrayer = "";

// 控制「自訂主題輸入欄」顯示
topicSelect.addEventListener("change", () => {
  if (topicSelect.value === "自由輸入") {
    customTopicContainer.style.display = "block";
  } else {
    customTopicContainer.style.display = "none";
  }
});

generateBtn.addEventListener("click", async () => {
  resultDiv.textContent = "";
  loading.style.display = "block";

  // 決定主題
  let topic = "";
  if (topicSelect.value === "自由輸入") {
    topic = topicInput.value.trim() || "感恩";
  } else {
    topic = topicSelect.value;
  }

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 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",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "llama3-70b-8192",
      messages: [
        { role: "system", content: "你是一位溫柔誠懇的基督徒禱告助手。" },
        { role: "user", content: `請用繁體中文寫一段 100 字內的禱告文，主題是：「${topic}」。最後請加上一句對應的聖經經文出處（例如：詩篇 23:1）。` }
      ],
      temperature: 0.7,
      max_tokens: 150
    })
  });

  const data = await response.json();
  latestPrayer = data.choices[0].message.content;
  loading.style.display = "none";
  resultDiv.textContent = latestPrayer;
});

speakBtn.addEventListener("click", () => {
  if (latestPrayer) {
    const utterance = new SpeechSynthesisUtterance(latestPrayer);
    utterance.lang = "zh-TW";
    speechSynthesis.speak(utterance);
  } else {
    alert("請先產生禱告文再播放語音！");
  }
});


