import { withAuth } from "next-auth/middleware";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebase-config";

const validatorAdmin = async () => {
  await onAuthStateChanged(auth, (currentUser) => {
    console.log("auth", auth);
    if (currentUser) {
      console.log("user", currentUser);
      const uid = currentUser.uid;
      if (currentUser.email === "admin@gmail.com") {
        return "Admin";
      }
      return "NotAdmin";
    } else {
      console.log("User is not Admin");
      return "NotAdmin";
    }
  });

  return;
};
const e = validatorAdmin();
console.log(e)
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  validatorAdmin();
  return NextResponse.redirect(new URL('/admin', request.url))
}
let token = ""
export const config = {
  matcher: '/admin/:pdvwSchhINbT69qmUDNN',
}