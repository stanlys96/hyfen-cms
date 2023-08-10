import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  const contentData = [
    {
      id: 1,
      name: "Game",
    },
    {
      id: 2,
      name: "Token",
    },
  ];
  return (
    <div className="min-w-[20vw] border-r-2 border-lightGray min-h-[100vh] bg-dark">
      <div className="p-5 text-white">
        <p className="font-bold text-xl">Content</p>
        <div className="p-5 flex flex-col gap-y-1">
          {contentData.map((content, idx) => (
            <div
              onClick={() => {
                router.push(`/category/${content.id}`);
              }}
              className="flex gap-x-2 items-center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.5rem"
                height="0.5rem"
                fill="none"
                viewBox="0 0 2 2"
                className="sc-eEvSnX IeBxp"
              >
                <rect width="2" height="2" fill="#A5A5BA" rx="2"></rect>
              </svg>
              <p>{content.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
