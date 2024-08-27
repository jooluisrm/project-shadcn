"use client"

import { LoginForm } from "@/components/Ex Login/login-form";
import { TeamArea } from "@/components/Ex Team/team-area";
import { ThemeToggle } from "@/components/theme-toggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Page = () => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto w-full max-w-2xl w-full max-w-2xl">
        <ThemeToggle></ThemeToggle>

        
        <LoginForm></LoginForm>

      </div>
    </div>

  );
}

export default Page;