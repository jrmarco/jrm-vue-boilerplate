<template>
    <section>
        <h1>{{ this.message }}</h1>
        Now do your magic! - {{ this.version }}
    </section>
</template>
<script>
export default {
  name: 'VueBoilerplate',
  data() {
    return {
      message: 'I\'m a Vue boilerplate bundler',
      version: '1.0',
    };
  },
};
</script>
