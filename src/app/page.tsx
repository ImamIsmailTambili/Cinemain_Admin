import { redirect } from "next/navigation";
import getUser from "@/components/GetUser";

const page = async () => {
  const user = await getUser();

  if (user) {
    redirect("/Dashboard");
  }

  redirect("/Login");
};

export default page;
