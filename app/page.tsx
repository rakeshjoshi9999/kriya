"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { Button } from "@/components/ui/button";

export default function Home() {
  const projects = useQuery(api.projects.get);
  const createProject = useMutation(api.projects.create);
  return (
    <main className="flex flex-col gap-2 p-4">
      <Button onClick={() => createProject({ name: "New Project" })}>
        Add new Project
      </Button>
      {projects?.map(({ _id, name, ownerId }) => 
      <div className="border rounded p-2" key={_id}>
        <div>
          Project Name: {name}
          </div>
          <div>
          Owner ID: {ownerId}
          </div>
      </div>)}
    </main>
  );
}