import { createResource, For, Match, Show, Switch } from "solid-js";

type ICharachterSheet = {
  name?: string;
  partyId?: string;
  raceString?: string;
  classString?: string;
};

type TData = {
  count: number;
  results: {
    name: string;
  }[];
};

const fetchRaces = async (): Promise<TData> => {
  return await fetch("http://localhost:3333/races", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log("DEBUG-RACES", err);
    });
};

const fetchClasses = async (): Promise<TData> => {
  return await fetch("http://localhost:3333/classes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log("DEBUG-CLASSES", err);
    });
};

export default function CharacterSheet({
  name,
  partyId,
  raceString,
}: ICharachterSheet) {
  const [races] = createResource<TData>(fetchRaces);
  const [classes] = createResource<TData>(fetchClasses);
  const submitData = async () => {
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const partyInput = document.getElementById("party") as HTMLInputElement;
    const raceSelect = document.getElementById("race") as HTMLSelectElement;
    const classSelect = document.getElementById("class") as HTMLSelectElement;

    const name = nameInput.value;
    const partyNo = partyInput.value;
    const raceName = raceSelect.value;
    const className = classSelect.value;

    const data = {
      name,
      race_id: raceName,
      class_id: className,
      status: "default",
    };
    try {
      const response = await fetch("http://localhost:3333/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle success
        console.log("Data submitted successfully");
      } else {
        // Handle error
        console.log("Error submitting data");
      }
    } catch (error) {
      console.log("Error submitting data", error);
    }
  };

  return (
    <div class="w-full bg-gray-100 dark:bg-gray-800 p-6 md:p-10">
      <div class="max-w-5xl mx-auto grid gap-8 md:grid-cols-[1fr_300px] items-start">
        <div class="grid gap-6">
          <div class="grid grid-cols-[200px_1fr] gap-6">
            <img
              src="https://static.wikia.nocookie.net/p__/images/c/ca/Kelsier2.jpg/revision/latest?cb=20200722165557&path-prefix=protagonist"
              width="200"
              height="300"
              alt="Character"
              style="aspect-ratio: 200 / 300; object-fit: cover;"
              class="rounded-lg object-cover"
            />
            <div class="space-y-4">
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="name"
                >
                  Name
                </label>
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="name"
                  placeholder="Enter character name"
                />
              </div>
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="party"
                >
                  Party Number
                </label>
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="party"
                  placeholder="Enter party number"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
              Character Sheet
            </h3>
          </div>
          <div class="p-6 space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="race"
                >
                  Race
                </label>
                <Switch
                  fallback={<p class="text-muted-foreground">Loading...</p>}
                >
                  <Match when={!races.loading}>
                    <select class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <Show when={races()}>
                        {(value) => (
                          <>
                            <For each={[1, 2]}>
                              {(race, _) => (
                                <option
                                  class="text-sm font-medium text-muted-foreground"
                                  value={race}
                                  id="race"
                                >
                                  {race}
                                </option>
                              )}
                            </For>
                          </>
                        )}
                      </Show>
                    </select>
                  </Match>
                  <Match when={races.error}>
                    <span>Error: {races.error()}</span>
                  </Match>
                </Switch>
              </div>
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="class"
                >
                  Class
                </label>
                <Switch
                  fallback={<p class="text-muted-foreground">Loading...</p>}
                >
                  <Match when={!classes.loading}>
                    <select class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <Show when={classes()}>
                        {(value) => (
                          <>
                            <For each={[1, 2]}>
                              {(race) => (
                                <option
                                  id="class"
                                  class="text-sm font-medium text-muted-foreground"
                                  value={race}
                                >
                                  {race}
                                </option>
                              )}
                            </For>
                          </>
                        )}
                      </Show>
                    </select>
                  </Match>
                  <Match when={classes.error}>
                    <span>Error: {classes.error()}</span>
                  </Match>
                </Switch>
              </div>
            </div>
          </div>
          <div class="flex items-center p-6">
            <button
              onClick={submitData}
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ml-auto"
            >
              Start Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
