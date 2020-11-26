<template>
  <b-container fluid>
    <create-form type="create" />
  </b-container>
</template>

<script>
import CreateForm from '@/components/Form.vue';
export default {
  name: 'create',
  components: {
    CreateForm,
  },
};
</script>

<style></style>
