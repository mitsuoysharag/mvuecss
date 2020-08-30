<template>
  <div>
    <h2>Card</h2>

    <m-card>
      <template slot="body">
        <h2>Title</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt fugiat harum maiores nulla animi? Earum beatae aperiam ducimus ex, minus deleniti voluptate cumque, obcaecati corrupti voluptatibus, quo nulla possimus iste?</p>
      </template>
      <template slot="actions">
        <m-btn color="primary" small class="mr-1">Cancel</m-btn>
        <m-btn color="error" small>Finish</m-btn>
      </template>
    </m-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>