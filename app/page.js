import LoginForm from "./components/LoginForm";

export const runtime = 'edge'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  bg-zinc-800">
      <LoginForm/>
    </main>
  );
}
