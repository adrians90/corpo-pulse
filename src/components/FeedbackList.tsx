import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFeedbackItems(data.feedbacks);
      });
  }, [feedbackItems]);
  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => {
        return (
          <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
        );
      })}
    </ol>
  );
}
