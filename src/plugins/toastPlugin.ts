import { TYPE, useToast } from "vue-toastification"

export default {
  install(app: any) {
    app.config.globalProperties.toast = ({ message, type = TYPE.SUCCESS }: { message: string; type?: TYPE }) => {
      const toast = useToast();
      toast(message, {
        type
      })
    }
  },
};
