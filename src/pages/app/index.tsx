import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useGetProductsQuery } from "../../graphql/generated/graphql";
import { withApollo } from "../../lib/withApollo";

export function Home() {
  const { user } = useUser();
  const { data, loading, error } = useGetProductsQuery();
  return (
    <div>
      <h1>Bem vindo</h1>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
      <pre>
        {JSON.stringify(user, null, 4)}
      </pre>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();

export default withApollo(Home);