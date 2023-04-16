new Vue({
    el: "#vue-app",
    data: {
        health: 100,
        impact: false,
        ended: false,
        isActive: false
    },
    methods: {
        punch: function() {
            this.health -= 10;
            if ( this.health -= 10) {
                this.impact = true;
                this.isActive = true;

                setTimeout(() => {
                    this.impact = false;
                    this.isActive = false;
                }, 300);
            }

            if (this.health <= 0) {
                this.ended = true;
            }
        },
        restart: function() {
            this.health = 100;
            this.ended = false;
        }
    },
    computed: {
    }
});