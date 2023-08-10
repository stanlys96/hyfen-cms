import { Main } from "@/src/layouts/Main";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useRouter } from "next/router";

export default function CreatePage() {
  const router = useRouter();
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
              <p className="text-xl font-bold">Axie Infinity</p>
              <p className="text-gray">API ID: game</p>
            </div>
          </div>
          <div>
            <a className="px-3 py-2 rounded-[5px] text-white bg-blueDark cursor-pointer">
              Save
            </a>
          </div>
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="p-5 border border-lightGray mt-4 rounded-[5px] bg-blueDark/10 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="mb-2">title</p>
                <input
                  className="p-2 border border-lightGray rounded-[5px] bg-transparent w-full"
                  type="text"
                />
              </div>
              <div>
                <p className="mb-2">title</p>
                <input
                  className="p-2 border border-lightGray rounded-[5px] bg-transparent w-full"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
