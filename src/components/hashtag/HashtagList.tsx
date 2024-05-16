import { useFeedbackItemsContext } from "../contexts/FeedbackItemsContextProvider";
import HashtagItem from "./HashtagItem";

type HashtagListProps = {
  handleSelectCompany: (company: string) => void;
};

export default function HashtagList({ handleSelectCompany }: HashtagListProps) {
  const { companyList } = useFeedbackItemsContext();
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem company={company} onSelectCompany={handleSelectCompany} />
      ))}
    </ul>
  );
}
