import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <section className="container">
      <div className="py-6">
        Landing Page (Unprotected)
        <div className="flex gap-x-4">
          <div>
            <Link href="/sign-in">
              <Button>Login</Button>
            </Link>
          </div>
          <div>
            <Link href="/sign-up">
              <Button>register</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
