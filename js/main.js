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

      newTask: {
        text: "",
        done: false,
      },
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
    /**
     *
     * @param {number} index index task which i have to delete
     */
    isDelete(index) {
      this.tasks.splice(index, 1);
    },

    // save new task
    saveTask() {
      this.tasks.push({ ...this.newTask });
      this.newTask.text = "";
    },
  },
});

// running the app
app.mount("#app");
