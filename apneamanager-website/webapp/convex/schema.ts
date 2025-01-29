import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  users: defineTable({
    userId: v.string(),
    email: v.string(),
    username: v.string(),
    stripeId: v.optional(v.string()),
    role: v.optional(v.string()),
  })
  .index("by_userId", ["userId"])
  .index("by_stripeId", ["stripeId"])
  .index("by_username", ["username"]),

  featureRequests: defineTable({
    userId: v.optional(v.string()),
    username: v.optional(v.string()),
    request: v.string(),
    tags: v.optional(v.array(v.string())),
    priority: v.optional(v.string()),
    status: v.string(),
    adminNote: v.optional(v.string()),
    votes: v.array(v.string()),
    createdAt: v.number(),
  })
    .index("by_votes", ["votes"])
    .index("by_createdAt", ["createdAt"]),

  blogPosts: defineTable({
    authorId: v.string(),
    authorUsername: v.string(),
    title: v.string(),
    slug: v.string(),
    content: v.string(),
    excerpt: v.string(),
    coverImage: v.optional(v.string()),
    images: v.array(v.object({
      url: v.string(),
      alt: v.string(),
      caption: v.optional(v.string()),
      position: v.optional(v.number()), // for ordering in the content
    })),
    videos: v.array(v.object({
      url: v.string(),
      title: v.string(),
      thumbnail: v.optional(v.string()),
      duration: v.optional(v.number()), // in seconds
      position: v.optional(v.number()),
    })),
    attachments: v.array(v.object({
      url: v.string(),
      name: v.string(),
      type: v.string(), // e.g., 'pdf', 'doc', etc.
      size: v.number(), // in bytes
    })),
    tags: v.array(v.string()),
    status: v.string(),
    publishedAt: v.optional(v.number()),
    createdAt: v.number(),
    updatedAt: v.number(),
    views: v.number(),
    likes: v.array(v.string()),
    readingTimeMinutes: v.number(),
    seoDescription: v.optional(v.string()),
  })
    .index("by_authorId", ["authorId"])
    .index("by_slug", ["slug"])
    .index("by_publishedAt", ["publishedAt"])
    .index("by_status", ["status"])
    .index("by_tags", ["tags"]),

  blogComments: defineTable({
    postId: v.id("blogPosts"),
    userId: v.string(),
    username: v.string(),
    content: v.string(),
    createdAt: v.number(),
    updatedAt: v.optional(v.number()),
    likes: v.array(v.string()), // array of userIds who liked
    parentCommentId: v.optional(v.id("blogComments")), // for nested comments
  })
    .index("by_postId", ["postId"])
    .index("by_userId", ["userId"])
    .index("by_parentCommentId", ["parentCommentId"]),

  blogStats: defineTable({
    postId: v.id("blogPosts"),
    totalViews: v.number(),
    uniqueViews: v.number(),
    avgReadTime: v.number(),
    bounceRate: v.number(),
    referrers: v.array(v.string()), // source -> count
    deviceTypes: v.array(v.string()), // device -> count
    countries: v.array(v.string()), // country -> count
    lastUpdated: v.number(),
  })
    .index("by_postId", ["postId"]),

  blogViewEvents: defineTable({
    postId: v.id("blogPosts"),
    userId: v.optional(v.string()),
    sessionId: v.string(),
    timestamp: v.number(),
    referrer: v.optional(v.string()),
    deviceType: v.string(),
    country: v.optional(v.string()),
    timeOnPage: v.optional(v.number()),
  })
    .index("by_postId", ["postId"])
    .index("by_timestamp", ["timestamp"]),
}); 
