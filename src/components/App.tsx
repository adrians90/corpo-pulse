import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HashtagList from "./hashtag/HashtagList";

import FeedbackItemsContextProvider from "./contexts/FeedbackItemsContextProvider";

function App() {
  return (
    <div className="app">
      <Footer />
      <FeedbackItemsContextProvider>
        <Container />
      </FeedbackItemsContextProvider>

      <HashtagList />
    </div>
  );
}

export default App;
