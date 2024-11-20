import { Card, CardContent } from "@/components/ui/card";

type DashboardProps = {
  fullscreen?: boolean;
};

const Dashboard = ({ fullscreen }: DashboardProps) => {
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
    <div className={fullscreen ? "w-full" : "w-[768px] m-auto"}>
      <h1>My Recipes</h1>
      {mockData.map((recipe) => (
        <Card className="w-[150px] overflow-hidden group">
          <CardContent className="px-0 overflow-hidden">
            <div className="w-[150px] h-[150px] overflow-hidden">
              <img
                src="https://avatars.githubusercontent.com/u/61067472?s=400&u=b572e74023bbb67946f6cba4d34e5981c5cf1f20&v=4"
                alt="recipe"
                className="group-hover:scale-110 transition-all"
              />
            </div>
            <div className="font-semibold truncate">{recipe.title}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Dashboard;
