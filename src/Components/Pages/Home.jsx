import Hovercard from "../ui/HoverCard";

export const Home = () => {
  return (
    <>
      <div className="flex gap-5 p-20">
        <Hovercard
          src="https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000"
          alt="js"
          title="Javascript"
          href="/javascript"
        />
        <Hovercard
          src="https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000"
          alt="python"
          title="Python"
          href="/python"
        />
      </div>

      <div>Select language to learn</div>
    </>
  );
};
