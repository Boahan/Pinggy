"use client";

import { useState } from "react";
import { PostForm } from "@/components/post-form";
import { PostList } from "@/components/post-list";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { BookOpenText } from "lucide-react";

export default function Home() {
  const [refreshList, setRefreshList] = useState(false);

  const handlePostSuccess = () => {
    setRefreshList(prev => !prev);
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <BookOpenText className="h-8 w-8 mr-2 text-primary" />
          <h1 className="text-3xl font-bold text-primary">Blog Posts</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-card rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">Create New Post</h2>
              <PostForm onPostSuccess={handlePostSuccess} />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-card rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>
              <ScrollArea className="h-[600px] pr-4">
                <PostList refreshTrigger={refreshList} />
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}