import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    text: String
  },
  setup(props) {
    const appText = ref('xiaowan')
    return () => <p>MyComponent: {props.text} {appText.value}</p>
  }
}) 