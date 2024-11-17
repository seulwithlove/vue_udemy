const app = Vue.createApp({
  data() {
    return {
      name: "Seul",
      age: 100,
      imgUrl:
        "https://lh3.googleusercontent.com/GLoH7rT6jRD-e6-vGIzbt41dsebD8UXnCJyokXpSHbk2YEMsYN_mA6krr_7IusjiLxhSXA6NoVGL1awXzVmX1eJ8uBHE0JlJDnxM=rw-e365-w524",
    };
  },
  methods: {
    showRandomNumber() {
      return Math.random().toFixed(2); // show a number with only 2 decimal places
    },
  },
});

app.mount("#assignment");
