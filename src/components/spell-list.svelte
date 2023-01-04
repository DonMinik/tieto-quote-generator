<script lang="ts">
    import SpellEntry from "./spell-entry.svelte";
    import { spells } from "../data/model";

    const cantripSpells = spells.filter((spell) => spell.level === 0);
    const firstLevelSpells = spells.filter((spell) => spell.level === 1);
    const secondLevelSpells = spells.filter((spell) => spell.level === 2);
</script>

<div class="content">
    <h2>Spell List</h2>
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
    h2 {
       margin: 1rem 1rem 1.5rem 1rem    }

    .content {
        padding: 0.5rem;
    }

    .list {
        list-style-type: none;
        padding: 0;
    }
    .list h3 {
        margin-left: 1rem;
    }

    .spell {
        border-top: 1px solid;
        border-color: var(--primary);
    }
    ul {
        margin: 0;
    }
</style>
