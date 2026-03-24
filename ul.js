const app = Vue.createApp({
  data() {
    return {
      text_info: 'img/logo.png',
      isImage: true,
      Edu: "Training programs - Insights  Innovation - Leadership",
      Edulink: "https://www.thevipgroup.eu/#service-detail-education",
      Travel: "Logistics - Travel - Team building - Packages",
      Travelink: 'https://www.thevipgroup.eu/#service-detail-tourism',
      Code: "Websites - UI/UX Design  Responsive - Support",
      Codelink: 'https://www.thevipgroup.eu/#service-detail-web-design',
      AI: "AI implementation - Automation - Big Data - Analytics",
      AILink: 'https://www.thevipgroup.eu/#service-detail-ai-solutions',
      link: ''

      
    };
  },
  methods: {
    info(gun) {
      switch (gun) {
        case "Edu":
          this.text_info = this.Edu;
          this.isImage = false;
          this.link = this.Edulink;
          break;
        case "Travel":
          this.text_info = this.Travel;
          this.isImage = false;
          this.link = this.Travelink;
          break;
        case "Code":
          this.text_info = this.Code;
          this.isImage = false;
          this.link = this.Codelink;
          break;
        case "AI":
            this.text_info = this.AI;
            this.isImage = false;
            this.link = this.AILink;
        break;
      }
    },
    startDrag(e) {
      this.dragging = true;
      this.offsetX = e.offsetX;
      this.offsetY = e.offsetY;

      document.addEventListener("mousemove", this.onDrag);
      document.addEventListener("mouseup", this.stopDrag);
    },
    onDrag(e) {
      if (!this.dragging) return;

      const container = e.target.closest(".container").getBoundingClientRect();

      this.x = e.clientX - container.left - this.offsetX;
      this.y = e.clientY - container.top - this.offsetY;
    },
    stopDrag() {
      this.dragging = false;

      document.removeEventListener("mousemove", this.onDrag);
      document.removeEventListener("mouseup", this.stopDrag);
    }
  },
});


app.mount("#app");
