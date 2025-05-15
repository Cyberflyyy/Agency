import { projects } from "../lib/data";
import NonStackingCard from "./non_stacking_card";

const NonStackingCards = () => {
  return (
    <div className="px-4 py-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, i) => (
          <NonStackingCard key={i} {...project} />
        ))}
      </div>
    </div>
  );
};

export default NonStackingCards;
