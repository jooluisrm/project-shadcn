"use client"

import { useState } from "react";
import { TeamCombobox } from "./team-combobox";
import { Members } from "./types/members";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Props = {
    data: Members;
}

export const TeamItem = ({ data }: Props) => {

    const [role, setRole] = useState(data.role)

    return (
        <div className="flex gap-4 items-center">
            <div>
                <Avatar>
                    <AvatarImage src={`${data.avatar}`} />
                    <AvatarFallback>{data.id}</AvatarFallback>
                </Avatar>

            </div>
            <div className="flex-1 overflow-x-hidden">
                <div className="truncate">{data.name}</div>
                <div className="truncate text-sm text-muted-foreground">{data.email}</div>
            </div>
            <div>
                <TeamCombobox value={role} setValue={setRole}></TeamCombobox>
            </div>
        </div>
    );
}