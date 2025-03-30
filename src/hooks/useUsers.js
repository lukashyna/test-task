import React from "react";
import { fetchUsers } from "../services/userService";

const useUsers = () => {
  const [users, setUsers] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [nextPage, setNextPage] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const getUsers = React.useCallback(async (page) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchUsers(page);
      const sortedUsers = data.users.sort(
        (a, b) => b.registration_timestamp - a.registration_timestamp
      );

      setNextPage(data.links.next_url);

      setUsers((prev) =>
        page === 1 ? sortedUsers : [...prev, ...sortedUsers]
      );
    } catch (error) {
      setError(error.message || "Failed to fetch users.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    getUsers(currentPage);
  }, [currentPage, getUsers]);

  const loadMore = () => {
    if (nextPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return { users, isLoading, nextPage, error, loadMore, setCurrentPage };
};

export default useUsers;
