import FeedbackItem from "./FeedbackItem";

const feedbackItems = [
  {
    upvoteCount: 593,
    badgeLetter: "B",
    companyName: "ByteGrad",
    text: "test test test",
    daysAgo: 4,
  },
  {
    upvoteCount: 600,
    badgeLetter: "S",
    companyName: "Starbucks",
    text: "test test test",
    daysAgo: 9,
  },
];

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => {
        return <FeedbackItem feedbackItem={feedbackItem} />;
      })}
    </ol>
  );
}
