package com.example.SpringAIWithOllama.Controller;

import java.util.Collections;
import java.util.stream.Collectors;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import reactor.core.publisher.Flux;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AIController {
    
    private final ChatModel chatModel; // ✅ Correct field type

    public AIController(ChatModel chatModel) {
        this.chatModel = chatModel;     // ✅ Initialize correctly
    }

    @GetMapping("/prompt")
    public String prompt(@RequestParam String message){
        return chatModel.call(message);    
    }
    
}