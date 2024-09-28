import { markInstaller } from '@zy-element/utils';
import components from './components';
import '@zy-element/theme/index.css'

const installer = markInstaller(components);

export * from "@zy-element/components"

export default installer
