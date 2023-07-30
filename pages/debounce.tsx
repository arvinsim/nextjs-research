import React from "react";

function Debounce() {
  const [searchTermSubmitted, setSearchTermSubmitted] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onSubmit = (e: React.SyntheticEvent) => {
    // Do Nothing
  };

  return (
    <div>
      <h1>Debounce</h1>
      <form onSubmit={onSubmit}>
        <label>Search: </label>
        <input
          type={"search"}
          name={"search_term"}
          className={
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          }
        />
      </form>
      <div>
        Search Term Submitted: {loading ? "loading..." : searchTermSubmitted}
      </div>
    </div>
  );
}

export default Debounce;
