<script lang="ts">
	// displays a timer that counts down from a given time and emits an event when the time is up
	let { secondsLeft } = $props();
</script>

<div class="time-widget">
	{#each Array(9).fill(0) as _, i}
		<div class="box" class:red={secondsLeft > Math.abs(i - 4)}> </div>
	{/each}
</div>

<style>
    .red {
        background-color: #adf7bc;  
    }
	.time-widget {
        display: flex;
        justify-content: center;
    }
    .box {
        width: 30px;
        height: 30px;
        border: 2px solid #51f071;
    }
	
</style>
