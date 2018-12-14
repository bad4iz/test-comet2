<template>
    <div>
        <h2>{{$options.name}} id:{{id}}</h2>
        <p>{{ jopa}}</p>
        <div>
            <input type="text" v-model="name">
        </div>
        <div>
            <input type="text" v-model="fio">
        </div>
        <div>
            <input type="text" v-model="comment">
        </div>

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: {
    id: {
      type: Number,
      default: 1,
    },
  },
  name: 'Item1',
  methods: {
    ...mapActions([
      'change',
    ]),
  },
  beforeCreate() {
    console.log(mapActions([
      'change',
    ]));
  },
  computed: {
    ...mapGetters([
      // Mounts the "card" getter to the scope of your component.
      'getItem',
    ]),
    jopa: function()  {
      return  this['name'] + ' jopa';
    },
    name: {
      get() {
        return this.getItem(this.id).name;
      },
      set(value) {
        const [name, patronymic, surname] = this.fio.split(' ');
        this.change({
          id: this.id,
          name: value,
          fio: `${value} ${patronymic} ${surname}`,
        });
      },
    },
    fio: {
      get() {
        return this.getItem(this.id).fio;
      },
      set(value) {
        const [name, patronymic, surname] = value.split(' ');
        this.change({
          id: this.id,
          fio: value,
          name,
        });
      },
    },
    comment: {
      get() {
        return this.getItem(this.id).comment;
      },
      set(value) {
        this.change({
          id: this.id,
          comment: value,
        });
      },
    },
  },
};
</script>

<style scoped>
    .v-card {
        width: 300px;
        margin: 10px;
    }
</style>
