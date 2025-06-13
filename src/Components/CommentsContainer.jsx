import React from "react";
import Comment from "./Comment";
import CommentList from "./CommentList";
const commentsData = [
  {
    id: 1,
    name: "Om Jaiswal",
    comment: "This is a great video!",
    likes: 10,
    replies: [
      {
        id: 2,
        name: "Avinash",
        comment: "I learned a lot from this.",
        likes: 5,
        replies: [
          {
            id: 3,
            name: "mayank",
            comment: "Can't wait for the next video!",
            likes: 8,
            replies: [
              {
                id: 3,
                name: "Sheetal",
                comment: "Can't wait for the next video!",
                likes: 8,
                replies: [
                  {
                    id: 2,
                    name: "Arpit",
                    comment: "I learned a lot from this.",
                    likes: 5,
                    replies: [],
                    timestamp: "2023-10-01T12:05:",
                  },
                ],
                timestamp: "2023-10-01T12:10:",
              },
            ],
            timestamp: "2023-10-01T12:10",
          },
        ],
        timestamp: "2023-10-01T12:05",
      },
    
    ],
    timestamp: "2023-10-01T12:00",
  },
  {
    id: 2,
    name: "Arpit",
    comment: "I learned a lot from this.",
    likes: 5,
    replies: [],
    timestamp: "2023-10-01T12:05:",
  },
  {
    id: 3,
    name: "Sheetal",
    comment: "Can't wait for the next video!",
    likes: 8,
    replies: [],
    timestamp: "2023-10-01T12:10:",
  },
];

const CommentsContainer = () => {
  return (
    <div className="px-10 py-1 shadow-md rounded-lg mt-4">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
