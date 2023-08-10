import { TableContent } from "@/components/Table";
import { Main } from "@/src/layouts/Main";
import { useRouter } from "next/router";
import { dataHelper } from "@/utils/helper";
import useSWR from "swr";
import { fetcher } from "@/utils/axios";

export default function CategoryPage() {
  const router = useRouter();
  const { id } = router.query;
  const currentData = dataHelper.find((data) => data.id.toString() === id);

  const { data, error, isLoading } = useSWR(currentData?.url, fetcher);
  return (
    <Main>
      <div className="py-5 px-20 min-w-[80vw] min-h-[100vh] text-white">
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="text-xl font-bold">{currentData?.name}</p>
            <p className="text-gray">{data?.data.data.length} Entries Found</p>
          </div>
          <div>
            <a
              onClick={() => {
                router.push(`/create/${id}`);
              }}
              className="px-3 py-2 rounded-[5px] text-white bg-blueDark cursor-pointer"
            >
              + Create new entry
            </a>
          </div>
        </div>
        <div className="mt-5">
          <TableContent currentData={currentData} data={data} />
        </div>
      </div>
    </Main>
  );
}
