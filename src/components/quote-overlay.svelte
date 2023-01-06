<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import { quotes } from "../data/model";
    import type { Quote, Spell } from "../data/model";
    export let spell: Spell;
    let quote: Quote;
    const dispatch = createEventDispatcher();
    
    let dialog; // Reference to the dialog tag

    onMount(() => {
        const filteredQuotes = quotes.filter((q) => q.suitableFor.find((s) => s === spell.name || s === spell.category ));
        quote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
        dialog = document.getElementById('dialog');
        dialog['showModal']();
    });

    function close() {
        dispatch("close");
        dialog.close()
    }
</script>

<dialog id="dialog" class="overlay">
    <div>
        <div class="card">
            <span>{quote?.text}</span>
            <button on:click={close}>Close</button>
        </div>
    </div>
</dialog>

<style scoped>
    .overlay {
        background: none;
        border: none;
    }
    .overlay:backdrop {
        background-color: #000000;
        opacity: 50%;
        height: 100vh;
        width: 100vw;
        z-index: 1;
    }
    .card {
        border-radius: 10px;
        background-color: var(--secondary);
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 2;
    }

    .card > span {
        text-align: center;
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
