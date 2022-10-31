import DefaultTheme from 'vitepress/theme';
import SecondEchartTest from "../../Components/SecondaryPackaging/SecondEchart/index.vue";
import CustomAffixTest from "../../Components/Custom/CustomAffix/index.vue";
import CustomBackTopTest from "../../Components/Custom/CustomBackTop/index.vue";

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('SecondEchartTest', SecondEchartTest);
        app.component('CustomAffixTest', CustomAffixTest);
        app.component('CustomBackTopTest', CustomBackTopTest);
    }
}