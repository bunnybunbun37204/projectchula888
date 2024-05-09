import useSWR from 'swr';
import { fetcher } from './fetcher';
import type { ProjectQ } from './type';

export function useBlog() {
  const { data, error, isLoading } = useSWR<{ result: ProjectQ[] }>(
    `https://projectchula888-api.bunyawatapp37204.workers.dev/project`,
    fetcher,
  );
  console.log(data?.result);
  return {
    blog: data?.result,
    isLoading,
    isError: error,
  };
}
