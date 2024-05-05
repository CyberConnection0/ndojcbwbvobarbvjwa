function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  var chatBox = document.getElementById("chat-box");

  // Append user's message to the chat box
  chatBox.innerHTML += "<p><strong>Você:</strong> " + userInput + "</p>";

  // Clear the input field
  document.getElementById("user-input").value = "";

  // Respond to user's message
  respondToMessage(userInput);
}

function respondToMessage(message) {
  var chatBox = document.getElementById("chat-box");

  // Example responses
  var responses = {
      "quem e seu copiloto?": "miguem els (copiloto)",
      "quem criou voce?": "Sagaz_felipe (Programador)",
      "quem criou voce ?": "Sagaz_felipe (Programador)",
      "quem criou você?": "Sagaz_felipe (Programador)",
      "quem criou você ?": "Sagaz_felipe (Programador)",
      "Quem criou você?": "Sagaz_felipe (Programador)",
      "olá": "Olá! Como posso ajudar?",
      "ola": "Olá! Como posso ajudar?",
      "oi": "Olá! Como posso ajudar?",
      "Oi": "Olá! Como posso ajudar?",
      "como voce esta?": "Estou bem, obrigado por perguntar!",
      "qual é o seu nome?": "Meu nome é ChatBot. Como posso ajudá-lo?",
      // Add more responses as needed
  };

  // Check if the message has a predefined response
  var response = responses[message.toLowerCase()];

  // If there's a predefined response, append it to the chat box
  if (response) {
      chatBox.innerHTML += "<p><strong>ChatBot:</strong> " + response + "</p>";
  } else {
      // If no predefined response, provide a default response
      chatBox.innerHTML += "<p><strong>ChatBot:</strong> Desculpe, não entendi. Posso ajudar com mais alguma coisa?</p>";
  }

  // Scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;
}


