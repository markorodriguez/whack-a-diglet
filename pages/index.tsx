import Image from "next/image";
import { Button } from "../components/start/Button";

export default function Home() {

  const buttons = [
    {
      text: "Singleplayer",
      link: "/singleplayer",
    },
    {
      text: "Multiplayer",
      link: "/multiplayer",
    },
    {
      text: "Leaderboard",
      link: "/leaderboard",
    }
  ]

  return (
    <div className="bg-login-pattern bg-center bg-cover bg-fixed min-h-screen w-full flex items-center justify-center">
      <div>
        <div>
          <h1 className="text-3xl font-semibold">Whack a Diglet</h1>
          <Image
            className="my-8 mx-auto"
            src="/images/diglett.png"
            alt="Diglet"
            width={150}
            height={150}
          />
        </div>
        <div className="flex mt-16 flex-col justify-between">
          {buttons.map((button, index) => <Button key={index} text={button.text} link={button.link} />)}
        </div>
      </div>
    </div>
  );
}
