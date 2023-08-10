import { Main } from "@/src/layouts/Main";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useRouter } from "next/router";
import { dataHelper } from "@/utils/helper";
import useSWR from "swr";
import { fetcher } from "@/utils/axios";
import React, { useState, useEffect } from "react";

export default function ContentPage() {
  const router = useRouter();
  const { id, second_id } = router.query;

  const currentData = dataHelper.find((data) => data.id.toString() === id);
  const {
    data: theData,
    error,
    isLoading,
  } = useSWR(`${currentData?.url}/${second_id}`, fetcher);
  const [currentState, setCurrentState] = useState<any>(
    currentData?.fields
      .map((val) => val.value2 && { field: val.value2, currentValue: "" })
      .filter((value) => value)
  );

  useEffect(() => {
    setCurrentState(
      currentData?.fields
        .map((val) => val.value2 && { field: val.value2, currentValue: "" })
        .filter((value) => value)
    );
  }, [currentData]);

  useEffect(() => {
    if (theData?.data.data && currentState && currentState.length > 0) {
      let theResult = [];
      for (const theObj in theData?.data.data.attributes) {
        for (const currentObj of currentData?.fields ?? []) {
          if (currentObj.value2 === theObj) {
            const theValue = theData?.data.data.attributes[currentObj.value2];
            let currentTemp = currentState?.find(
              (temp: any) => temp.field === currentObj.value2
            );
            currentTemp.currentValue = theValue;
            theResult.push(currentTemp);
          }
        }
      }
      setCurrentState([...theResult]);
    }
  }, [theData]);
  return (
    <Main>
      <div className="py-5 px-20 min-w-[80vw] min-h-[100vh] text-white">
        <div className="flex justify-between items-center w-full">
          <div>
            <div
              onClick={() => {
                router.back();
              }}
              className="flex gap-x-2 items-center mb-4 cursor-pointer"
            >
              <AiOutlineArrowLeft />
              <p>Back</p>
            </div>
            <div>
              <p className="text-xl font-bold">{currentData?.name}</p>
              <p className="text-gray">API ID: {currentData?.name}</p>
            </div>
          </div>
          <div>
            <a className="px-3 py-2 rounded-[5px] text-white bg-blueDark cursor-pointer">
              Save
            </a>
          </div>
        </div>
        {theData?.data.data && currentState && (
          <div className="flex gap-x-4 items-center">
            <div className="p-5 border border-lightGray mt-4 rounded-[5px] bg-blueDark/10 w-full">
              <div className="grid grid-cols-2 gap-4">
                {currentState?.map(
                  (data: any, idx: any) =>
                    data && (
                      <div key={idx}>
                        <p className="mb-2">{data.field}</p>
                        <input
                          onChange={(e) => {
                            let theTemp = [...currentState];
                            theTemp[idx].currentValue = e.target.value;
                            setCurrentState([...theTemp]);
                          }}
                          className="p-2 border border-lightGray rounded-[5px] bg-transparent w-full"
                          type="text"
                          value={data.currentValue}
                        />
                      </div>
                    )
                )}
              </div>
            </div>
            <div className="w-fit inline-block">
              <a className="px-3 py-2 rounded-[5px] bg-blueDark cursor-pointer w-fit inline-block flex items-center gap-x-1">
                <BsFillTrash3Fill />
                Delete&nbsp;this&nbsp;entry
              </a>
            </div>
          </div>
        )}
      </div>
    </Main>
  );
}
