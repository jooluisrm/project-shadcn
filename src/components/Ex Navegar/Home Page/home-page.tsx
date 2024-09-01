import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export const HomePage = () => {
    return (
        <main className="flex">
            <div className="flex-1">
                <Tabs defaultValue="account" className="">
                    <TabsList className="w-full bg-transparent justify-around rounded-none border border-t-0 border-l-0 border-r-0">
                        <TabsTrigger value="account">Para Voce</TabsTrigger>
                        <TabsTrigger value="password">Seguindo</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">Make changes to your account here.</TabsContent>
                    <TabsContent value="password">Change your password here.</TabsContent>
                </Tabs>
            </div>
            <div className="w-96 px-5 border border-t-0 border-r-0">
                <div>
                    <Input></Input>
                </div>
            </div>
        </main>



    );
}