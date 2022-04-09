import { getSession, useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      <h1>Bem vindo</h1>

      <pre>
        {JSON.stringify(user, null, 4)}
      </pre>
    </div>
  );
}

//export const getServerSideProps = withPageAuthRequired();

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
  const session = getSession(req, res);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/login',
        permanent: false,
      }
    }
  }
  return {
    props: {}
  }
}