package com.example.demo.service;

import com.example.demo.dto.PostRequest;
import com.example.demo.dto.PostResponse;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class PostService {
    private final List<PostResponse> posts = Collections.synchronizedList(new ArrayList<>());

    public void createPost(PostRequest request, String authHeader) {
        PostResponse post = PostResponse.builder()
                .title(request.getTitle())
                .body(request.getBody())
                .PinggyAuthHeader(authHeader)
                .build();
        posts.add(post);
    }

    public List<PostResponse> getAllPosts() {
        return new ArrayList<>(posts);
    }
}