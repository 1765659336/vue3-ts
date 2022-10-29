import DefaultTheme from 'vitepress/theme';
import SecondEchartTest from "../../Components/index.vue"

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('SecondEchartTest', SecondEchartTest)
    }
}