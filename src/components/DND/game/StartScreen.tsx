import CharacterSheet from "../../../components/character/Charachter";

export default function StartScreen() {
  const characterSheets = [
    { name: "Aragon", race: "Human", className: "Class 1" },
    { name: "Balgrog", race: "Demon ", className: "Class 2" },
  ];

  return (
    <div class="flex flex-col min-h-[100dvh]">
      <section class="w-full bg-gray-200 py-12 md:py-24 lg:py-32">
        <div class="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
          <h1 class="text-4xl font-bold text-black sm:text-5xl md:text-6xl">
            Welcome to the Game
          </h1>
          <p class="text-lg text-black max-w-[700px]">
            Embark on an epic adventure and test your skills in our thrilling
            game.
          </p>
          <button>Start Game</button>
        </div>
      </section>
      <section class="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
        <div class="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="space-y-4 text-white">
            <div class="flex flex-col min-h-[100dvh]">
              {/* ... */}
              <section class="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
                <div class="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div class="space-y-4 text-white">
                    <h2 class="text-3xl font-bold">Explore the World</h2>
                    <p class="text-gray-400">
                      Discover hidden secrets, battle fierce enemies, and
                      uncover the mysteries of the land. Immerse yourself in a
                      captivating story that will keep you on the edge of your
                      seat.
                    </p>
                  </div>
                  <div class="space-y-4 text-white">
                    {characterSheets.map((characterSheet) => (
                      <CharacterSheet
                        name={characterSheet.name}
                        race={characterSheet.race}
                        className={characterSheet.className}
                      />
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
