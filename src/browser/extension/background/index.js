import createDevStore from 'remotedev-app/lib/store/createDevStore';
import openDevToolsWindow from './openWindow';
import { toContentScript } from './messaging';

const store = createDevStore((action) => {
  toContentScript(action);
});

window.store = store;
window.store.liftedStore.instances = {};

chrome.commands.onCommand.addListener(shortcut => {
  openDevToolsWindow(shortcut);
});
