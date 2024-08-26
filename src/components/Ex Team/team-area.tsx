import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { members } from "./data/members"
import { Item } from "@radix-ui/react-dropdown-menu"
import { TeamItem } from "./team-item"



export const TeamArea = () => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Team Members</CardTitle>
                    <CardDescription>Invite your team members to collaborate.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-5">
                    {members.map(Item => (
                        <TeamItem key={Item.id} data={Item}></TeamItem>
                    ))}
                </CardContent>
            </Card>

        </div>
    )
}