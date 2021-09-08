# Bootbox Svelte
bootbox-svelte is a wrapper of the bootboxjs module for Svelte.
Fancy alerts, confirm and prompt dialogs built on top of Bootstrap. Check the website for more information: <http://bootboxjs.com>

## How To Install
Just use npm:
```
npm i -D bootbox-svelte
```
This package also assumes that you have **Bootstrap** installed configured for your project. If not, please install it too.  
To do this, we recommand you to use the [Sveltestrap](https://sveltestrap.js.org/) wrapper, though you can install it directly from Bootstrap site
(you actually only need the CSS style sheet for bootbox-svelte to function).

## How to use

First, include this piece of code in your **App.svelte** file (or whatever you called your root component):
```
<script>
  import { Bootbox } from "bootbox-svelte";
  
  // ... rest of your code
</script>

<main>
  <!-- Rest of your code -->
  <Bootbox />
</main>
```

Then, you can call the `bootbox.alert`, `bootbox.confirm` and `bootbox.prompt` anywhere in your project!  
It even uses async/await syntax contrary to the original component, because it's not 2015 anymore :)
```
<script>
import { bootbox } from "bootbox-svelte";

async function startFancyDialog() {
  if (await bootbox.confirm("Hello there! Would you mind introducing yourself?")) {
    const name = await bootbox.prompt("What is your name?");
    await bootbox.alert("Nice to meet you, " + name +"! I'm BBB, the BootBox Bot :)");
  }
}
</script>

<main>
  <button on:click={startFancyDialog}>Start fancy dialog</button>
</main>
```

## Contribute
Feel free to contribute for this project. Issues and pull requests are welcomed.

## License
This project is licensed under the MIT License - see the [License](https://github.com/tmalahie/bootbox-svelte/blob/main/LICENSE) file for details
