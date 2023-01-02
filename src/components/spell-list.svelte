<script lang="ts">
    import Spell from "./spell.svelte";
    import {spells} from '../data/model'
</script>

<div>
    <h1>Spell List</h1>
    <ul class="list">
        {#each spells as spell}
            <li class="spell">
                <Spell name={spell} />
            </li>
        {/each}
    </ul>
</div>

<style scoped>
    h1 {
        padding: 1rem;
        margin: 0;
    }

    .list {
        list-style-type: none;
        padding: 0;
    }

    .spell {
        margin: 0.5rem;
        height: 2vh;
        border-top: 1px solid;
        padding: 1rem;
    }
</style>
