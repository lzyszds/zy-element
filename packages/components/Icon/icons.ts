import { addIcon } from "@iconify/vue";
import { icons as iconoir } from "@iconify-json/iconoir"
import { icons as eos } from '@iconify-json/eos-icons'

// 添加图标
const addIconsFromCollection = (prefix, collection, keys) => {
  for (const key of keys) {
    addIcon(`${prefix}-${key}`, {
      body: collection[key].body,
      width: 24,
      height: 24,
    });
  }
};

// 添加 iconoir 图标 https://icones.js.org/collection/iconoir
addIconsFromCollection('zy', iconoir.icons, Object.keys(iconoir.icons));

// 添加部分 eos-icons 图标 https://icones.js.org/collection/eos-icons
const eosArr = ['bubble-loading', 'arrow-rotate', 'machine-learning', 'machine-learning-outlined', 'master', 'master-outlined'];
addIconsFromCollection('zy', eos.icons, eosArr);
