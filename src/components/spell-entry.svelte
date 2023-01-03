<script lang="ts">
    import { onMount } from "svelte";
    import QuoteOverlay from "./quote-overlay.svelte";
    import type {Spell} from "../data/model"

    export let spell: Spell;
    let showQuote = false;
</script>

<div class="spell" on:click={() => (showQuote = !showQuote)}>
   <p> <span>{spell.name}</span> <span class="tag {spell.category} "> {spell.category} </span> </p>
</div>

{#if showQuote}
    <QuoteOverlay spell={spell.name} on:close={() => (showQuote = false)} />
{/if}

<style scoped>
    .spell {
        margin: 0.5rem;
    }

    .spell > p {
        margin: 0.25rem;
    }

    .tag {
        border-radius: 4px;
        padding: 0.25rem;
    }
    .spell .Heal {
        background-color: rgb(188, 117, 181);
    }
    .spell .Damage {
        background-color: rgb(218, 93, 65);
    }
    .spell .Mental {
        background-color: rgb(136, 65, 218);
    }
    .spell .Support {
        background-color: rgb(125, 112, 39);
    }
    .spell .Protection {
        background-color: rgb(59, 79, 168);
    }
</style>
