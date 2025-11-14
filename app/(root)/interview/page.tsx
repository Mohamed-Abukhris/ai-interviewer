import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  return (
    // eslint-disable-next-line@typescript-eslint/no-non-null-asserted-optional-chain
    <>
      <h3> Interview page</h3>

      <Agent userName={user?.name!} userId={user?.id} type="generate" />
    </>
  );
};
export default Page;
