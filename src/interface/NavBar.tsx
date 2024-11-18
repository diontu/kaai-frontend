import { Button } from "@/components/ui/button";

type NavBarProps = {
  links: {
    title: string;
    path: string;
  }[];
};

const NavBar = ({ links }: NavBarProps): JSX.Element => {
  return (
    <div className="flex flex-col p-3 w-[150px] bg-slate-400 text-white">
      <nav>
        <ul>
          {links.map((link) => (
            <li>
              <Button variant="link">{link.title}</Button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
