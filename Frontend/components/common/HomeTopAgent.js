import AgentCard from "./AgentCard";

function HomeTopAgent() {
  return (
    <div className="w-full pb-10 lg:pb-20 px-4 lg:px-36 space-y-2">
      <div className="w-full 2xl:w-fit 2xl:mx-auto">
        <p className="text-4xl font-semibold">Meet our super agent</p>
        <div className="flex flex-wrap items-center justify-evenly lg:justify-normal gap-5 pt-3">
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
        </div>
      </div>
    </div>
  );
}

export default HomeTopAgent;
