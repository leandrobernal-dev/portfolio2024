---
title: 'How to add Server Side Firebase Auth Checking to your Next.js App'
date: '2024-11-13'
lastmod: '2024-11-13'
tags: ['next-js', 'firebase', 'auth', 'ssr', 'middleware']
draft: false
summary: 'A guide on how to add Server Side Firebase Auth Checking to your Next.js App. Learn how to use Firebase Authentication to protect pages and API routes in your Next.js app.'
images: ['']
---

## Introduction

This guide will explain how to use Firebase Authentication to secure pages and API routes in a Next.js application by implementing Server-Side Authentication with Firebase, using middleware for access control.

- [Save cookies](#Save-cookies)
- [Server Side Firebase Auth Checking](#Server-Side-Firebase-Auth-Checking)
- [Protect API Routes with Middlewares](#Protect-API-Routes-with-Middleware)

## Save cookies
Saving the authentication token in a cookie lets your Next.js app handle authentication on both client and server sides. This ensures pages and API routes are securely accessible only to authenticated users.

Add the cookie-saving logic in the AuthProvider's useEffect hook, where onIdTokenChanged updates the cookie whenever the token changes.

```ts

import { onAuthStateChanged, onIdTokenChanged, User } from "firebase/auth";

export const AuthProvider = ({ children, defaultUser }: AuthProviderProps) => {
    //...

    useEffect(() => {
        return onIdTokenChanged(auth, async (user) => {
            if (!user) {
            setUser(null);
            setCookie(undefined, "token", "", { path: "/" });
            } else {
            const token = await user.getIdToken();
            setUser(user);
            setCookie(undefined, "token", token, { path: "/" });
            }
        });
    }, []);

    //...
}
```

## Server Side Firebase Auth Checking
Create serverApp.ts to your project.

```ts
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./config";
import { initializeServerApp } from "firebase/app";
import { cookies, headers } from "next/headers";

export async function getAuthenticatedAppForUser() {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) {
        return null;
    }

    const firebaseServerApp = initializeServerApp(
        firebaseConfig,
        { authIdToken: token }
    );

    const auth = getAuth(firebaseServerApp);
    await auth.authStateReady();

    return { firebaseServerApp, currentUser: auth.currentUser || null };
}
```

## Protect API Routes with Middleware
Create middleware.ts to your root project or inside the src directory if you are using the src directory.

```ts
import { getAuthenticatedAppForUser } from '@/lib/firebase/serverApp';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const user = await getAuthenticatedAppForUser();
    if (!user) {
        return NextResponse.redirect(new URL('/auth/login', request.nextUrl).toString() + `?next=${encodeURIComponent(request.url)}`);
    }
}

export const config = {
    matcher: ['/account/:path*'], // Add routes that you want to protect
};
```
