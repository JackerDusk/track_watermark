import "ant-design-vue/dist/reset.css";
import {
  Layout,
  Button,
  Menu,
  Form,
  Table,
  Input,
  InputNumber
} from "ant-design-vue";

const components = [
  Layout,
  Button,
  Menu,
  Form,
  Table,
  Input,
  InputNumber
];
export function setupAntd(app: any) {
  components.forEach((component) => {
    app.use(component);
  });
}
