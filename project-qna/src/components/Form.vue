<template>
  <div>
    <b-row class="my-3">
      <b-col sm="3">
        <label for="input-default">작성자 : </label>
      </b-col>
      <b-col sm="7">
        <b-form-input id="writer" placeholder="작성자를 입력하세요" v-model="writer"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-3">
      <b-col sm="3">
        <label for="input-default">제 목 : </label>
      </b-col>
      <b-col sm="7">
        <b-form-input id="title" placeholder="제목을 입력하세요" v-model="title"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-3">
      <b-col sm="3">
        <label for="input-default">내 용 : </label>
      </b-col>
      <b-col sm="7">
        <textarea type="text" class="form-control" id="contnet" ref="content" placeholder="내용을 입력하세요" v-model="content"></textarea>
      </b-col>
    </b-row>


    <b-row class="my-3">
      <b-col sm="7">
        <div class="text-right">
          <button class="btn btn-primary" v-if="type == 'create'" @click="checkHandler">등록</button>
          <button class="btn btn-primary" v-else @click="checkHandler">수정</button>
          <button class="btn btn-danger" @click="moveList">취소</button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import http from '@/util/http-common';
export default {
  name: 'board-Form',
  props: {
    type: { type: String },
  },
  data: function() {
    return {
      no: '',
      regDate: '',
      writer: '',
      title: '',
      content: '',
    };
  },
  methods: {
    checkHandler() {
      let err = true;
      let msg = '';
      !this.writer &&
        ((msg = '작성자를 입력해주세요'),
        (err = false),
        this.$refs.writer.focus());
      err &&
        !this.title &&
        ((msg = '제목 입력해주세요'), (err = false), this.$refs.title.focus());
      err &&
        !this.content &&
        ((msg = '내용 입력해주세요'),
        (err = false),
        this.$refs.content.focus());

      if (!err) alert(msg);
      else this.type == 'create' ? this.createHandler() : this.updateHandler();
    },
    createHandler() {
      http
        .post('/board', {
          writer: this.writer,
          title: this.title,
          content: this.content,
          regDate: this.regDate,
        })
        .then(({ data }) => {
          let msg = '등록 처리시 문제가 발생했습니다.';
          if (data === 1) {
            msg = '등록이 완료되었습니다.';
          }
          alert(msg);
          this.moveList();
        })
        .catch(() => {
          alert('등록 처리시 에러가 발생했습니다.');
        });
    },
    updateHandler() {
      http
        .put(`/board/${this.no}`, {
          no: this.no,
          regDate: this.regDate,
          writer: this.writer,
          title: this.title,
          content: this.content,
        })
        .then(({ data }) => {
          let msg = '수정 처리시 문제가 발생했습니다.';
          if (data === 1) {
            msg = '수정이 완료되었습니다.';
          }
          alert(msg);
          this.moveList();
        })
        .catch(() => {
          alert('수정 처리시 에러가 발생했습니다.');
        });
    },
    moveList() {
      this.$router.push('/qna.html');
    },
  },
  created() {
    if (this.type === 'update') {
      http
        .get(`/board/${this.$route.query.no}`)
        .then(({ data }) => {
          this.no = data.no;
          this.regDate = data.regDate;
          this.writer = data.writer;
          this.title = data.title;
          this.content = data.content;
        })
        .catch(() => {
          alert('에러가 발생했습니다.');
        });
    }
  },
};
</script>

<style scoped></style>
