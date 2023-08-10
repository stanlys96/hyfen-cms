import dayjs from "dayjs";
import { useRouter } from "next/router";
import Table from "./atoms/Table";
import Theading from "./atoms/Theading";
import TableHead from "./atoms/TableHead";
import Tbody from "./atoms/Tbody";
import TableBody from "./atoms/TableBody";
import { useState, useEffect } from "react";

interface Props {
  data: any;
  currentData: any;
}

export const TableContent = ({ data, currentData }: Props) => {
  const router = useRouter();
  const { id } = router.query;

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  console.log(data, "ASDJALSJD");
  return (
    domLoaded &&
    data && (
      <Table className="overflow-x-scroll max-w-[80vw]">
        <Theading>
          <tr>
            {currentData?.fields.map((field: any, idx: any) => (
              <TableHead key={idx} className="font-light py-8">
                {field.name}
              </TableHead>
            ))}
          </tr>
        </Theading>
        <Tbody>
          {data.data.data.map((theData: any, idx: any) => (
            <tr
              onClick={() => {
                router.push(`/content/${id}/${theData.id}`);
              }}
              className="table-row cursor-pointer bg-blackDark text-center hover:bg-appShade200/50 transition-all duration-300 border-b border-app-shade"
            >
              {currentData?.fields.map((field: any, idx: any) => (
                <TableBody>
                  {field.value2
                    ? theData[field.value][field.value2].length > 50
                      ? theData[field.value][field.value2].slice(0, 50) + "..."
                      : theData[field.value][field.value2]
                    : theData[field.value].length > 50
                    ? theData[field.value].slice(0, 50) + "..."
                    : theData[field.value]}
                </TableBody>
              ))}
            </tr>
          ))}
        </Tbody>
      </Table>
    )
  );
};
