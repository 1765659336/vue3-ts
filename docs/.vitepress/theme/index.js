import DefaultTheme from 'vitepress/theme';
import SecondEchartTest from "../../Components/SecondaryPackaging/SecondEchart/index.vue";
import CustomAffixTest from "../../Components/Custom/CustomAffix/index.vue";
import CustomBackTopTest from "../../Components/Custom/CustomBackTop/index.vue";
import CustomBadgeTest from "../../Components/Custom/CustomBadge/index.vue";
import CustomCantainerTest1 from "../../Components/Custom/CustomCantainer/index.vue";
import CustomCantainerTest2 from "../../Components/Custom/CustomCantainer/index2.vue";

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('SecondEchartTest', SecondEchartTest);
        app.component('CustomAffixTest', CustomAffixTest);
        app.component('CustomBackTopTest', CustomBackTopTest);
        app.component('CustomBadgeTest', CustomBadgeTest);
        app.component('CustomCantainerTest1', CustomCantainerTest1);
        app.component('CustomCantainerTest2', CustomCantainerTest2);
    }
}