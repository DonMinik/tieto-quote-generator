<script lang="ts">
    import { onMount } from "svelte";
    import QuoteOverlay from "./quote-overlay.svelte";
    import type {SpellName} from "../data/model"

    export let name: SpellName;
    let showQuote = false;
</script>

<div class="spell" on:click={() => (showQuote = !showQuote)}>
    <span>{name}</span>
</div>

{#if showQuote}
    <QuoteOverlay spell={name} on:close={() => (showQuote = false)} />
{/if}

<style scoped>
    .spell {
        margin: 0.5rem;
    }

    .spell > span {
        margin: 4rem;
    }
</style>
