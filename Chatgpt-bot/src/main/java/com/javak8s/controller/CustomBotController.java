package com.javak8s.controller;

import com.javak8s.dto.ChatGPTRequest;
import com.javak8s.dto.ChatGPTResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/bot")
public class CustomBotController {

    @Value("${openai.model}")
    private String model;

    @Value("${openai.api.url}")
    private String apiURL;

    @Autowired
    private RestTemplate template;

    @GetMapping("/chat")
    public ChatGPTResponse chat(@RequestParam("prompt") String prompt){
        ChatGPTRequest request = new ChatGPTRequest(model,prompt);
        ChatGPTResponse chatCptResponse = template.postForObject(apiURL, request, ChatGPTResponse.class);
        return chatCptResponse;
    }
}
