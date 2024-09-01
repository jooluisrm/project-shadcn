"use client"

import { LoginForm } from "@/components/Ex Login/login-form";
import { Navegar } from "@/components/Ex Navegar/tabelaOpcoes";
import { TeamArea } from "@/components/Ex Team/team-area";
import { ThemeToggle } from "@/components/theme-toggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Page = () => {
    return (
        <div className="container">
            
            <Navegar></Navegar>
        </div>

    );
}

export default Page;