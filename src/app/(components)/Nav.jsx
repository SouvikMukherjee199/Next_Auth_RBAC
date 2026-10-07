import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
const Nav = async () => {
  const session = await getServerSession(options);
  return (
    <header className="bg-gray-600 text-gray-100">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>My Site</div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/CreateUser">Create User</Link>
          {/* <!-- Requires user to be
          logged In as well as admin --> */}
          <Link href="/ClientMember">Client Member</Link>
          {/* //Requires user to be
          logged in only */}
          <Link href="/Member">Member</Link>
          {/* //rendered on the server instead of
          client side */}
          <Link href="/Public">Public</Link>
          {/* //Completely unprotected page */}
          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
          ) : (
            <Link href="/api/auth/signin">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
