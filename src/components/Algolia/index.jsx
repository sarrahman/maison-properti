import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-hooks";
import { SearchBox } from "./SearchBox";
import { Hits } from "./Hits";

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_ID,
  process.env.REACT_APP_ALGOLIA_SEARCH_KEY
);

function AlgoliaSearch() {
  return (
    <InstantSearch
      suppressExperimentalWarning
      searchClient={searchClient}
      indexName="all_products"
    >
      <SearchBox />
      <Hits />
    </InstantSearch>
  );
}

export default AlgoliaSearch;
