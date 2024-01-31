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
          deleted: false,
        },
        {
          text: "Fai il bucato",
          done: false,
          deleted: false,
        },
        {
          text: "Studiare Vue.js",
          done: false,
          deleted: false,
        },
        {
          text: "Portare fuori il cane",
          done: false,
          deleted: false,
        },
      ],

      newTask: {
        text: "",
        done: false,
        deleted: false,
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
    isDeleted(task, index) {
      if (!task.deleted) task.deleted = true;
      else this.tasks.splice(index, 1);
    },

    /**
     *
     * @param {object} task task which restore his status
     */
    isRefreshed(task) {
      task.deleted = false;
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
