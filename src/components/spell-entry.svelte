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
    <QuoteOverlay {spell} on:close={() => (showQuote = false)} />
{/if}

<style scoped>
    .spell {
      
        margin: 0.5rem;
    }

    .spell > p {
        margin: 0.5rem;
        display: flex;
        justify-content: space-between;
    }

    .spell > p >span {
        padding: 0.25rem;
    }

    .tag {
        border-radius: 4px;
    }
    .spell .Heal {
        background-color: #FFD9C0;
    }
    .spell .Damage {
        background-color: #FF9494;
    }
    .spell .Mental {
        background-color: #9EA1D4;
    }
    .spell .Support {
        background-color:#FAF0D7;
    }
    .spell .Protection {
        background-color: #8CC0DE;
    }
    .spell .Inspire {
        background-color: #F6C6EA;
    }
</style>
