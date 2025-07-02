
const resultDiv = document.getElementById("result");
const generateBtn = document.getElementById("generateBtn");
const speakBtn = document.getElementById("speakBtn");

let latestPrayer = "";

generateBtn.addEventListener("click", async () => {
  resultDiv.textContent = "正在產生禱告文中...";

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
        { role: "user", content: "請用繁體中文寫一段 100 字以內的感恩禱告。" }
      ],
      temperature: 0.7,
      max_tokens: 150
    })
  });

  const data = await response.json();
  latestPrayer = data.choices[0].message.content;
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

const resultDiv = document.getElementById("result");
const generateBtn = document.getElementById("generateBtn");
const speakBtn = document.getElementById("speakBtn");

let latestPrayer = "";

generateBtn.addEventListener("click", async () => {
  resultDiv.textContent = "正在產生禱告文中...";

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
        { role: "user", content: "請用繁體中文寫一段 100 字以內的感恩禱告。" }
      ],
      temperature: 0.7,
      max_tokens: 150
    })
  });

  const data = await response.json();
  latestPrayer = data.choices[0].message.content;
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