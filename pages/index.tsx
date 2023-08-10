import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  return (
    <div className="min-h-[100vh] bg-dark flex justify-center items-center">
      <div className="py-7 px-[50px] bg-blueDark/10 w-[50vw] rounded-[5px] flex flex-col gap-y-3 justify-center items-center text-white">
        <p>Welcome to Hyfen CMS!</p>
        <p>Login to your Hyfen Admin account.</p>
        <div className="w-full">
          <p className="mb-2">Email</p>
          <input
            className="p-2 border border-lightGray rounded-[5px] bg-transparent w-full"
            type="email"
          />
        </div>
        <div className="w-full">
          <p className="mb-2">Password</p>
          <input
            className="p-2 border border-lightGray rounded-[5px] bg-transparent w-full"
            type="password"
          />
        </div>
        <div className="text-left w-full py-3">
          <a className="cursor-pointer">Forgot your password?</a>
        </div>
        <a
          onClick={() => {
            router.push("/category/1");
          }}
          className="px-3 py-2 rounded-[5px] text-white bg-blueDark cursor-pointer w-full text-center"
        >
          Login
        </a>
      </div>
    </div>
  );
}
