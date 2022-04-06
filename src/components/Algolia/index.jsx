import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-hooks";
import { SearchBox } from "./SearchBox";
import { Hits } from './Hits';

const searchClient = algoliasearch(
  "ZFUR42MZOG",
  "43ba711c347d6688746e0f6eff32e1dd"
);

function AlgoliaSearch() {
  return (
    <InstantSearch suppressExperimentalWarning searchClient={searchClient} indexName="all_products">
      <SearchBox />
      <Hits />
    </InstantSearch>
  );
}

export default AlgoliaSearch;
