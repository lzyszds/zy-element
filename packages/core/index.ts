import { markInstaller } from '@zy-element/utils';
import components from './components';
import '@zy-element/theme/index.css'
import '@zy-element/components/Icon/icons'


const installer = markInstaller(components);

export * from "@zy-element/components"

export default installer
