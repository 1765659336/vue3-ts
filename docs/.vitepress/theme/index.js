import DefaultTheme from 'vitepress/theme';
// 全局注册自定义指令
import Directives from '../../../src/v_instructions';

// component依赖组件
import customComponents from '../../../src/components/CustomComponents/index';

// markdown组件
import { customComponentsTest } from './custom';

const components = { ...customComponents, ...customComponentsTest }

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(Directives);
        for (const key in components) {
            if (Object.hasOwnProperty.call(components, key)) {
                const element = components[key];
                app.component(key, element);
            }
        }
    }
}