"use client"

import type React from "react"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { formatDistanceToNow } from "date-fns"

interface Comment {
  id: number
  author: string
  authorInitials: string
  avatar?: string
  content: string
  date: Date
}

interface CommentSectionProps {
  postId: number
  initialComments?: Comment[]
}

export function CommentSection({ postId, initialComments = [] }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [newComment, setNewComment] = useState("")
  const [authorName, setAuthorName] = useState("")

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()

    if (!newComment.trim() || !authorName.trim()) return

    const comment: Comment = {
      id: Date.now(),
      author: authorName,
      authorInitials: authorName
        .split(" ")
        .map((name) => name[0])
        .join("")
        .toUpperCase(),
      content: newComment,
      date: new Date(),
    }

    setComments([...comments, comment])
    setNewComment("")
  }

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Comments ({comments.length})</h3>

      {/* Comment form */}
      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmitComment} className="space-y-4">
            <div>
              <label htmlFor="author" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                id="author"
                className="w-full px-3 py-2 border rounded-md border-input bg-background"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="comment" className="block text-sm font-medium mb-1">
                Comment
              </label>
              <Textarea
                id="comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your thoughts..."
                className="resize-none min-h-[100px]"
                required
              />
            </div>
            <Button type="submit">Post Comment</Button>
          </form>
        </CardContent>
      </Card>

      {/* Comments list */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">Be the first to comment on this post!</p>
        ) : (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Avatar>
                    {comment.avatar && <AvatarImage src={comment.avatar} alt={comment.author} />}
                    <AvatarFallback>{comment.authorInitials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold">{comment.author}</h4>
                      <span className="text-xs text-muted-foreground">
                        {formatDistanceToNow(comment.date, { addSuffix: true })}
                      </span>
                    </div>
                    <p className="mt-1 text-muted-foreground">{comment.content}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}

