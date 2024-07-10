import useCurrentUser from '@/hooks/useCurrentUser';
import { NextPageContext } from 'next';
import { getSession, signOut } from 'next-auth/react';

export async function getServerSideProps(context:NextPageContext){
  const session = await getSession(context);

  if (!session) {
    return{ 
      redirect:{
        destination:'/auth',
        permanent: false,
      }
    }
  }

  return{
    props:{}
  }
}

export default function Home() {
const { data : user} = useCurrentUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className='text-white'>Logged in as: <span className='text-purple-600'>{user?.name} </span></p>
      <button className='h-10 w-full bg-white' onClick={() => signOut()}>LogOut!</button>
    </main>
  );
}
