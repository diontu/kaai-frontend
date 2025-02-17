import AdvancedSearch from "@/components/complex/advancedsearch/AdvancedSearch";
import { useState } from "react";
import CardView from "@/interface/dashboard/CardView";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import ListView from "@/interface/dashboard/ListView";
import { AlignJustify, Folders } from "lucide-react";
import { Button } from "@/components/ui/button";
import CreateRecipeModal from "@/interface/dashboard/CreateRecipeModal";
import { useNavigate } from "react-router-dom";

type DashboardProps = {
  fullscreen?: boolean;
};

type ViewType = "card" | "list";

const Dashboard = ({ fullscreen }: DashboardProps) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [view, setView] = useState<ViewType>("list");

  const mockData = [
    {
      id: 1,
      title: "recipe 1 recipe 1 recipe 2",
      description: "description 1",
      image:
        "https://avatars.githubusercontent.com/u/61067472?s=400&u=b572e74023bbb67946f6cba4d34e5981c5cf1f20&v=4",
    },
  ];
  return (
    <div className={fullscreen ? "max-w-full" : "max-w-[768px] m-auto"}>
      <h1>My Recipes</h1>
      <div className="flex flex-col gap-4">
        <CreateRecipeModal>
          <Button>Add Recipe</Button>
        </CreateRecipeModal>
        <Button onClick={() => navigate("/explore")}>Change URL</Button>
        <AdvancedSearch
          searchValue={search}
          searchOnChange={(value) => setSearch(value)}
          searchPlaceholder="Search Recipe"
          filterOptions={[{ label: "Protein", value: "protein" }]}
        />
        <ToggleGroup
          type="single"
          onValueChange={(value) => setView(value as ViewType)}
          defaultValue={view}
        >
          <ToggleGroupItem value="card">
            <Folders />
          </ToggleGroupItem>
          <ToggleGroupItem value="list">
            <AlignJustify />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {view === "card" && <CardView data={mockData} />}
      {view === "list" && <ListView data={mockData} />}
    </div>
  );
};

export default Dashboard;
