<template>
  <div>
    <section>
      <h2>Dialog</h2>
      <m-btn @click="show_dlg = true" color="primary">Show</m-btn>
    </section>

    <section>
      <h2>Persistent</h2>
      <m-btn @click="show_dlg_persistent = true" color="primary">Show Persistent</m-btn>
    </section>

    <section>
      <h2>Fullscreen</h2>
      <m-btn @click="show_dlg_fullscreen = true" color="primary">Show Fullscreen</m-btn>
    </section>

    <!-- DIALOG -->
    <m-dialog v-model="show_dlg">
      <section class="m-card">
        <div class="m-card__body">
          <h2>Title</h2>
          <p>Description</p>
        </div>
        <div class="m-card__actions">
          <m-btn @click="show_dlg = false" color="primary" small>Cerrar</m-btn>
        </div>
      </section>
    </m-dialog>

    <!-- DIALOG PERSISTENT -->
    <m-dialog v-model="show_dlg_persistent" persistent>
      <section class="m-card">
        <div class="m-card__body">
          <h2>Title</h2>
          <p>Description</p>
        </div>
        <div class="m-card__actions">
          <m-btn @click="show_dlg_persistent = false" color="primary" small>Cerrar</m-btn>
        </div>
      </section>
    </m-dialog>

    <!-- DIALOG FULLSCREEN -->
    <m-dialog v-model="show_dlg_fullscreen" fullscreen>
      <section class="m-card">
        <div class="m-card__body">
          <h2>Title</h2>
          <p>Description</p>
        </div>
        <div class="m-card__actions">
          <m-btn @click="show_dlg_fullscreen = false" color="primary" small>Cerrar</m-btn>
        </div>
      </section>
    </m-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    show_dlg: false,
    show_dlg_persistent: false,
    show_dlg_fullscreen: false,
  }),
};
</script>