import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
//import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          background: "rgba(250,230,153,0.67)" ,
        },
      },
    },
  },
});
