import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "../ui/button";
import { HomePage } from "./Home Page/home-page";


export const Navegar = () => {
    return (
        <Tabs defaultValue="home" className="w-full h-screen flex ">
            <TabsList className="flex flex-col h-auto justify-start items-start bg-transparent border border-l-0 rounded-none pr-10">
                <header className="text-4xl p-3">X</header>
                <TabsTrigger value="home">Pagina inicial</TabsTrigger>
                <TabsTrigger value="explore">Explorar</TabsTrigger>
                <TabsTrigger value="notification">Notificação</TabsTrigger>
                <TabsTrigger value="msg">Mensagens</TabsTrigger>
                <Button className="w-full">Postar</Button>
            </TabsList>
            <TabsContent value="home" className="w-full mt-0">
                <HomePage></HomePage>
            </TabsContent>
            <TabsContent value="explore">Explore</TabsContent>
            <TabsContent value="notification">suas notificação</TabsContent>
            <TabsContent value="msg">suas Mensagens</TabsContent>
        </Tabs>
    );
}


