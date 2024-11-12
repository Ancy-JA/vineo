// hooks/useFetchBoxHistory.ts
import { useGetBoxHistoryAdminQuery } from '@/app/redux/authApi';

export const useFetchBoxHistory = (
  searchTerm: string,
  page: number,
  pageSize: number
) => {
  const { data, refetch, isLoading, error } = useGetBoxHistoryAdminQuery({
    searchString: searchTerm,
    page,
    pageSize,
  });

  const fetchedBoxes = data?.data?.getBoxHistoryAdmin?.boxes || [];
  const totalClients = data?.data?.getBoxHistoryAdmin?.total || 0;
  const totalPages = Math.ceil(totalClients / pageSize);

  return {
    fetchedBoxes,
    totalClients,
    totalPages,
    refetch,
    isLoading,
    error,
  };
};
