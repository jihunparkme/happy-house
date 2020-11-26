<template>
  <tr>
    <td>{{ no }}</td>
    <td>
      <router-link :to="`/read?no=${no}`">{{ title }}</router-link>
    </td>
    <td>{{ writer }}</td>
    <td>{{ getFormatDate(regDate) }}</td>
  </tr>
</template>

<script>
import moment from 'moment';
export default {
  name: 'row',
  props: {
    no: { type: Number },
    writer: { type: String },
    title: { type: String },
    regDate: { type: Date },
  },
  methods: {
    getFormatDate(regDate) {
      return moment(new Date(regDate)).format('YYYY.MM.DD');
    },
  },
};
</script>
