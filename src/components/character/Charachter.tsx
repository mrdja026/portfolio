import aragon from "../../images/aragon.jpg";
export default function CharacterSheet({
  name,
  race,
  className,
}: {
  name: string;
  race: string;
  className: string;
}) {
  return (
    <div class="grid md:grid-cols-2 gap-6 items-center max-w-2xl mx-auto p-4">
      <div class="flex flex-col items-center gap-2 bg-muted p-4 rounded-lg h-full">
        <img
          src={aragon.src}
          alt="Character"
          width={200}
          height={200}
          class="rounded-full w-full max-w-[150px] aspect-square object-cover"
        />
        <div class="text-xl font-bold">{name}</div>
      </div>
      <div class="space-y-2 bg-muted p-4 rounded-lg h-full">
        <div class="flex flex-col gap-1">
          <div class="text-2xl font-bold underline">{name}</div>
          <div class="text-lg font-bold">Race: {race}</div>
          <div class="text-lg font-bold">Class: {className}</div>
        </div>
      </div>
    </div>
  );
}
