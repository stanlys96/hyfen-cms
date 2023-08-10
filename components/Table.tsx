import dayjs from "dayjs";
// import { TableBody, TableHead, TableNew, Tbody, Theading } from "./atoms";
import { useRouter } from "next/router";
import Table from "./atoms/Table";
import Theading from "./atoms/Theading";
import TableHead from "./atoms/TableHead";
import Tbody from "./atoms/Tbody";
import TableBody from "./atoms/TableBody";
import { useState, useEffect } from "react";

type Props = {
  translation: any;
  finalList: any;
};

export const TableKYC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    domLoaded && (
      <Table className="overflow-scroll max-w-[80vw]">
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
          <a
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
            <TableBody>
              WALAOWALAOWALAOWALAOWALAOWALAOWALAOWALAOWALAOWALAO WALAO WALAO
              WALAO
            </TableBody>
          </a>
        </Tbody>
      </Table>
    )
  );
};
