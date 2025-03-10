addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    if (request.method !== "POST") return new Response("Only POST requests allowed", { status: 405 });

    const { message } = await request.json();

    const telegramBotToken = "YOUR_TELEGRAM_BOT_TOKEN";
    const chatId = "YOUR_TELEGRAM_CHAT_ID";  // Replace with your Telegram ID

    const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: `🔒 New Anonymous Message: ${atob(message)}` })
    });

    return new Response("Message Sent!", { status: 200 });
}
