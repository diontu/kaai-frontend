import { Card, CardContent } from "@/components/ui/card";

type CardViewProps = {
  data: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];
};

const CardView = ({ data }: CardViewProps): JSX.Element => {
  return (
    <>
      {data.map((recipe) => (
        <Card key={recipe.id} className="w-[150px] overflow-hidden group">
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
    </>
  );
};

export default CardView;
