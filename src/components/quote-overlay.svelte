<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import { quotes } from "../data/model";
    import type { Quote, SpellName } from "../data/model";
    export let spell: SpellName;
    let quote: Quote;
    const dispatch = createEventDispatcher();

    onMount(() => {
        quote = quotes.find((q) => q.suitableFor.find((s) => s === spell));
    });

    function close() {
        dispatch("close");
    }
</script>

<div class="overlay">
    <div class="card">
        <span>Quote: {quote?.text}</span>
        <button on:click={close}>Close</button>
    </div>
    <div class="overlay-backdrop" />
</div>

<style>
    .overlay {
        position: fixed;
        left: 0;
        top: 0;
    }
    .overlay-backdrop {
        background-color: #000000;
        opacity: 50%;
        height: 100vh;
        width: 100vw;
        z-index: 1;
    }
    .card {
        border-radius: 10px;
        background-color: var(--secondary);
        position: absolute;
        margin: 40vh 10vw;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 2;
    }
    .card > button {
        border-radius: 5px;
        background-color: var(--primary);
        border-style: none;
        padding: 0.5rem;
        margin: 1rem;
        color: var(--text-color);
    }
</style>
