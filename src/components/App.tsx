import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HashtagList from "./hashtag/HashtagList";
import { useEffect } from "react";
import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";

function App() {
  const fetchFeedbackITems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems
  );
  useEffect(() => {
    fetchFeedbackITems();
  }, [fetchFeedbackITems]);
  return (
    <div className="app">
      <Footer />

      <Container />
      <HashtagList />
    </div>
  );
}

export default App;
