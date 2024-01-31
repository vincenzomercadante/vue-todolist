// recover of createApp method
const { createApp } = Vue;

// app creation
const app = createApp({
  data() {
    return {
      tasks: [
        {
          text: "Vai a comprare i giornali",
          done: false,
        },
        {
          text: "Fai il bucato",
          done: false,
        },
        {
          text: "Studiare Vue.js",
          done: false,
        },
        {
          text: "Portare fuori il cane",
          done: false,
        },
      ],
    };
  },

  methods: {
    /**
     *
     * @param {object} task task eseguita
     */
    isDone(task) {
      task.done = task.done ? false : true;
    },
  },
});

// running the app
app.mount("#app");
