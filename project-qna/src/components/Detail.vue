<template>
  <div>
    <b-row class="my-2">
      <b-col sm="12 ">
         <table class="table table-bordered">
          <tr>
            <th>번호</th>
            <td>{{ no }}</td>
          </tr>
          <tr>
            <th>글쓴이</th>
            <td>{{ writer }}</td>
          </tr>
          <tr>
            <th>제목</th>
            <td>{{ title }}</td>
          </tr>
          <tr>
            <th>날짜</th>
            <td>{{ getFormatDate(regDate) }}</td>
          </tr>
          <tr>
            <th>내용</th>
            <td colspan="2">
              {{ content }}
            </td>
          </tr>
       </table>
      </b-col>
    </b-row>
    <br>
    <div class="text-center">
      <router-link to="/qna.html">
        <button class="btn btn-primary">목록</button>
      </router-link>
      <router-link :to="'/update?no=' + no">
        <button class="btn btn-success">수정</button>
      </router-link>
      <router-link :to="'/delete?no=' + no">
        <button class="btn btn-danger">삭제</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'detail',
  props: {
    no: { type: Number },
    writer: { type: String },
    title: { type: String },
    content: { type: String },
    regDate: { type: Date },
  },
  methods: {
    getFormatDate(regDate) {
      return moment(new Date(regDate)).format('YYYY.MM.DD');
    },
  },
};
</script>
