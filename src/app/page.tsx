import { TeamArea } from "@/components/Ex Team/team-area";
import { ThemeToggle } from "@/components/theme-toggle";

const Page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-2xl">
        <ThemeToggle></ThemeToggle>
        
        <TeamArea></TeamArea>
      </div>
    </div>

  );
}

export default Page;