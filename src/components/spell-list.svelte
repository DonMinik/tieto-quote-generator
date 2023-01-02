<script lang="ts">
    import Spell from "./spell.svelte";

const spells = [
    'Magic Missles',
    'Grim Tendrills',
    'Soothe'
]
</script>
<div>
    <h1>Spell List</h1>
    <ul class='list'>
        {#each spells as spell}
        <li>
            <Spell name={spell}></Spell>
        </li>   
        {/each}
    </ul>
</div>

<style scoped>
h1 {
    padding: 1rem;
    margin:0;

}

.list {
    list-style-type: none;
    padding: 0;
    margin: 0.25rem;
}
</style>