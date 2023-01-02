<script lang="ts">
    import { onMount } from "svelte";

    export let name: string;

    onMount(() =>
        console.log('name',name)
    )
</script>
<div class='spell'>
    <span>{name}</span>
</div>

<style scoped>
    .spell {
        margin: 0.5rem;
        
    }

    .spell > span {
        margin: 4rem;
    }
   
</style>