import dayjs from "dayjs";
import { useRouter } from "next/router";
import Table from "./atoms/Table";
import Theading from "./atoms/Theading";
import TableHead from "./atoms/TableHead";
import Tbody from "./atoms/Tbody";
import TableBody from "./atoms/TableBody";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "@/utils/axios";

export const TableContent = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR("/categories", fetcher);
  console.log(data, "<<<<");

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    domLoaded && (
      <Table className="overflow-x-scroll max-w-[80vw]">
        <Theading>
          <tr>
            <TableHead className="font-light py-8">Application No.</TableHead>
            <TableHead className="font-light py-8">Application Date</TableHead>
            <TableHead className="font-light py-8">Name</TableHead>
            <TableHead className="font-light py-8">DoB</TableHead>
            <TableHead className="font-light py-8">
              Phone Number / Email
            </TableHead>
            <TableHead className="font-light py-8">Details</TableHead>
          </tr>
        </Theading>
        <Tbody>
          <tr
            onClick={() => {
              router.push(`/content/${id}`);
            }}
            className="table-row cursor-pointer bg-blackDark text-center hover:bg-appShade200/50 transition-all duration-300 border-b border-app-shade"
          >
            <TableBody>5</TableBody>
            <TableBody>WALAO</TableBody>
            <TableBody>WALAO</TableBody>
            <TableBody>WALAO</TableBody>
            <TableBody>WALAO</TableBody>
            <TableBody>WALAOWALAOWALAOWALAOWALASDASDASD</TableBody>
          </tr>
        </Tbody>
      </Table>
    )
  );
};
