<script lang="ts">
    import SpellEntry from "./spell-entry.svelte";
    import { spells } from "../data/model";

    const cantripSpells = spells.filter((spell) => spell.level === 0);
    const firstLevelSpells = spells.filter((spell) => spell.level === 1);
    const secondLevelSpells = spells.filter((spell) => spell.level === 2);
</script>

<div>
    <h1>Spell List</h1>
    <ul class="list">
        {#if cantripSpells.length}
            <li><h3>Cantrips</h3></li>
        {/if}
        {#each cantripSpells as spell}
            
            <li class="spell">
                <SpellEntry {spell} />
            </li>
        {/each}
        {#if firstLevelSpells.length}
            <li><h3>First Level Spells</h3></li>
        {/if}
        {#each firstLevelSpells as spell}
            <li class="spell">
                <SpellEntry {spell} />
            </li>
        {/each}
        {#if secondLevelSpells.length}
            <li><h3>Second Level Spells</h3></li>
        {/if}
        {#each secondLevelSpells as spell}
            <li class="spell">
                <SpellEntry {spell} />
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
    .list h3 {
        margin-left: 1rem;
    }

    .spell {
        margin: 0.5rem;
        height: 2vh;
        border-top: 1px solid;
        padding: 1rem;
    }
</style>
