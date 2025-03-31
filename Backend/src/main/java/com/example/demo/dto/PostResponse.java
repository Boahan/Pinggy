package com.example.demo.dto;

import lombok.Data;
import lombok.Builder;

@Data
@Builder
public class PostResponse {
    private String title;
    private String body;
    private String PinggyAuthHeader;
}