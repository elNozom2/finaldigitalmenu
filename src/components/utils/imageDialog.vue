<template>
  <div class="text-center">
    <v-dialog v-model="imageDialog.Active" width="500">
      <v-card>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          width="100%"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
        <v-icon class=""> mdi-close</v-icon>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
export default Vue.extend({
  computed: {
    ...mapGetters({
      imageDialog: "ui/imageDialog",
    }),
  },
});
</script>
<style></style>
